import "../Styles/sign.scss";
import { useState } from "react";
import undrawlanding from "../Assets/undraw_job_offers.svg";
import { FaTimes } from "react-icons/fa";
import { MdArrowBackIosNew } from "react-icons/md"
import { useNavigate } from "react-router-dom";
import useAxios from "../Hooks/useAxios";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from "react-redux";
import { logOut, userIn } from "../Features/userSlice";
import Fade from "react-reveal/Fade";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [message, setMessage] = useState(null)

    const signIn = async (values) => {
        try {
            setMessage('Checking....')
            dispatch(logOut())
            const response = await useAxios.post('/auth/login', values)
            window.localStorage.setItem('jobTrackaUser', JSON.stringify(response.data));
            const user  = JSON.parse(window.localStorage.getItem('jobTrackaUser'))
            if (user){
                setMessage('Redirecting....')
                dispatch(userIn(user))
                navigate('/')
                setMessage(null)
            }
        } catch (error) {
            setMessage(error.response.data.msg)
        }
    }

  return (
    <div className="modal-container">
        <div className="modal">
            <Fade left>
            <section className="modal-sect2">
                <div className="flex-between">
                    <h3 className="logo pointer" onClick={() => navigate("/")} >JobTracka</h3>
                    <span className="pointer"> <FaTimes onClick={() => navigate("/")} /> </span>
                </div>
                <Formik
                    initialValues={{email:'', password:''}}
                    validate={values => {
                        const errors = {};
                        if (!values.email) {
                          errors.email = 'Required';
                        } else if (
                          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                          errors.email = 'Invalid email address';
                        }
                        return errors;
                      }}
                    onSubmit={ (values) => {
                        signIn(JSON.stringify(values, null, 2))
                    }}
                > 
                <Form className="modal-form">
                    <h2 className="center">Welcome Back, Sign In</h2>
                    <p className="modal-form-input-box">
                        <Field type="email" name="email" placeholder="Email" className="input"/> <br />
                        <ErrorMessage name="email" component="span" className="sign-error" />
                    </p>
                    <p className="modal-form-input-box">
                        <Field type="password" name="password" placeholder="Password" className="input"/> <br />
                        <span className="red ">{message}</span>
                    </p>
                    <button className="bg-red" type="submit" >Login</button>
                    <p className="center">Do not have an account? <span className="green pointer" onClick={()=>navigate('/signup')}>Create Account</span></p>
                </Form>
                </Formik>
                <p className="pointer flex-icons" onClick={() => navigate("/")} > <MdArrowBackIosNew/> Go Back</p>
            </section>
            </Fade>

            <Fade right>
            <section className="modal-sect1 bg-green">
                <img src={undrawlanding} alt="join illustration" />
            </section>
            </Fade>
        </div>
    </div>
  )
}

export default Login
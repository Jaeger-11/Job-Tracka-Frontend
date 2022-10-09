import "../Styles/sign.scss";
import { FaTimes } from "react-icons/fa";
import undrawjoin from "../Assets/undraw_join.svg";
import { MdArrowBackIosNew } from "react-icons/md"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useAxios from "../Hooks/useAxios";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from "react-redux";
import { logOut, userIn } from "../Features/userSlice";
import Fade from "react-reveal/Fade";

const Signup = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [message, setMessage] = useState(null)
    const signIn = async (values) => {
        try {
            dispatch(logOut())
            const response = await useAxios.post('/auth/signup', values)
            window.localStorage.setItem('jobTrackaUser', JSON.stringify(response.data));
            const user  = JSON.parse(window.localStorage.getItem('jobTrackaUser'))
            if (user){
                dispatch(userIn(user))
                navigate('/')
            }
        } catch (error) {
            setMessage(error.response.data.msg)
        }
    }

  return (
    <div className="modal-container">
        <div className="modal">
            <Fade left>
            <section className="modal-sect1 bg-red">
                <img src={undrawjoin} alt="join illustration" />
            </section>
            </Fade>

            <Fade right>
            <section className="modal-sect2">
                <div className="flex-between">
                    <h3 className="logo pointer" onClick={() => navigate("/")} >JobTracka</h3>
                    <span className="pointer"> <FaTimes onClick={() => navigate("/")} /> </span>
                </div>
                <Formik
                    initialValues={{username:'',email:'', password:''}}
                    validate={values => {
                        const errors = {};
                        if (!values.email) {
                          errors.email = 'Required';
                        } else if (
                          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                          errors.email = 'Invalid email address';
                        } else if( values.password.length < 6){
                            errors.password = "Password is too short!"
                        } else if (!values.username ){
                            errors.username = 'Required'
                        }
                        return errors;
                      }}
                    
                    onSubmit={ (values) => {
                        signIn(JSON.stringify(values, null, 2))
                    }}
                > 
                <Form className="modal-form">
                    <h2 className="center">Create Account</h2>
                    <p className="modal-form-input-box">
                        <Field type="text" name="username" placeholder="Username" className="input"/>
                        <ErrorMessage name="username" component="span" className="error" />
                    </p>
                    <p className="modal-form-input-box">
                        <Field type="email" name="email" placeholder="Email" className="input"/> <br />
                        <ErrorMessage name="email" component="span" className="error" />
                    </p>
                    <p className="modal-form-input-box">
                        <Field type="password" name="password" placeholder="Password" className="input"/> <br />
                        <ErrorMessage name="password" component="span" className="error" />
                        <span className="red" >{message}</span>
                    </p>
                    <button className="bg-green" type="submit">Sign Up</button>
                    <p className="center">Have an account already? <span className="red pointer" onClick={()=>navigate('/login')} >Login</span></p>
                </Form>
                </Formik>
                <p className="pointer flex-icons" onClick={() => navigate("/")} > <MdArrowBackIosNew/> Go Back</p>
            </section>
            </Fade>
        </div>
    </div>
  )
}

export default Signup
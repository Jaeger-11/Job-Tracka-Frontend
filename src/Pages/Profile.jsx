import '../Styles/profile.scss';
import { useSelector, useDispatch } from 'react-redux';
import { addGoal, getGoals } from '../Features/userSlice';
import { useEffect } from 'react';
import Goal from '../Components/goal';
import {HiOutlineUser} from "react-icons/hi";
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Profile = () => {
  const dispatch = useDispatch();
  const { username, goals } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getGoals());
  }, [])

  const handleSubmit = (values) => {
    dispatch(addGoal(values));
    dispatch(getGoals());
  }

  return (
    <div className="profile">
        <section className='user'>
          <div className='user-picture'> <HiOutlineUser size="30px"/> </div>
          <div className='user-info'>
            <h3>{username}</h3>
          </div>
        </section>  
        
        <section className='goals'>
          <h3>Goals / Tasks</h3>
          
          {goals && goals.count > 0 && 
          <>
          <table className='goals-cont'>
            <thead>
            <tr className='headers'>
              <td className="icon"></td>
              <td className="goal"></td>
              <td className="date center"> <b>Date Created</b> </td>
              <td className='click'> </td>
            </tr>
            </thead>
            <tbody>
            {goals.goal.map((item) => {
              return(
                <Goal {...item} key={item._id}/>
              )
            })}
            </tbody>
          </table>
          <i className="goal red"><b>*Click on Checkbox to switch status</b></i>
          <section className='note'>
            <div className='click flex-icons'>
              <p className='bg-green'></p> <b> Accomplished</b>
            </div>
            <div className='click flex-icons'>
              <p className='grey'></p> <b>Unaccomplished</b> 
            </div>
        </section>
        </>
          }

          { !goals.count &&  
          <div className="goals-empty">
            <p>You have no existing goals</p>
          </div> }

          <Formik 
            initialValues={{
              goal:"",
            }}
            validate={values=> {
              const errors = {};
              if(!values.goal){
                  errors.goal = "Field Required"
              }
              return errors;
            }}
            onSubmit={ (values, { resetForm }) => {
              const data = JSON.stringify(values,null,2)
              handleSubmit(values)
              resetForm()
            }}
          > 
            <Form className="add-cont">
              <h3>Add Goal</h3>
              <Field component="textarea" rows="5" name="goal" className="input" placeholder='Goal / Task'/>
              <ErrorMessage  name="goal" component="span" className="error"/>
              <div className='btn-cont'> <button type='submit'>Add</button> </div>
            </Form>
          </Formik>
        </section>
    </div>
  )
}

export default Profile;
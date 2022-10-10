import '../Styles/profile.scss';
import { useSelector, useDispatch } from 'react-redux';
import { getGoals } from '../Features/userSlice';
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

  return (
    <div className="profile">
        <section className='user'>
          <div className='user-picture'> <HiOutlineUser size="30px"/> </div>
          <div className='user-info'>
            <h3>{username}</h3>
          </div>
        </section>  
        <section className='goals'>
          <h3>Goals</h3>
          
          {goals && goals.goal && 
          
          <table className='goals-cont'>
            <tr className='headers'>
              <td className="icon"></td>
              <td className="goal"> <b></b> </td>
              <td className="date center"> <b>Date Created</b> </td>
              <td className='click'> </td>
              <td className="edit"></td>
            </tr>
            {goals.goal.map((item) => {
              return(
                <Goal {...item}/>
              )
            })}
          </table>

          }

          { !goals.count &&  
          <div className="goals-empty">
            <p>You have no existing goals</p>
            <span>Add Goal</span>
          </div> }

          <div className="add-cont">
            
            <div className='btn-cont'><button>Add Goal</button></div>
          </div>
        </section>
    </div>
  )
}

export default Profile;
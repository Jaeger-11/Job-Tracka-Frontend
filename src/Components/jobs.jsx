import React from 'react';
import {Link} from "react-router-dom";
import {MdLocationPin} from 'react-icons/md';
import {BsCalendarEventFill, BsBagCheckFill} from 'react-icons/bs';
import "../Styles/applications.scss";
import { useDispatch } from 'react-redux';
import { deleteApplication, getApplication } from '../Features/newSlice';
import { getAllApplications } from '../Features/applicationSlice';
import Fade from 'react-reveal/Fade';

const Jobs = ({ company, position, location, status, jobType, createdAt, _id }) => {
    const dispatch = useDispatch();
    const deleteJob = () => {
        dispatch(deleteApplication(_id));
        dispatch(getAllApplications());
    }
    const viewDetails = () => {
        dispatch(getApplication(_id))
    }
    const editDetails = () => {
        dispatch(getApplication(_id))
    }

    let bg = "pending"
    if (status === 'success'){
        bg = 'success'
    } else if( status === 'interview' ){
        bg = 'interview'
    } else if( status === 'rejected' ){
        bg = 'rejected'
    }else if( status === 'declined' ){
        bg = 'declined'
    } 
  return (
    <Fade bottom>
    <div className='jobs' key={_id}>
        <section className='jobs-sect-1'>
            <h3>{position}</h3>
            <p>{company}</p>
        </section>
        <section className=' jobs-sect-2'>
            <div className='flex-sect'>
                <p className='flex-icon'>
                    <BsBagCheckFill/>
                    <span>{jobType}</span>
                </p>
                <p className='flex-icon'>
                    <MdLocationPin/>
                    <span>
                        {location.length > 20 ? location.substring(0,15) : location}
                        {location.length > 20 && '...'}
                    </span>
                </p>
            </div>
            <div className='flex-sect'>
                <p className='flex-icon'>
                    <BsCalendarEventFill/>
                    <span>{createdAt.substring(0, 10)}</span>
                </p>
                <p>
                    <i>{status}</i>
                </p>
            </div>
        </section>
        <section className="job-sect flex-between">
            <p className = "flex-icons">
                <Link to='edit' className='green pointer' onClick={editDetails}>Edit</Link>
                <span className='red pointer' onClick={deleteJob}>Delete</span>
            </p>
            <Link to={_id}><button className={bg} onClick={viewDetails} >View Details</button></Link>
        </section>
    </div>
    </Fade>
  )
}

export default Jobs
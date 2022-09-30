import React from 'react';
import {Link} from "react-router-dom";
import {MdLocationPin} from 'react-icons/md';
import {BsCalendarEventFill, BsBagCheckFill} from 'react-icons/bs';
import "../Styles/applications.scss";
import Toast from "../Components/toast";
import { useSelector, useDispatch } from 'react-redux';
import { deleteApplication } from '../Features/newSlice';
import { getAllApplications } from '../Features/applicationSlice';

const Jobs = ({ company, position, location, status, jobType, createdAt, _id }) => {
    const dispatch = useDispatch();
    const { fetchStatus } = useSelector((state) => state.application)
    const deleteJob = () => {
        dispatch(deleteApplication(_id));
        dispatch(getAllApplications());
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
    <div className='jobs' key={_id}>
        {fetchStatus === "loading" && <Toast content="Deleting..." />}
        {fetchStatus === "success" && <Toast content="Application Deleted" style="success" />}
        {fetchStatus === "failed" && <Toast content="Error Occured..." style="failed" />}
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
                    <span>{location}</span>
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
                <Link to={_id} className='green pointer'>Edit</Link>
                <span className='red pointer' onClick={deleteJob}>Delete</span>
            </p>
            <button className={bg}>View Details</button>
        </section>
    </div>
  )
}

export default Jobs
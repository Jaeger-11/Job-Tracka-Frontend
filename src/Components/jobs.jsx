import React from 'react';
import {MdLocationPin} from 'react-icons/md';
import {BsCalendarEventFill, BsBagCheckFill} from 'react-icons/bs';
import "../Styles/applications.scss";

const Jobs = ({ company, position, location, status, jobType, createdAt, _id }) => {
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
        <section className='jobs-sect-1'>
            <h3>{position}</h3>
            <p>{company}</p>
        </section>
        <section className='flex-sect jobs-sect-2'>
            <div>
                <p className='flex-icons'>
                    <BsBagCheckFill/>
                    <span>{jobType}</span>
                </p>
                <p className='flex-icons'>
                    <MdLocationPin/>
                    <span>{location}</span>
                </p>
            </div>
            <div>
                <p className='flex-icons'>
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
                <span className='green pointer'>Edit</span>
                <span className='red pointer'>Delete</span>
            </p>
            <button className={bg}>View Details</button>
        </section>
    </div>
  )
}

export default Jobs
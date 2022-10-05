import React from 'react';
import {Link, useNavigate } from 'react-router-dom';
import '../Styles/applications.scss';
import { useSelector, useDispatch } from 'react-redux';
import {BsDashLg} from 'react-icons/bs';
import { getAllApplications } from '../Features/applicationSlice';
import { deleteApplication, getApplication } from '../Features/newSlice';
import Toast from '../Components/toast';

const Application = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const { fetchStatus, application } = useSelector((state) => state.application)
    const { position, company, location, status, jobType, createdAt, updatedAt, notes, _id } = application;
    const deleteJob = () => {
      dispatch(deleteApplication(_id));
      dispatch(getAllApplications());
      navigate('/applications')
    }
    const editDetails = () => {
      dispatch(getApplication(_id))
      navigate('/applications/edit')
    }


  return (
    <div className='application'>
      <Link to='/applications' className='red'> {'< Back'} </Link>
      {fetchStatus === "loading" && <Toast content="Deleting..." />}
      {fetchStatus === "success" && <Toast content="Application Deleted" style="success" />}
      {fetchStatus === "failed" && <Toast content="Error Occured..." style="failed" />}
      
      <section className='application-info'>
        <h3 className='center'>Application Details</h3>
        <p className='flex-icons'> <span>position</span> <BsDashLg/> {position} </p>
        <p  className='flex-icons'> <span>company</span> <BsDashLg/> {company} </p>
        <p className='flex-icons'> <span>location</span> <BsDashLg/> {location} </p>
        <p className='flex-icons'> <span>status</span> <BsDashLg/> {status} </p>
        <p className='flex-icons'> <span>jobType</span> <BsDashLg/> {jobType} </p>
        <p className='flex-icons'> <span>notes</span> <BsDashLg/> {notes} </p>
        <div className='flex-between'>
          <p> <span>Application Date :</span> { createdAt ?  createdAt.substring(0, 10) : ""} </p>
          <p> <span>Last Updated :</span> {updatedAt ? updatedAt.substring(0, 10) : ""} </p>
        </div>
        <div className='application-btn'>
          <button className='edit' onClick={editDetails}>Edit</button>
          <button className='del' onClick={deleteJob}>Delete</button>
        </div>
      </section>
      
    </div>
  )
}

export default Application;
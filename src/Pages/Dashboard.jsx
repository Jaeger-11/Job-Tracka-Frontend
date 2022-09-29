import React from 'react';
import Sidebar from '../Components/sidebar';
import Current from '../Components/current';
import FixedProfile from '../Components/fixedProfile';
import { useNavigate } from 'react-router-dom';
import "../Styles/dashboard.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DashStats from '../Components/dashStats';
import welcome from '../Assets/undraw_welcome.svg';

const Dashboard = () => {
  const { username, token } = useSelector((store) =>  store.user );
  // const navigate = useNavigate()
  // if(!token){
  //   navigate('/')
  // }
  return (
    <div className='flex-all'>
        <Sidebar/>
        <div className='dashboard'>
            <Current/>
            <section className='flex-all' >
                <main className='dashboard-main flex-column'>
                  <section className='welcome' >
                    <div className='welcome-text'>
                      <h2>Welcome {username}!</h2>
                      <p>How is the job hunting?</p>
                    </div>
                    <p className='welcome-img'>
                      <img src={welcome} alt="welcome"/>
                    </p>
                  </section>

                  <DashStats/>

                  <div className = "flex-between">
                    <Link to="/applications">
                      <span className="green pointer">View Applications</span>
                    </Link>
                    <Link to="/analytics">
                      <span className="red pointer" >Check Analytics</span> <br/>
                    </Link>
                  </div>
                </main>
                <FixedProfile/>
            </section>
        </div>
    </div>
  )
}

export default Dashboard
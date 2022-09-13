import React from 'react';
import Sidebar from '../Components/sidebar';
import Current from '../Components/current';
import FixedProfile from '../Components/fixedProfile';
import "../Styles/dashboard.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import welcome from '../Assets/undraw_welcome.svg';
import { useQuery } from 'react-query';
import axios from 'axios';

const Dashboard = () => {
  const { username, token } = useSelector((store) =>  store.user )

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

                  <div className = "flex-between">
                    <Link to="/applications"><span className="green pointer">View Applications</span></Link>
                    <Link to="/analytics"><span className="red pointer" >Check Analytics</span></Link>
                  </div>
                </main>
                <FixedProfile/>
            </section>
        </div>
    </div>
  )
}

export default Dashboard
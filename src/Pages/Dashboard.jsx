import React from 'react';
import "../Styles/dashboard.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DashStats from '../Components/dashStats';
import welcome from '../Assets/undraw_welcome.svg';

const Dashboard = () => {
  const { username} = useSelector((store) =>  store.user );

  return (
  <main className='dashboard-main flex-column'>
    <section className='welcome' >
      <div className='welcome-text'>
        <h2>Welcome {username}!</h2>
        <p>How is the job hunting? <br /> 
          Hopefully we get a win this week, don't give up!!
        </p>
      </div>
      <p className='welcome-img'>
        <img src={welcome} alt="welcome"/>
      </p>
    </section>

    <DashStats/>

    <div className = "flex-between">
      <Link to="/new">
        <span className="green pointer">Add Application</span>
      </Link>
      <Link to="/analytics">
        <span className="red pointer" >Check Analytics</span> <br/>
      </Link>
    </div>
  </main>
  )
}

export default Dashboard
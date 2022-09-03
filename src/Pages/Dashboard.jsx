import React from 'react';
import Sidebar from '../Components/sidebar';
import Current from '../Components/current';
import FixedProfile from '../Components/fixedProfile';
import "../Styles/dashboard.scss"

const Dashboard = () => {
  return (
    <div className='flex-all'>
        <Sidebar/>
        <div className='dashboard'>
            <Current/>
            <section className='flex-all' >
                <main className='dashboard-main'>
                    DASHBOARD CONTENTS <br />
                    sdsdd
                </main>
                <FixedProfile/>
            </section>
        </div>
    </div>
  )
}

export default Dashboard
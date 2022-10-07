import React from 'react';
import Sidebar from './sidebar';
import Current from './current';
import FixedProfile from './fixedProfile';
import '../Styles/layout.scss';
import { Outlet } from 'react-router-dom';
import MobileNavbar from './mobileNavbar';

const Layout = () => {

  return (
    <div className='layout'>
        <Sidebar/>
        <MobileNavbar/>
        <section className='container'>
            <Current/>
            <main className='main-content'>
                <div className='content'>
                    <Outlet/>
                </div>
                <FixedProfile/>
            </main>
        </section>
    </div>
  )
}

export default Layout;
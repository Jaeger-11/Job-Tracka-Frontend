import React from 'react';
import Sidebar from './sidebar';
import Current from './current';
import FixedProfile from './fixedProfile';
import '../Styles/layout.scss';
import { Outlet } from 'react-router-dom';

const Layout = () => {

  return (
    <div className='layout'>
        <Sidebar/>
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
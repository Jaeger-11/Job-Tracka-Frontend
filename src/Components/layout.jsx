import React from 'react';
import Sidebar from './sidebar';
import Current from './current';
import FixedProfile from './fixedProfile';
import '../Styles/layout.scss';
import { Outlet } from 'react-router-dom';
import MobileNavbar from './mobileNavbar';
import { useLocation } from "react-router-dom";
import { useEffect } from 'react';
  

const Layout = () => {
  const location = useLocation();
  const pathnmame = location.pathname
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
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
                {pathnmame !== "/profile" &&  <FixedProfile/>}
            </main>
        </section>
    </div>
  )
}

export default Layout;
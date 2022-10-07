import React, { useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { showSide, showNavbar } from '../Features/userSlice';
import { useEffect } from 'react';

const Current = () => {
  const dispatch = useDispatch();
  const { showSidebar, token, username} = useSelector((state) => state.user)
  const [cDate, setcDate] = useState();
  let pathname = useLocation().pathname;
  if (pathname.startsWith("/applications/")){
    pathname = "Application"
  }
  let currentDate = new Date().toLocaleString();
  setInterval(() => {
      currentDate = new Date().toLocaleString();
      setcDate(currentDate)
  }, 1000);
  const navigate = useNavigate();
    useEffect(()=>{
        if( !token || !username ){
            navigate('/home')
        }
    })

  const toggleSidebar = () => {
    dispatch(showSide(!showSidebar));
    dispatch(showNavbar(true))
  }

  return (
    <div className='flex-between current'>
      <div className='menu-box'>
          <label className='menu' onClick={toggleSidebar}> 
            <span className={`${showSidebar ? 'firstChange' : 'first'} bar`}></span>
            <span className={`${showSidebar ? 'secondChange' : 'second'} bar`}></span>
            <span className={`bar ${showSidebar && 'thirdChange'}`}></span>
          </label>
          <p className='pathname'>{pathname.replace('/', '')}</p>
      </div>
        <p className='currentDate'>{currentDate}</p>
    </div>
  )
}

export default Current
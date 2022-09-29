import React, { useState } from 'react';
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { showSide } from '../Features/userSlice';

const Current = () => {
  const dispatch = useDispatch();
  const { showSidebar } = useSelector((state) => state.user)
  const [cDate, setcDate] = useState();
  const pathname = useLocation().pathname
  let currentDate = new Date().toLocaleString();
  setInterval(() => {
      currentDate = new Date().toLocaleString();
      setcDate(currentDate)
  }, 1000);

  const toggleSidebar = () => {
    dispatch(showSide(!showSidebar));
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
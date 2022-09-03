import React, { useState } from 'react';
import { useLocation } from "react-router-dom";

const Current = () => {
    const [cDate, setcDate] = useState();
    const pathname = useLocation().pathname
    let currentDate = new Date().toLocaleString();
    setInterval(() => {
        currentDate = new Date().toLocaleString();
        setcDate(currentDate)
    }, 1000);
  return (
    <div className='flex-between current'>
        <p className='pathname'>{pathname.replace('/', '')}</p>
        <p className='currentDate'>{currentDate}</p>
    </div>
  )
}

export default Current
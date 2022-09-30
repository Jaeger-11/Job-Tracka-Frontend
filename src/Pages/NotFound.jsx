import React from 'react';
import { Link } from 'react-router-dom';
import notfound from "../Assets/undraw_notfound.svg";

const NotFound = () => {
  return (
    <div className="notfound">
      <section>
        <img src={notfound} alt="not-found" />
        <h1>404 Error</h1>
        <h2>Ooops Page not Found</h2>
        <h3 className='red pointer'>
          <Link to="/">Go Back Home </Link>  
        </h3>
      </section>
    </div>
  )
}

export default NotFound
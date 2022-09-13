import React from 'react';
import notfound from "../Assets/undraw_notfound.svg";

const NotFound = () => {
  return (
    <div className="notfound">
      <section>
        <img src={notfound} alt="not-found" />
        <h1>404 Error</h1>
        <h2>Ooops Page not Found</h2>
        <h3 className='red pointer'>Go Back Home </h3>
      </section>
    </div>
  )
}

export default NotFound
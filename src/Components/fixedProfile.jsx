import React from 'react';
import { useSelector } from 'react-redux';

const FixedProfile = () => {
  const { username, token } = useSelector((store) =>  store.user )

  return (
    <div className='fixed-profile'>
        <section>
          <p className="red pointer">Log out</p>
          <article>
            <div className='user-img-cont'></div>
            <h3>{username}</h3>
          </article>
          
          <ul>
            <h3> Goals</h3>
            <li>Record a total of 10 applications weekly</li>
            <li>Work on my CV</li>
            <li>Work on my social media presence, especially LinkedIn</li>
          </ul>
        </section>
    </div>
  )
}

export default FixedProfile
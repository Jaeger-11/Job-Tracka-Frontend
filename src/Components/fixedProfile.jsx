import React from 'react';
import { useSelector } from 'react-redux';
import GoalsProfile from './goalsProfile';
import Slide from 'react-reveal/Slide';

const FixedProfile = () => {
  const { username} = useSelector((store) =>  store.user )

  return (
    <Slide right>
    <div className='fixed-profile'>
        <section>
          <p className="red pointer">Log out</p>
          <article>
            <div className='user-img-cont'></div>
            <h3>{username}</h3>
          </article>
          <GoalsProfile/>
        </section>
    </div>
    </Slide>
  )
}

export default FixedProfile
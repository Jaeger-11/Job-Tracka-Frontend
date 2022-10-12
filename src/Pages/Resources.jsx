import React from 'react';
import resources from "../Assets/undraw_articles.svg";

const Resources = () => {
  return (
    <div className='resources'>
      <section className='img-cont'>
        <img src={resources} alt="resources still in production" />
      </section>
      <p>
        <b>Resources page</b>  still in production, collating resources and articles on different platforms that are 
        beneficial and insightful in helping get a good job.
        <ul>
          <b>Articles on</b>  
          <li>How to write a good CV/Resume</li>
          <li>Preparation for Interviews</li>
          <li>How to handle imposter syndrome and boost your professional confidence</li>
          <li>Sites to search for remote jobs</li>
        </ul>
         <b> For Techies</b>, top sites and people to follow accross different social media applications to get tech contents and job opportunities.

        <i>*Hopefully, in the nearest future this page would be completed and it would be insightful and of good use to you.</i>
      </p>
    </div>
  )
}

export default Resources
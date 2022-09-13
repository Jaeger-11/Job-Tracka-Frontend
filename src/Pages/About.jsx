import React from 'react';
import Sidebar from '../Components/sidebar';
import Current from '../Components/current';
import '../Styles/about.scss';

const About = () => {
  return (
    <div className='flex-all'>
        <Sidebar/>
        <div className='dashboard'>
            <Current/>
            <section className='about'>

              <div className='about-hero'>
                <article className='about-hero-article'>
                  <h2>JobTracka</h2>
                  <p>
                    JobTracka helps to efficiently record and monitor your job hunting process,
                    right from the application stage to the end result of the application.
                  </p>
                </article>
                <div className='about-hero-total'>
                  <p>A total of <span>500</span> users</p>
                </div>
              </div>

              <footer>
                <span> Designed & Developed by <a href="http://github.com/Jaeger-11" className='green'> <i>Falodun Oluwadamilola</i> </a> </span> <br />
                <span> <a href="http://github.com/Jaeger-11" className='red'> <u>Check Out Other Projects</u> </a> </span>
              </footer>
            </section>
        </div>
    </div>
  )
}

export default About
import React from 'react';
import '../Styles/about.scss';
import Navigation from '../Components/navigation';
import timeline from "../Assets/undraw_timeline.svg";
import notes from "../Assets/undraw_notes.svg";
import report from "../Assets/undraw_report.svg";
import { Link } from 'react-router-dom';
import {FaTwitter,FaLinkedin} from 'react-icons/fa';
import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <div className='about-cont'>
      <Navigation/>
      <header>
        <Fade left><h1 className='center'> A web application for easier management and tracking of job applications </h1></Fade>
      </header>
      <section className='about'>
        
        <div className='about-hero'>
          <div className='about-hero-total'>
            <Fade bottom><img src={timeline} alt="record" /></Fade>  
          </div>
          <article className='about-hero-article'>
            <h3>Record / Add Applications</h3>
            <Fade bottom><p>
              JobTracka helps to efficiently record and monitor your job hunting process,
              right from the application stage to the end result of the application.
            </p></Fade>
            <span> <Link to="/signup">Record your first application</Link></span>
          </article>
        </div>

        <div className='about-hero turn'>
          <article className='about-hero-article'>
            <h3>Set Goals / Tasks</h3>
            <Fade bottom><p>
              Set goals and tasks related to your professional career
            </p></Fade>
            <span> <Link to="/signup">Set your first goal</Link></span>
          </article>
          <div className='about-hero-total'>
          <Fade bottom><img src={notes} alt="set goals" /></Fade> 
          </div>
        </div>

        <div className='about-hero'>
          <div className='about-hero-total'>
          <Fade bottom><img src={report} alt="analytics" /></Fade> 
          </div>
          
          <article className='about-hero-article'>
            <h3>Check Analytics/Statistics on Applications</h3>
            <Fade bottom><p>
              View Statistics on recorded, classifying job applications based on its status, pending,
              interview, success, rejected or declined, check your total monthly applications.
            </p></Fade>
          </article>
        </div>

      </section>

      <footer>
          <span> Developed by <a href="http://github.com/Jaeger-11" className='green'> <i>Oluwadamilola Falodun</i> </a> </span> <br /> <br />
          <span> <a href="http://github.com/Jaeger-11" className='red'> <u>Check Out Other Projects</u> </a> </span> <br /> <br />
          <a href="http://twitter.com/damzypaulzs"> <FaTwitter size="1.5rem"/> </a>
          <a href="http://www.linkedin.com/in/oluwadamilola-falodun-b084221a"> <FaLinkedin size="1.5rem"/> </a> <br />
        </footer>
    </div>
  )
}

export default About
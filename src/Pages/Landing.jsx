import Navigation from "../Components/navigation";
import { useNavigate } from "react-router-dom";
import "../Styles/landing.scss";
import laptopwhite from "../Assets/laptopwhite-landing.jpg";
import undrawreminder from "../Assets/undraw_reminder.svg";

const Landing = () => {
    const navigate = useNavigate();

    return (
    <div className="landing">
        <Navigation/>

        <section className="landing-container">
            <article className="landing-herobox">
                <h1>JobTracka</h1>
                
                <p className="herotext">
                    In this market of job hunting and the repetitive cycle of job applications, 
                    we end up losing track of some applications. Tired of losing track and count of your job applications?
                    Sign up to record and keep track of all applications, check analytics and set goals.
                </p>
                <p className="herolink"> 
                    <p className="login" onClick={() => navigate('/login')} >Login</p> /
                    <p className="signup" onClick={() => navigate('/signup')}> Sign Up</p>
                </p>
            </article>
            <div className="landing-heroimage">
                <img src={undrawreminder} alt="Hero Image" />
            </div>
        </section>
    </div>
  )
}

export default Landing
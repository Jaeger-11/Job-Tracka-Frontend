import "../Styles/sign.scss";
import undrawlanding from "../Assets/undraw_job_offers.svg";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="modal-container">
        <div className="modal">
            <section className="modal-sect2">
                <div className="flex-between">
                    <h3 className="logo">JobTracka</h3>
                    <span className="pointer"> <FaTimes onClick={() => navigate("/")} /> </span>
                </div>
                <form action="" method="post" className="modal-form">
                    <h2 className="center">Welcome Back, Sign In</h2>
                    <p className="modal-form-input-box"><input type="email" name="email" id="email" placeholder="Email" /></p>
                    <p className="modal-form-input-box"><input type="password" name="password" id="password" placeholder="Password" /></p>
                    <button className="bg-red">Login</button>
                    <p className="center">Do not have an account? <span className="green pointer" onClick={()=>navigate('/signup')}>Create Account</span></p>
                </form>
                <p className="pointer" onClick={() => navigate("/")} >Go Back</p>
            </section>
            <section className="modal-sect1 bg-green">
                <img src={undrawlanding} alt="join illustration" />
            </section>
        </div>
    </div>
  )
}

export default Login
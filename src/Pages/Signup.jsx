import "../Styles/sign.scss";
import { FaTimes } from "react-icons/fa";
import undrawjoin from "../Assets/undraw_join.svg";
import { MdArrowBackIosNew } from "react-icons/md"
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();
  return (
    <div className="modal-container">
        <div className="modal">
            <section className="modal-sect1 bg-red">
                <img src={undrawjoin} alt="join illustration" />
            </section>
            <section className="modal-sect2">
                <div className="flex-between">
                    <h3 className="logo pointer" onClick={() => navigate("/")} >JobTracka</h3>
                    <span className="pointer"> <FaTimes onClick={() => navigate("/")} /> </span>
                </div>
                <form action="" method="post" className="modal-form">
                    <h2 className="center">Create Account</h2>
                    <p className="modal-form-input-box"><input type="text" name="username" id="username" placeholder="Username" /></p>
                    <p className="modal-form-input-box"><input type="email" name="email" id="email" placeholder="Email" /></p>
                    <p className="modal-form-input-box"><input type="password" name="password" id="password" placeholder="Password" /></p>
                    <button className="bg-green">Sign Up</button>
                    <p className="center">Have an account already? <span className="red pointer" onClick={()=>navigate('/login')} >Login</span></p>
                </form>
                <p className="pointer flex-icons" onClick={() => navigate("/")} > <MdArrowBackIosNew/> Go Back</p>
            </section>
        </div>
    </div>
  )
}

export default Signup
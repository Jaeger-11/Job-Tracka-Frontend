import { Link } from "react-router-dom";
import "../Styles/navigation.scss";

const Navigation = () => {
  return (
    <nav className="navigation">
        <h3 className="logo"> <Link to="/">JobTracka</Link> </h3>

        <div className="navigation-sub">
            <p> <Link to='/about'>About</Link> </p>
            <div> 
                <Link to="/login"><button className="login"> Login </button></Link>
            </div>
        </div>
    </nav>
  )
}

export default Navigation
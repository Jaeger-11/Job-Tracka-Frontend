import data from "../Data/sidebarData";
import "../Styles/sidebar.scss"
import { useNavigate, useLocation } from "react-router-dom";
import {MdLogout} from "react-icons/md";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { showNavbar, logOut } from "../Features/userSlice";
import  Fade from "react-reveal/Fade";

const MobileNavbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const pathname = useLocation().pathname

    const { showMobileSidebar } = useSelector((state) => state.user)

    const sideNavigate = (link) => {
        navigate(link)
        dispatch(showNavbar(false))
    }

    if (showMobileSidebar){
        return (
            <Fade left>
            <aside className="sidebar mobile">
                <label className='menu cancel' onClick={() => dispatch(showNavbar(false))}> 
                    <span className={`${showMobileSidebar ? 'firstChange' : 'first'} bar`}></span>
                    <span className={`${showMobileSidebar ? 'secondChange' : 'second'} bar`}></span>
                    <span className={`bar ${showMobileSidebar && 'thirdChange'}`}></span>
                </label>
                <h3 className="logo">JobTracka</h3>                  
        
                <section className="sidebar-main">
                    {data.map((item) => {
                        const { name, link, icon, id } = item;
                        return (
                            <Fade top key={id}>
                            <div key={id} onClick={() => sideNavigate(link)} className={`${ pathname === link && 'active' } pointer flex-icons sidelink`} >
                                 {icon} 
                                <p>{name}</p>
                            </div>
                            </Fade>
                        )
                    })}
                </section>
        
                <div 
                onClick={() => dispatch(logOut())} 
                className="pointer flex-icons red" 
                style={{width:'max-content'}}>
                   <MdLogout/>
                   <p>Log Out</p> 
                </div>
            </aside>
            </Fade>
          )
    }
  
}

export default MobileNavbar;
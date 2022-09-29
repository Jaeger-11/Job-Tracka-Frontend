import data from "../Data/sidebarData";
import "../Styles/sidebar.scss"
import { useNavigate, useLocation } from "react-router-dom";
import {MdLogout} from "react-icons/md";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { showSide, logOut } from "../Features/userSlice";

const Sidebar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const pathname = useLocation().pathname

    const { showSidebar } = useSelector((state) => state.user)

    const sideNavigate = (link) => {
        navigate(link)
        // dispatch(showSide(false))
    }

    if (showSidebar){
        return (
            <aside className="sidebar">
                {/* <p className="cancel" onClick={() => dispatch(showSide(false))}> <FaTimes size='20px'/> </p> */}
                <label className='menu cancel' onClick={() => dispatch(showSide(false))}> 
                    <span className={`${showSidebar ? 'firstChange' : 'first'} bar`}></span>
                    <span className={`${showSidebar ? 'secondChange' : 'second'} bar`}></span>
                    <span className={`bar ${showSidebar && 'thirdChange'}`}></span>
                </label>
                <h3 className="logo">JobTracka</h3>                  
        
                <section className="sidebar-main">
                    {data.map((item) => {
                        const { name, link, icon, id } = item;
                        return (
                            <div key={id} onClick={() => sideNavigate(link)} className={`${ pathname === link && 'active' } pointer flex-icons sidelink`} >
                                 {icon} 
                                <p>{name}</p>
                            </div>
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
          )
    }
  
}

export default Sidebar;
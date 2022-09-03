import data from "../Data/sidebarData";
import "../Styles/sidebar.scss"
import { useNavigate } from "react-router-dom";
import {MdLogout} from "react-icons/md";

const Sidebar = () => {
    const navigate = useNavigate();

  return (
    <aside className="sidebar">
        <h3 className="logo">JobTracka</h3>

        <section className="sidebar-main">
            {data.map((item) => {
                const { name, link, icon, id } = item;
                return (
                    <div key={id} onClick={() => navigate(link)} className="pointer flex-icons sidelink" >
                         {icon} 
                        <p>{name}</p>
                    </div>
                )
            })}
        </section>

        <div className="pointer flex-icons">
           <MdLogout/>
           <p>Log Out</p> 
        </div>
    </aside>
  )
}

export default Sidebar;
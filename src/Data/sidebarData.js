import { MdOutlineDashboard, MdOutlineTaskAlt, MdOutlineAddTask, MdBarChart, MdOutlineQuestionAnswer } from "react-icons/md"
import { FaUser } from "react-icons/fa";

const sidebarData = [
    {
        id: 1,
        name:"Dashboard",
        link:"/dashboard",
        icon: <MdOutlineDashboard/>,
    },
    {
        id: 2,
        name:"Job Applications",
        link:"/applications",
        icon: <MdOutlineTaskAlt/> ,
    },
    {
        id: 3,
        name:"Add Application",
        link:"/new",
        icon: <MdOutlineAddTask/> ,
    },
    {
        id: 4,
        name:"Analytics",
        link:"/analytics",
        icon:<MdBarChart/> ,
    },
    {
        id: 5,
        name:"Profile",
        link:"/profile",
        icon:<FaUser/> ,
    },
    {
        id: 6,
        name:"About",
        link:"/about",
        icon:<MdOutlineQuestionAnswer/> ,
    },

]

export default sidebarData;
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Protected = ({children}) => {
    const navigate = useNavigate();
    const { token, username } = useSelector((state)=>state.user)
    useEffect(()=>{
        if( !token || !username ){
            navigate('/home')
        }
    })
    return children;
}

export default Protected;
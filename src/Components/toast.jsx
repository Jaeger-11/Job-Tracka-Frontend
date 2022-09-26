import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { statusNull } from "../Features/newSlice";

const Toast = ({content, icon, style}) => {
    const dispatch = useDispatch();
    const {status} = useSelector((state) => state.application)
    useEffect(() => {
        if(status && status !== 'loading'){
            const timer = setTimeout(() => {
                dispatch(statusNull());
            }, 6000)
            return () => clearTimeout(timer)
        }
    },[status])

    return (
        <div className={`toast-${style} toast`}>
            {content}
        </div>
    )
}

export default Toast;
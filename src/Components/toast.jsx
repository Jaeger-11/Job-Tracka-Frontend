import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { statusNull } from "../Features/newSlice";
import { ColorRing } from "react-loader-spinner";
import {MdDoneAll, MdError} from 'react-icons/md';

const Toast = ({content, icon, style}) => {
    const dispatch = useDispatch();
    const {fetchStatus} = useSelector((state) => state.application)
    useEffect(() => {
        if(fetchStatus && fetchStatus !== 'loading'){
            const timer = setTimeout(() => {
                dispatch(statusNull());
            }, 6000)
            return () => clearTimeout(timer)
        }
    },[fetchStatus])


    return (
        <div className={`toast-${style} toast flex-icons`}>
            {fetchStatus === 'loading' && <ColorRing
            visible={true}
            height="20"
            width="20"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#e15b64', '#fff']}
            />}
            { fetchStatus === 'success' && <MdDoneAll/>}
            { fetchStatus === 'failed' && <MdError/>}
            {content}
        </div>
    )
}

export default Toast;
import {FaTimes} from "react-icons/fa"
import { deleteGoal, editGoal, getGoals } from "../Features/userSlice";
import { useDispatch } from "react-redux";

const Goal = ({status, goal, createdAt, _id}) => {
    const dispatch = useDispatch();
    const handleUpdate = () => {
        if(status === "unaccomplished"){
            const value = { "status": "accomplished" }
            dispatch(editGoal({_id,value}));
        } else if(status === "accomplished"){
            const value = {"status": "unaccomplished"}
            dispatch(editGoal({_id,value}));
        }
        dispatch(getGoals());
    }
    const handleDelete = () => {
        dispatch(deleteGoal(_id));
        dispatch(getGoals());
    }
    return(
        <tr className="headers">
            <td className="icon"> <span className={status === 'unaccomplished' ? 'bg-red' : 'bg-green'}></span> </td>
            <td className="goal">{goal}</td>
            <td className="date center">{createdAt.substring(0, 10)}</td>
            <td className='click'>
                <p 
                title="Change Status" 
                className={status === 'accomplished' ? 'bg-green' : 'grey'} 
                onClick={handleUpdate}
                >
                </p>
            </td>
            <td className="delete center red"> 
                <FaTimes size="1rem" className="times pointer" onClick={handleDelete}/> 
            </td>
        </tr>
    )
}

export default Goal;
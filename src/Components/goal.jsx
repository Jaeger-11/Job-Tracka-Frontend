import {FaTimes} from "react-icons/fa"

const Goal = ({status, goal, createdAt}) => {
    return(
        <tr className="headers">
            <td className="icon"> <span className={status === 'unaccomplished' ? 'bg-red' : 'bg-green'}></span> </td>
            <td className="goal">{goal}</td>
            <td className="date center">{createdAt.substring(0, 10)}</td>
            <td className='click'><p title="Click if Achieved"></p></td>
            <td className="Edit center pointer green"> edit </td>
        </tr>
    )
}

export default Goal;
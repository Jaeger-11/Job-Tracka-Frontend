import { fetchGoals } from '../Hooks/fetchAPI';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

const GoalsProfile = () => {
    const { isLoading, isError, error, data } = useQuery('goals', fetchGoals, {retry: 2})

    if(data){
        return(
            <ul>
                <h3> Goals</h3>
                {data.count === 0 && <p>You currently have no goals 
                    <Link to='/profile' className='green' > Add goal </Link> 
                </p>}
                {data.goal.map((item) => {
                    const { goal, _id } = item;
                    return(
                        <li key={_id}>{goal}</li>
                    )
                })}
            </ul>
        )
    }
}

export default GoalsProfile
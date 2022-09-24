import { fetchGoals } from '../Hooks/fetchAPI';
import { useQuery } from 'react-query';

const GoalsProfile = () => {
    const { isLoading, isError, error, data } = useQuery('goals', fetchGoals, {retry: 2})

    if(data){
        return(
            <ul>
                <h3> Goals</h3>
                {data.goal.map((item) => {
                    const { goal, createdAt, status, _id } = item;
                    return(
                        <li key={_id}>{goal}</li>
                    )
                })}
            </ul>
        )
    }
}

export default GoalsProfile
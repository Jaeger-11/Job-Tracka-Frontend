import { fetchStats } from '../Hooks/fetchAPI';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { clearFilters, handleInput } from '../Features/applicationSlice';
import { useNavigate } from "react-router-dom";
import Loader from './loader';
import Fade  from 'react-reveal/Fade';

const DashStats = () => {
    const { data, isLoading, error, isError } = useQuery('dashboardStats', fetchStats, {retry: 2});
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const totalClick = () => {
        dispatch(clearFilters());
        navigate('/applications');
    }
    const pendingClick = () => {
        dispatch(clearFilters());
        dispatch(handleInput({name:'status', value:'pending'}));
        navigate('/applications');
    }
    const successClick = () => {
        dispatch(clearFilters());
        dispatch(handleInput({name:'status', value:'success'}));
        navigate('/applications');
    }
    const interviewClick = () => {
        dispatch(clearFilters());
        dispatch(handleInput({name:'status', value:'interview'}));
        navigate('/applications');
    }
    const rejectedClick = () => {
        dispatch(clearFilters());
        dispatch(handleInput({name:'status', value:'rejected'}));
        navigate('/applications');
    }
    const declinedClick = () => {
        dispatch(clearFilters());
        dispatch(handleInput({name:'status', value:'declined'}));
        navigate('/applications');
    }

    if(isLoading){
        return <Loader/>
    }else if (isError){
        return(
            <section>
                {error.message}
            </section>
        )
    }

    if(data){
        const { declined, interview, success, rejected, pending, total } = data;
        return(
            <section className='dashstats'>
                
                <div className='dashstats-outer'>
                    <Fade bottom>
                    <div className='outer' ></div>
                    <article className='dashstats-inner' onClick={totalClick}>
                        <h3>Total Applications</h3>
                        <p>{total}</p>
                    </article>
                    </Fade>
                </div>
                
                <div className='dashstats-outer'>
                    <Fade bottom>
                    <div className='outer'></div>
                    <article className='dashstats-inner' style={{borderColor:'orange'}} onClick={pendingClick}>
                        <h3>Pending</h3>
                        <p>{pending}</p>
                    </article>
                    </Fade>
                </div>
                

                <div className='dashstats-outer'>
                    <Fade bottom>
                    <div className='outer'></div>
                    <article className='dashstats-inner' style={{borderColor:'#3b8ba5'}} onClick={interviewClick}>
                        <h3>Interview Stage</h3>
                        <p>{interview}</p>
                    </article>
                    </Fade>
                </div>

                <div className='dashstats-outer'>
                    <Fade bottom>
                    <div className='outer'></div>
                    <article className='dashstats-inner' style={{borderColor:'#F50057'}} onClick={rejectedClick}>
                        <h3>Rejected Applications</h3>
                        <p>{rejected}</p>
                    </article>
                    </Fade>
                </div>
                
                <div className='dashstats-outer'> 
                    <Fade bottom>  
                    <div className='outer'></div> 
                    <article className='dashstats-inner' style={{borderColor:'black'}} onClick={declinedClick}>
                        <h3>Offers You Declined</h3>
                        <p>{declined}</p>
                    </article>
                    </Fade>
                </div>

                <div className='dashstats-outer'>
                    <Fade bottom> 
                    <div className='outer'></div>
                    <article className='dashstats-inner' style={{borderColor:'#00BFA6'}} onClick={successClick}>
                        <h3>Successful Applications</h3>
                        <p>{success}</p>
                    </article>
                    </Fade>
                </div>
                
            </section>
        )
    }
}

export default DashStats;
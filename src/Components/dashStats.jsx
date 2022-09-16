import { fetchStats } from '../Hooks/fetchAPI';
import { useQuery } from 'react-query';
import { ThreeDots } from 'react-loader-spinner'

const DashStats = () => {
    const { data, isLoading, error, isError } = useQuery('dashboardStats', fetchStats, {retry: 2});

    if(isLoading){
        return (
            <section className='loading'>
                <ThreeDots 
                height="80" 
                width="80" 
                radius="9"
                color="#00BFA6" 
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
                />
            </section>
        )
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
                    <div className='outer' ></div>
                    <article className='dashstats-inner'>
                        <h3>Total Applications</h3>
                        <p>{total}</p>
                    </article>
                </div>

                <div className='dashstats-outer'>
                    <div className='outer'></div>
                    <article className='dashstats-inner' style={{borderColor:'orange'}}>
                        <h3>Pending</h3>
                        <p>{pending}</p>
                    </article>
                </div>

                <div className='dashstats-outer'>
                    <div className='outer'></div>
                    <article className='dashstats-inner' style={{borderColor:'#3b8ba5'}}>
                        <h3>Interview Stage</h3>
                        <p>{interview}</p>
                    </article>
                </div>

                <div className='dashstats-outer'>
                    <div className='outer'></div>
                    <article className='dashstats-inner' style={{borderColor:'#F50057'}}>
                        <h3>Rejected Applications</h3>
                        <p>{rejected}</p>
                    </article>
                </div>
                
                <div className='dashstats-outer'>   
                    <div className='outer'></div> 
                    <article className='dashstats-inner' style={{borderColor:'black'}}>
                        <h3>Offers You Declined</h3>
                        <p>{declined}</p>
                    </article>
                </div>

                <div className='dashstats-outer'>
                    <div className='outer'></div>
                    <article className='dashstats-inner' style={{borderColor:'#00BFA6'}} >
                        <h3>Successful Applications</h3>
                        <p>{success}</p>
                    </article>
                </div>
            </section>
        )
    }
}

export default DashStats;
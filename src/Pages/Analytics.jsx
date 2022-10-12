import "../Styles/analytics.scss";
import { fetchStats } from '../Hooks/fetchAPI';
import { useQuery } from 'react-query';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie } from 'recharts';
import { Link } from "react-router-dom";

const Analytics = () => {
    const { isLoading, isError, error, data } = useQuery('stats', fetchStats, {retry: 2})

    let bardata = data && data.monthlyApplications;
    let pieData = [];
    if(data){
        pieData = [
            { name: "success", value: data.success },
            { name: "pending", value: data.pending },
            { name: "rejected", value: data.rejected },
            { name: "declined", value: data.declined },
            { name: "interview", value: data.interview },
        ]
    }

    const COLORS = [ "#00BFA6", "#ffa500", "#F50057", "#000000", "#3b8ba5" ];

    return(
        <div className="analytics">
            { data && data.monthlyApplications.length > 0 ? 
            <section className="analyticsBox" >
                <h3 >Total Applications Recorded Monthly</h3>
                <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={bardata} margin={{ top: 30 }}>
                        <CartesianGrid strokeDasharray='10 10 ' />
                        <XAxis dataKey="date" />
                        <YAxis/>
                        <Tooltip />
                        <Bar dataKey="count" fill="#00BFA6" />
                    </BarChart>
                </ResponsiveContainer>

                <h3 style={{marginTop:"0.5rem"}}>Applications By Status </h3>
                <div className="flex-pie">
                    <PieChart width={270} height={270}>
                        <Pie 
                        dataKey="value" 
                        data={pieData} 
                        fill="#F50057" 
                        labelLine={false}
                        cx="45%"
                        cy="45%" 
                        >
                            {pieData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip/>
                    </PieChart>

                    <div>
                        <p className="colorNote flex-icons"> <span style={{backgroundColor:"#ffa500", width:"20px", height:"20px", display:"block"}} ></span> Pending</p>
                        <p className="colorNote flex-icons"> <span style={{backgroundColor:"#00BFA6", width:"20px", height:"20px", display:"block"}}></span> Success</p>
                        <p className="colorNote flex-icons"> <span style={{backgroundColor:"#3b8ba5", width:"20px", height:"20px", display:"block"}}></span> Interview</p>
                        <p className="colorNote flex-icons"> <span style={{backgroundColor:"#F50057", width:"20px", height:"20px", display:"block"}}></span> Rejected</p>
                        <p className="colorNote flex-icons"> <span style={{backgroundColor:"#000000", width:"20px", height:"20px", display:"block"}}></span> Declined</p>
                    </div>
                </div>

            </section> :
            <section className="analyticsNone">
                <p>No Existing Application</p>
                <p className="pointer red"> <Link to="/new">Click to Add Application</Link> </p>
            </section>
            }
        </div>
    )
}

export default Analytics;
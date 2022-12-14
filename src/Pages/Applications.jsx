import { useEffect} from "react";
import "../Styles/applications.scss";
import { useSelector, useDispatch } from "react-redux";
import { getAllApplications, clearFilters, handleInput } from "../Features/applicationSlice";
import Jobs from "../Components/jobs";
import Loader from "../Components/loader";
import Toast from "../Components/toast";

const Applications = () => {
    const dispatch = useDispatch();
    const { fetchStatus } = useSelector((state) => state.application)
    const { applications, totalPages, totalApplications, page, status, jobType, sort, search, searchBy, isLoading } = useSelector((store) => store.applications)
    useEffect(() => {
        dispatch(getAllApplications());
    }, [status, jobType, sort, search, searchBy, page])
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [page]);

    const handleClear = () => {
        dispatch(clearFilters());
        dispatch(getAllApplications());
    }

    const handleChange = (e)=> {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        dispatch(handleInput({name, value}))
    }

    var rows = [];
    for (var i = 1; i <= totalPages; i++) {
        rows.push(i);
    }

    const nextPage = () => {
        let x = page + 1;
        if ( x > totalPages){
            dispatch(handleInput({name:'page', value:1}));
        } else dispatch(handleInput({name:'page', value:x}))
    }

    const previousPage = () => {
        let x = page - 1;
        if ( page === 1){
            dispatch(handleInput({name:'page', value:totalPages}))
        } else dispatch(handleInput({name:'page', value:x}))
    }

    if(totalApplications < 11){
        dispatch(handleInput({ name: 'page',value:1}))
    }

    return(
    <section className="applications">
        {fetchStatus === "loading" && <Toast content="Deleting..." />}
        {fetchStatus === "success" && <Toast content="Application Deleted" style="success" />}
        {fetchStatus === "failed" && <Toast content="Error Occured..." style="failed" />}
        <div>
            <form className="form">
                <section className="flex-search">
                    <div className="search-div">
                        <input type="search" placeholder="Search" onChange={handleChange} name="search"/>
                    </div>
                    <div>
                        <p>Search By</p>
                        <select name="searchBy" id="" onChange={handleChange}>
                            <option value="searchByPosition"> Position </option>
                            <option value="searchByCompany"> Company </option>
                        </select>
                    </div>

                    <div>
                        <p>SortBy</p>
                        <select name="sort" id="" onChange={handleChange}>
                            <option value="latest"> latest </option>
                            <option value="oldest"> oldest </option>
                            <option value="a-z"> a-z </option>
                            <option value="z-a"> z-a </option>
                        </select>
                    </div>
                    <div>
                        <p>Filter By Status</p>
                        <select name="status" id="" onChange={handleChange}>
                            <option value="all"> all </option>
                            <option value="pending"> pending </option>
                            <option value="interview"> interview </option>
                            <option value="declined"> declined </option>
                            <option value="rejected"> rejected </option>
                            <option value="accepted"> accepted </option>
                        </select>
                    </div>
                    <div>
                        <p>Filter By Type</p>
                        <select name="jobType" id="" onChange={handleChange}>
                            <option value="all"> all </option>
                            <option value="full-time"> full-time </option>
                            <option value="part-time"> part-time </option>
                            <option value="remote"> remote </option>
                            <option value="hybrid"> hybrid </option>
                            <option value="contract"> contract </option>
                            <option value="internship"> internship </option>
                        </select>
                    </div>
                </section>
                <span onClick={handleClear} className="pointer red"> Clear Filters </span>
            </form>
        </div>

        <main>
            <div className="flex-between">
                <h3>{totalApplications} Total Applications</h3>
                <h4>Page <span style={{fontSize:'120%'}} >{page}</span> </h4>
            </div>
            { isLoading && <Loader/> }
            <section className="applications-grid">
                {applications.map((application) => {
                    return <Jobs {...application} key={application._id} />
                })}
            </section>
            {totalPages> 1 && 
            <section className="pagination">
                <span onClick={previousPage} className='control'>Prev</span>
                {rows.map((row) => {
                    return <span key={row} onClick={() => dispatch(handleInput({name:'page', value: row}))} className={ row === page ? 'bg-green' : 'bg-red' } >{row}</span>
                })}
                <span onClick={nextPage} className='control'>Next</span>
            </section>}
        </main>
    </section>
    )
}

export default Applications;
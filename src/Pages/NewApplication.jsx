import Current from "../Components/current";
import Sidebar from "../Components/sidebar";
import FixedProfile from "../Components/fixedProfile";
import '../Styles/new.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const NewApplication = () => {
    
    return(
        <div className="flex-all">
            <Sidebar/>
            <div className="flex-one">
                <div className="one">
                    <Current/>
                    <main className="new">
                        <h3>Add New Application</h3>
                    </main>
                </div>
                <FixedProfile/>
            </div>
        </div>
    )
}

export default NewApplication;
import Current from "../Components/current";
import Sidebar from "../Components/sidebar";
import FixedProfile from "../Components/fixedProfile";
import '../Styles/new.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const NewApplication = () => {
    
    return(
        <div className="flex-all">
            <Sidebar/>
            <div className="flex-new">
                <Current/>
                <div className="flex-all">
                    <main className="new">
                        <h3>Add New Application</h3>
                        <section>
                            <Formik
                            initialValues = {{ position:'', company:'',  }}
                            >

                                <Form>
                                    
                                </Form>
                            </Formik>
                        </section>
                    </main>
                    <FixedProfile/>
                </div>
            </div>
        </div>
    )
}

export default NewApplication;
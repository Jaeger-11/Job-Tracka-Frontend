import Current from "../Components/current";
import Sidebar from "../Components/sidebar";
import FixedProfile from "../Components/fixedProfile";
import "../Styles/applications.scss";
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Applications = () => {
    
    return(
        <div className="flex-all">
            <Sidebar/>
            <div className="flex-one">
                <div className="one">
                    <Current/>
                    <section className="applications">
                        <div>
                            <Formik>

                                <Form>
                                    
                                </Form>
                            </Formik>
                        </div>

                        <main>

                        </main>
                    </section>
                </div>
                <FixedProfile/>
            </div>
        </div>
    )
}

export default Applications;
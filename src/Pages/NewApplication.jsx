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
                            initialValues = {{ 
                                position:'', 
                                company:'', 
                                status:'pending', 
                                jobType:'full-time',
                                notes:'No Additional Notes',
                                location:'Not Stated',
                            }}
                            validate={values => {
                                const errors = {};
                                if(!values.position){
                                    return errors.position = "Field Required"
                                } else if(!values.company){
                                    return errors.company = "Field Required"
                                }
                            }}
                            >

                                <Form className="form">
                                    
                                    <p>
                                        <label htmlFor="position" className="label">Position</label>
                                        <Field type="text" id="position" name="position" className="text" placeholder="Position Applied For"/>
                                        <ErrorMessage name="position"/>
                                    </p>
                                    <p>
                                    <label htmlFor="company" className="label">Company</label>
                                        <Field type="text" name="company" id="company" className="text" placeholder="Name of the Company"/>
                                        <ErrorMessage name="company"/>
                                    </p>
                                    <p>
                                    <label htmlFor="location" className="label">Company's Location</label>
                                        <Field type="text" id="location" name="location" className="text" placeholder="Company's Location"/>
                                        <ErrorMessage name="location"/>
                                    </p>
                                    
                                    <div className="flex-radio">
                                        <section >
                                            <p className="label">Job Type</p>
                                            <label>
                                            <Field type="radio" value="full-time" name="jobType" className="radio" />
                                            Full-time
                                            </label> <br />
                                            <label>
                                            <Field type="radio" value="part-time" name="jobType" className="radio"/>
                                            Part-time
                                            </label> <br />
                                            <label>
                                            <Field type="radio" value="remote" name="jobType" className="radio"/>
                                            Remote
                                            </label> <br />
                                            <label>
                                            <Field type="radio" value="hybrid" name="jobType" className="radio"/>
                                            Hybrid
                                            </label> <br />
                                            <label>
                                            <Field type="radio" value="contract" name="jobType" className="radio"/>
                                            Contract
                                            </label> <br />
                                            <label>
                                            <Field type="radio" value="internship" name="jobType" className="radio"/>
                                            Internship
                                            </label> <br />
                                        </section>

                                        <section>
                                            <p className="label">Application Status</p>
                                            <label>
                                            <Field type="radio" value="pending" name="status" className="radio"/>
                                            Pending
                                            </label> <br />
                                            <label>
                                            <Field type="radio" value="interview" name="status" className="radio"/>
                                            Interview
                                            </label> <br />
                                            <label>
                                            <Field type="radio" value="rejected" name="status" className="radio"/>
                                            Rejected
                                            </label> <br />
                                            <label>
                                            <Field type="radio" value="declined" name="status" className="radio"/>
                                            Declined
                                            </label> <br />
                                            <label>
                                            <Field type="radio" value="success" name="status" className="radio"/>
                                            Success
                                            </label> <br />
                                        </section>
                                    </div>
                                    <div className="btn-ctn"> <button>Submit</button> </div>
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
import '../Styles/new.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from "react-redux";
import Toast from "../Components/toast";
import { addApplication, setNewData } from "../Features/newSlice";
import { useNavigate } from 'react-router-dom';

const NewApplication = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { fetchStatus } = useSelector((state) => state.application);
    const handleSubmit = (data)=> {
        dispatch(setNewData(data));
        dispatch(addApplication());
    }
    
    return(
        <main className="new">
            {fetchStatus === "loading" && <Toast content="Processing..." />}
            {fetchStatus === "success" && <Toast content="Added Successfully" style="success" />}
            {fetchStatus === "failed" && <Toast content="Error Occured..." style="failed" />}

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
                        errors.position = "Field Required"
                    } else if(!values.company){
                        errors.company = "Field Required"
                    } else if(!values.location){
                        values.location = 'Not Stated'
                    } else if(!values.notes){
                        values.notes = 'No Additional Notes'
                    }
                    return errors;
                }}
                onSubmit={ (values, { resetForm }) => {
                    const data = JSON.stringify(values,null,2)
                    handleSubmit(values)
                    resetForm()
                }}
                >
                    <Form className="form">
                        <p>
                            <label htmlFor="position" className="label">Position</label>
                            <Field type="text" id="position" name="position" className="text" placeholder="Position Applied For"/>
                            <ErrorMessage name="position" component="span" className="error"/>
                        </p>
                        <p>
                        <label htmlFor="company" className="label">Company</label>
                            <Field type="text" name="company" id="company" className="text" placeholder="Name of the Company"/>
                            <ErrorMessage name="company" component="span" className="error"/>
                        </p>
                        <p>
                        <label htmlFor="location" className="label">Company's Location</label>
                            <Field type="text" id="location" name="location" className="text" placeholder="Company's Location"/>
                            <ErrorMessage name="location" component="span" className="error"/>
                        </p>
                        
                        <div className="flex-inputs">
                        <div className="flex-radio">
                            <section >
                                <p className="label">Job Type</p>
                                <label>
                                <Field type="radio" value="full-time" name="jobType" className="radio" />
                                full-time
                                </label> <br />
                                <label>
                                <Field type="radio" value="part-time" name="jobType" className="radio"/>
                                part-time
                                </label> <br />
                                <label>
                                <Field type="radio" value="remote" name="jobType" className="radio"/>
                                remote
                                </label> <br />
                                <label>
                                <Field type="radio" value="hybrid" name="jobType" className="radio"/>
                                hybrid
                                </label> <br />
                                <label>
                                <Field type="radio" value="contract" name="jobType" className="radio"/>
                                contract
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
                                pending
                                </label> <br />
                                <label>
                                <Field type="radio" value="interview" name="status" className="radio"/>
                                interview
                                </label> <br />
                                <label>
                                <Field type="radio" value="rejected" name="status" className="radio"/>
                                rejected
                                </label> <br />
                                <label>
                                <Field type="radio" value="declined" name="status" className="radio"/>
                                declined
                                </label> <br />
                                <label>
                                <Field type="radio" value="success" name="status" className="radio"/>
                                success
                                </label> <br />
                            </section>
                            </div>
                            <section>
                                <label htmlFor="notes" className="label">Additional Notes</label> <br />
                                <Field component="textarea" rows="6" id="notes" name="notes" className="textarea" />
                            </section>
                        </div>
                        <div className="btn-ctn"> <button type="submit">Submit</button> </div>
                    </Form>
                </Formik>
            </section>
        </main>
    )
}

export default NewApplication;
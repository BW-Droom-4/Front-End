import React, { useState, useEffect } from "react";
import { connect, dispatch } from 'react-redux';
import { withFormik, Form, Field } from "formik";
import authios from "../api/authios";
import * as Yup from "yup";
import styled from 'styled-components/macro';
import { addCompanyJobListing, deleteCompanyJobListing } from '../actions/act';



export const JobContainer = styled.div`
width: 50%;
height: 90%;
background-color: #F05D5E;
background-image: linear-gradient(#F05D5E, #FF5A1E);
border-radius: 10px;
box-shadow: 25px 25px 0 0 #263D42;
font-weight: bold;
color: #263D42;
text-shadow: 1px 1px #2A9D8F; 
letter-spacing: 1px;
line-height: 1.5;
font-size: 1.2rem;
display: flex;
justify-content: center;
align-items: space-around;
flex-direction: column;
`
export const DivSizing = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
export const Error = styled.p`
    color: yellow;
    font-size: .7rem;
    font-weight: normal;
    line-height: 0.5;
`
export const JobHeader = styled.h1`
    font-weight: bolder;
    color: #263D42;
    text-shadow: 1px 1px #63C7B2;
    font-family: 'Alatsi', sans-serif;
`
export const JobButton = styled.button`
    width: 100px;
    height: 35px;
    border-radius: 5px;
    background-color: #63C7B2;
    border: 5px outset #2A9D8F;
    font-size: 1rem;
    font-weight: bold;
    color: #263D42;
    &:hover {
        background: #2A9D8F;
        border: 5px inset #63C7B2;
      }
    margin-bottom: 20px;  
`


const JobForm = ({ values, errors, touched, status, loggedInCompany, deleteCompanyJobListing }) => {

    const [jobs, setJobs] = useState([]);

    useEffect(() => {

        status && setJobs(jobs => [
            ...jobs, status
        ]);
    }, [status]);


    return (
        <DivSizing>
            <JobContainer>
                <JobHeader>Add New Job</JobHeader>
                <Form>
                    <label htmlFor="job_title">Job Title:</label>
                    <br />
                    <Field id="job_title" type="text" name="job_title" />
                    <br />
                    {touched.job_title && errors.job_title &&
                        <Error>{errors.job_title}</Error>}
                    <br />

                    <label htmlFor="expiry_date">Expiry Date:</label>
                    <br />
                    <Field id="expiry_date" type="date" name="expiry_date" />
                    <br />
                    {touched.expiry_date && errors.expiry_date &&
                        <Error className="errors">{errors.expiry_date}</Error>}
                    <br />

                    <label html htmlFor="job_detail">
                        Job Details:
                    </label>
                    <br />
                    <Field id="job_detail" type="text" name="job_detail" />
                    <br />
                    {touched.job_detail && errors.job_detail && (
                        <Error className="errors">{errors.job_detail}</Error>
                    )}
                    <br />

                    <label html htmlFor="matching_skill">
                        Matching Skills:
                    </label>
                    <br />
                    <Field id="matching_skill" type="text" name="matching_skill" />
                    <br />
                    {touched.matching_skill && errors.matching_skill && (
                        <Error className="errors">{errors.matching_skill}</Error>
                    )}
                    <br />
                    <br />

                    <JobButton type="submit">Submit</JobButton>
                </Form>

                <JobHeader>Listed Jobs</JobHeader>
                {loggedInCompany.joblistings && loggedInCompany.joblistings.length ? (
                    <table className="jobs">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Expires</th>
                                <th>Matching Skills</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {loggedInCompany.joblistings.map(listing => (
                                <tr key={listing.id}>
                                    <td>{listing.job_title}</td>
                                    <td>{listing.expiry_date}</td>
                                    <td>{listing.matching_skill}</td>
                                    <td>
                                        <JobButton 
                                            onClick={() => deleteCompanyJobListing(loggedInCompany.id, listing.id)}
                                        >
                                            Delete
                                        </JobButton>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) :(
                    <p>No jobs listed.</p>
                )}
                
            </JobContainer>

        </DivSizing>
    );
};

const mapStateToProps = state => {
    return {
        loggedInCompany: state.loggedInCompany
    }
};

const FormikForm = withFormik({
    mapPropsToValues({ job_title, expiry_date, job_detail, matching_skill }) {
        return {
            job_title: job_title || "",
            expiry_date: expiry_date || "",
            job_detail: job_detail || "",
            matching_skill: matching_skill || "",
        };
    },

    validationSchema: Yup.object().shape({
        job_title: Yup.string().required("Job title is Required."),
        expiry_date: Yup.string().required("Expiry date is Required."),
        job_detail: Yup.string().required("Details are Required"),
        matching_skill: Yup.string().required("Matching Skills are Required.")
    }),

    handleSubmit(values, { props, resetForm, setStatus }) {
        console.log("submitting", values);
        const companyId = props.loggedInCompany.id;
        const joblisting = {
            ...values,
            company_id: companyId
        };

        props.addCompanyJobListing(companyId, joblisting);
        resetForm();

        // authios()
        //     .post(`https://droom-4.herokuapp.com/api/companies/${companyId}/joblisting`, joblisting)
        //     .then(res => {
        //         console.log('success', res)
        //         resetForm();
        //         props.history.push('/dashboard');
        //     })
        //     .catch(err => {
        //         alert("Failed To Add New Job.", err);
        //     });
    }
})(JobForm);



export default connect(mapStateToProps, { addCompanyJobListing, deleteCompanyJobListing })(FormikForm);

import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { withFormik, Form, Field, setNestedObjectValues } from "formik";
import axios from "axios";
import * as Yup from "yup";
import styled from 'styled-components';

export const RegisterContainer = styled.div `
    width: 30vw;
    height: 100%;
    background-color: #F05D5E;
    border-radius: 10px;
    box-shadow: 25px 25px 0 0 #263D42;
    padding: 20px;
    font-weight: bold;
    color: #263D42;
    line-height: 1.5;
    font-size: 1.2rem;
`
export const Error = styled.p `
    color: yellow;
    font-size: .7rem;
    font-weight: normal;
    line-height: 0.5;
`

const UserForm = ({ values, errors, touched, status }) => {

    const [users, setUsers] = useState([]);
         useEffect(() => {

        status && setUsers(users => [
            ...users, status
        ]);
    }, [status]);


    return (
        <div>
            {/* <h1>Create Account</h1> */}
            <RegisterContainer>
                <Form>
                    <label htmlFor="firstname">First Name:</label>
                    <br/>
                    <Field id="firstname" type="text" name="firstname"/>
                    <br/>
                    {touched.firstname && errors.firstname &&
                    <Error>{errors.firstname}</Error>}
                    <label htmlFor="lastname">Last Name:</label>
                    <br/>
                    <Field id="lastname" type="text" name="lastname" />
                    <br/>
                    {touched.lastname && errors.lastname &&
                    <Error className="errors">{errors.lastname}</Error>}                   
                    <label html htmlFor="email">
                    Email:
                    </label>
                    <br/>
                    <Field id="email" type="text" name="email" />
                    <br/>
                    {touched.email && errors.email && (
                    <Error className="errors">{errors.email}</Error>
                    )}
                    <label html htmlFor="password">
                    Password:
                    </label>
                    <br/>
                    <Field id="password" type="password" name="password" />
                    <br/>
                    {touched.password && errors.password && (
                    <Error className="errors">{errors.password}</Error>
                    )}
                    <label htmlFor="role">
                    Role:
                    </label>
                    <br/>
                    <Field as="select" id="role" name="role">
                        <option disabled>Choose an Option</option>
                        <option value="Company" >Looking to Post Jobs</option>
                        <option value="User" >Looking For Jobs</option>
                    </Field>
                    <br/>
                    {touched.role && errors.role && (
                    <Error className="errors">{errors.role}</Error>
                    )}
                    <button type="submit">Submit</button>
                </Form>
            </RegisterContainer>

        </div>
    );
};

const FormikForm = withFormik({
    mapPropsToValues({ firstname, lastname, email, password, role}) {
    return {
        firstname: firstname || "",
        lastname: lastname || "",
        email: email || "",
        password: password || "",
        role: role || "",
    };
},

validationSchema: Yup.object().shape({
    firstname: Yup.string().required("Name is Required."),
    lastname: Yup.string().required("Surname is Required."),
    email: Yup.string()
        .email("Email not valid")
        .required("Email is required"),
    password: Yup.string()
    .min(8, "Password must be 8 characters or longer")
    .max(16, "Password must have less than 16 characters")
    .required("Password is Required."),
    role: Yup.string().required("Role is Required."),
}),

handleSubmit(values, { props, resetForm, setStatus}) {
    console.log("submitting", values);
    axios
        .post((values.role === "Company") ? "https://droom-4.herokuapp.com/api/auth/companies/register" : "https://droom-4.herokuapp.com/api/auth/users/register", values,
        {headers: {
            'Content-Type': 'application/json'
          }}) 
        .then(res => {
            console.log('success', res)
            // localStorage.setItem('token', res.token);
            // localStorage.setItem("role", values.role)
            resetForm();
            props.history.push('/login');
        })
        .catch(err => {
            alert("SIGNUP FAILED ", err);
        });
}
})(UserForm);

export default FormikForm;

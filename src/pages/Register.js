import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { withFormik, Form, Field, setNestedObjectValues } from "formik";
import axios from "axios";
import * as Yup from "yup";
import styled from 'styled-components';
import shortId from 'shortid';

const UserForm = ({ values, errors, touched, status }) => {

    const [users, setUsers] = useState([]);
         useEffect(() => {

        status && setUsers(users => [
            ...users, status
        ]);
    }, [status]);


    return (
        <div>
            <h1>Create Account</h1>
            <div>
                <Form>
                    <label htmlFor="firstname">First Name:</label>
                    <br/>
                    <Field id="firstname" type="text" name="firstname" />
                    {touched.firstname && errors.firstname &&
                    <p className="errors" style={{color: "red", fontSize:"10px"}}>{errors.firstname}</p>}
                    <br/>
                    <br/>
                    <label htmlFor="lastname">Last Name:</label>
                    <br/>
                    <Field id="lastname" type="text" name="lastname" />
                    {touched.lastname && errors.lastname &&
                    <p className="errors" style={{color: "red", fontSize:"10px"}}>{errors.lastname}</p>}
                    <br/>
                    <br/>
                    <label html htmlFor="email">
                    Email:
                    </label>
                    <br/>
                    <Field id="email" type="text" name="email" />
                    {touched.email && errors.email && (
                    <p className="errors" style={{color: "red", fontSize:"10px"}}>{errors.email}</p>
                    )}
                    <br/>
                    <br/>
                    <label html htmlFor="password">
                    Password:
                    </label>
                    <br/>
                    <Field id="password" type="password" name="password" />
                    {touched.password && errors.password && (
                    <p className="errors" style={{color: "red", fontSize:"10px"}}>{errors.password}</p>
                    )}
                    <br/>
                    <br/>
                    <label htmlFor="role">
                    Role:
                    </label>
                    <br/>
                    <Field  as="select" id="role" name="role" >
                        <option >Choose an Option</option>
                        <option value="Company" >Looking to Post Jobs</option>
                        <option value="User" >Looking For Jobs</option>
                    </Field>
                    {touched.role && errors.role && (
                    <p className="errors" style={{color: "red", fontSize:"10px"}}>{errors.role}</p>
                    )}
                    <br/>
                    <br/>
                    <button type="submit">Submit</button>
                </Form>
            </div>

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
            localStorage.setItem('token', res.token);
            localStorage.setItem("role", values.role)
            resetForm();
            props.history.push('/login');
        })
        .catch(err => {
            alert("SIGNUP FAILED ", err);
        });
}
})(UserForm);

export default FormikForm;

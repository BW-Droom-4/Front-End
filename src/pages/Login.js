import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field, setNestedObjectValues } from "formik";
import * as Yup from 'yup';
import axios from 'axios';
import shortid from 'shortid';

// let database = ""

const Login =({values, errors, touched, status}) =>{

    const [usersLogin, setUsersLogin] = useState([]);
    useEffect(() => {
        console.log('status has changed!', status);
        status && setUsersLogin( users => [...users, status]);
    }, [status]);
    return(
        <div className="login-form">
            <h1>User Login</h1>
            <Form>
                <label htmlFor="email">
                    E-mail:
                </label>
                <br/>
                <Field id="email" type="text" name="email"/>

                {touched.email && errors.email && (
                    <p className="errors" style={{color: "red", fontSize:"10px"}}>
                        {errors.email}
                    </p>
                )}
                <br/>

                <label htmlFor="password">
                    Password:
                </label>
                <br/>
                <Field id="password" type="password" name="password"/>

                {touched.password && errors.password && (
                    <p className="errors" style={{color: "red", fontSize:"10px"}}>
                        {errors.password}
                    </p>
                )}
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

                <button type="submit">
                    Submit
                </button>
            </Form>
        </div>
    );
};

const FormikLoginForm = withFormik({
    mapPropsToValues({
        email,
        password,
        role
    }) {
        console.log('asd');
        return {
            // id: shortid.generate(),
            email: email || "",
            password: password || "",
            role: role || ""
        };
    },
    validationSchema: Yup.object().shape({
        email: Yup
            .string()
            .email()
            .required("Email is Required."),
        password: Yup
            .string()
            .min(8)
            .max(16)
            .matches()
            .required("Password is Required."),    
        role: Yup
            .string()
            .required()    

    }),
    handleSubmit(values, {props, resetForm, setValues}) {
        console.log("submitting", values);
        axios
        .post(
            (values.role === "Company") ? "https://droom-4.herokuapp.com/api/auth/companies/login" : "https://droom-4.herokuapp.com/api/auth/users/login"
            ,
            values
            ,
            {headers: {"Content-Type": "application/json"}}
        )
        .then(res => {
            console.log('success', res)
            localStorage.setItem('token', res.token);
            localStorage.setItem("role", values.role)
            resetForm();
            props.history.push("/Dashboard")
            
        })
        .catch(err => alert("Login failed", err)
        );
    }
});

const FormikLogin = FormikLoginForm(Login);

export default FormikLogin
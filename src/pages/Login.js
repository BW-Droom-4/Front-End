import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field, setNestedObjectValues } from "formik";
import * as Yup from 'yup';
import axios from 'axios';
import shortid from 'shortid';

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
                <Field  as="select" id="role" type="text" name="role" >
                    <option disabled>Choose an Option</option>
                    <option value="Looking to Post Jobs">Looking to Post Jobs</option>
                    <option value="Looking For Jobs">Looking For Jobs</option>
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
const FormikLogin = withFormik({
    mapPropsToValues({
        email,
        password,
        role
    }) {
        return {
            id: shortid.generate(),
            email: "",
            password: ""
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
            .matches("^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]$")
            .required("Password is Required.")    

    }),
    handleSubmit(values, {resetForm, setValues}) {
        console.log("submitting", values);
        axios
        .post(
            "",
            values
        )
        .then(res => {
            console.log('success', res)
            resetForm();
        })
        .catch(err => console.log(err)
        );
    }
})
export default Login
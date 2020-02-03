import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import axios from "axios";
import * as Yup from "yup";
import styled from 'styled-components'


const UserForm = ({ values, errors, touched, status }) => {

    // const [users, setUsers] = useState([]);
    // useEffect(() => {
    //     console.log("Status:", status)
    //     status && setUsers( users => 
    //         [...users, status])
    // },[status]);

    return (
    <div>
      <h1>Create Account</h1>
      <div>
        <Form>
            <label htmlFor="name">First Name:</label>
            <br/>
            <Field id="name" type="text" name="name" />
            {touched.name && errors.name &&
            <p className="errors" style={{color: "red", fontSize:"10px"}}>{errors.name}</p>}
            <br/>
            <br/>
            <label htmlFor="name">Last Name:</label>
            <br/>
            <Field id="last" type="text" name="last" />
            {touched.last && errors.last &&
            <p className="errors" style={{color: "red", fontSize:"10px"}}>{errors.last}</p>}
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
            <Field id="password" type="text" name="password" />
            {touched.password && errors.password && (
            <p className="errors" style={{color: "red", fontSize:"10px"}}>{errors.password}</p>
            )}
            <br/>
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
            <button type="submit" onClick={event =>  window.location.href="/"}>Submit</button>
        </Form>
    </div>

    </div>
);
};

const FormikForm = withFormik({
mapPropsToValues({ name, last, email, password, role, location}) {
    return {
    name: name || "",
    last: last || "",
    email: email || "",
    password: password || "",
    role: role || "",
    };
},
validationSchema: Yup.object().shape({
    name: Yup.string().required("Name is Required."),
    last: Yup.string().required("Surname is Required."),
    email: Yup.string().email().required("Email is Required."),
    password: Yup.string().required("Password is Required."),
    role: Yup.string().required("Role is Required."),
}),
handleSubmit(values, {setStatus}) {
    console.log("submitting", values);
    axios.post(
        "https://reqres.in/api/users", values
        )
        .then(res => {
            console.log("Successful Submittion", res)
            setStatus(res.data)
        })
        .catch(err => console.log(err.response));
}
})(UserForm);

export default FormikForm;

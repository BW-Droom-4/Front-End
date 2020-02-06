import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field, setNestedObjectValues } from "formik";
import * as Yup from 'yup';
import axios from 'axios';
import styled from "styled-components/macro";
import jwt_decode from 'jwt-decode';
import { connect } from 'react-redux';
import { signInUser } from '../actions/act';

// let database = ""
export const LoginContainer = styled.div `
    width: 30%;
    height: 75%;
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
    margin: 50px;
    
`
export const LoginHeader = styled.h1 `
    font-weight: bolder;
    color: #263D42;
    text-shadow: 1px 1px #63C7B2;
    font-family: 'Alatsi', sans-serif;
`
export const LoginButton = styled.button `
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
    margin-bottom: 10px;  
`
export const RegisterLink = styled.a `
    font-size: 1rem;
    letter-spacing: 1px;
    color: #263D42;
    &:hover {
        color: #63C7B2;
      }
    
`
export const Error = styled.p `
    color: yellow;
    font-size: .7rem;
    font-weight: normal;
    line-height: 0.5;
`


const Login =({values, errors, touched, status}) =>{

    const [usersLogin, setUsersLogin] = useState([]);
    useEffect(() => {
        console.log('status has changed!', status);
        status && setUsersLogin( users => [...users, status]);
    }, [status]);
    return(
        <LoginContainer className="login-form">
            <LoginHeader>User Login</LoginHeader>
            <Form>
                <label htmlFor="email">
                    E-mail:
                </label>
                <br/>
                <Field id="email" type="text" name="email"/>

                {touched.email && errors.email && (
                    <Error className="errors" >
                        {errors.email}
                    </Error>
                )}
                <br/>

                <label htmlFor="password">
                    Password:
                </label>
                <br/>
                <Field id="password" type="password" name="password"/>

                {touched.password && errors.password && (
                    <Error className="errors" >
                        {errors.password}
                    </Error>
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
                <Error className="errors" >{errors.role}</Error>
                )}
                 <br/>
                 <br/>

                <LoginButton type="submit">
                    Submit
                </LoginButton>
                <br/>
                
                <RegisterLink href="/Register">Sign up for Droom</RegisterLink>
                
            </Form>
        </LoginContainer>
    );
};

const setJTWData = jwt => {
    // set token
    localStorage.setItem('token', jwt);

    // set payload from token
    const payload = jwt_decode(jwt);
    localStorage.setItem('jwt_payload', JSON.stringify(payload)); 
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
            setJTWData(res.data.token);
            localStorage.setItem("role", values.role)
            resetForm();
            props.signInUser();
            props.history.push("/Dashboard")
            
        })
        .catch(err => alert("Login failed", err)
        );
    }
});

const FormikLogin = FormikLoginForm(Login);

export default connect(null, { signInUser })(FormikLogin);
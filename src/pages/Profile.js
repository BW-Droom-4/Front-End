import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { saveUser, saveCompany } from '../actions/act';
import styled from "styled-components/macro";
import { Link } from 'react-router-dom';

export const ProfileSubmitButton = styled.button `
    width: 100px;
    height: 35px;
    border-radius: 5px;
    background-color: #FF5A1E;
    border: 5px outset #F05D5E;
    font-size: 1rem;
    font-weight: bold;
    color: #263D42;
    &:hover {
        background: #F05D5E;
        border: 5px inset #FF5A1E;
    }
    margin-bottom: 10px;  
`
export const FormContainer = styled.div `
    width: 50vw;
    height: 75vh;
    background-color: #2A9D8F;
    background-image: linear-gradient(#2A9D8F, #63C7B2);
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
    align-items: center;
    flex-direction: column;
`



const Profile =() =>{

    const userRole = localStorage.getItem("role");
    const dispatch = useDispatch();
    const user = useSelector(state => state.loggedInUser);
    const company = useSelector(state => state.loggedInCompany);

    const [profileForm, setProfileForm] = useState({});

    useEffect(() => {
        if(userRole === "User") {
            setProfileForm(user);
        }
        else if (userRole === "Company") {
            setProfileForm(company);
        }
    }, [user, company]);

    const handleChange = e => {
        setProfileForm({
            ...profileForm,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log('submitted');
        if(userRole === "User") {
            dispatch(saveUser(profileForm));
        }
        else if(userRole === "Company") {
            dispatch(saveCompany(profileForm));
        }
    };

    return(
        <FormContainer>
            {userRole === "Company" && <Link to="/jobform">Post a new job</Link>}
            
            <form onSubmit={handleSubmit}>
                {userRole === "User" && (
                    <>
                        <label>
                            <p>First Name</p>
                            <input
                                type="text"
                                name="firstname"
                                value={profileForm.firstname}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            <p>Last Name</p>
                            <input
                                type="text"
                                name="lastname"
                                value={profileForm.lastname}
                                onChange={handleChange}
                            />
                        </label>
                    </>
                )}
                {userRole === "Company" && (
                    <>
                        <label>
                            <p>Company Name</p>
                            <input
                                type="text"
                                name="companyName"
                                value={profileForm.companyName}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            <p>Sector</p>
                            <input
                                type="text"
                                name="sector"
                                value={profileForm.sector}
                            />
                        </label>
                    </>
                )}
                {userRole === "User" && (
                    <>
                        <label>
                            <p>Occupation Title</p>
                            <input
                                type="text"
                                name="occupation_title"
                                value={profileForm.occupation_title}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            <p>About</p>
                            <textarea
                                name="about_user"
                                value={profileForm.about_user}
                                onChange={handleChange}
                            ></textarea>
                        </label>
                        <label>
                            <p>Years of Experience</p>
                            <input
                                type="text"
                                name="years_of_experience"
                                value={profileForm.years_of_experience}
                                onChange={handleChange}
                            />
                        </label>
                    </>
                )}
                <ProfileSubmitButton type="submit">Save</ProfileSubmitButton>
            </form>
        </FormContainer>
    )
}

export default Profile
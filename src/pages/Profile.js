import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { saveUser, saveCompany } from '../actions/act';

const userRole = localStorage.getItem("role");

const Profile =() =>{
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
        if(userRole === "User") {
            dispatch(saveUser(profileForm));
        }
        else if(userRole === "Company") {
            dispatch(saveCompany(profileForm));
        }
    };

    return(
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
            <label>
                <p>Email</p>
                <input
                    type="text"
                    disabled
                    name="email"
                    value={profileForm.email}  
                    onChange={handleChange}  
                />
            </label>
            {userRole === "Company" && (
                <label>
                    <p>Company Name</p>
                    <input
                        type="text"
                        name="companyName"
                        value={profileForm.companyName}
                        onChange={handleChange}
                    />
                </label>
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
            <hr />
            <button type="submit">Save</button>
        </form>
    )
}

export default Profile
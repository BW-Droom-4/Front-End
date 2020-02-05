import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const userRole = localStorage.getItem("role");

const Profile =() =>{
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
    }, []);

    return(
        <form>
            {userRole === "User" && (
                <>
                    <label>
                        <p>First Name</p>
                        <input
                            type="text"
                            name="firstname"
                            value={profileForm.firstname}
                        />
                    </label>
                    <label>
                        <p>Last Name</p>
                        <input
                            type="text"
                            name="lastname"
                            value={profileForm.lastname}
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
                />
            </label>
            {userRole === "Company" && (
                <label>
                    <p>Company Name</p>
                    <input
                        type="text"
                        name="companyName"
                        value={profileForm.companyName}
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
                        />
                    </label>
                    <label>
                        <p>About</p>
                        <textarea
                            name="about_user"
                            value={profileForm.about_user}
                        ></textarea>
                    </label>
                    <label>
                        <p>Years of Experience</p>
                        <input
                            type="text"
                            name="years_of_experience"
                            value={profileForm.years_of_experience}
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
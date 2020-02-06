import React from 'react';
import { useSelector } from 'react-redux';

const PrivateComponent = ({component: Component}) => {
    const loggedInUserId = useSelector(state => {
        const userRole = localStorage.getItem("role");
        return userRole === "User" ? state.loggedInUser.id : state.loggedInCompany.id;
    });

    if(loggedInUserId > 0) {
        return <Component />
    }
    return null;
};

export default PrivateComponent;

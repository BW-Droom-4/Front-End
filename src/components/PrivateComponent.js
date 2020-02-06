import React from 'react';
import { useSelector } from 'react-redux';

const PrivateComponent = ({component: Component}) => {
    const userRole = localStorage.getItem("role");
    const loggedInUser = useSelector(state => state.loggedInUser);
    const loggedInCompany = useSelector(state => state.loggedInCompany);

    const loggedInId = userRole === "User" ? loggedInUser.id : loggedInCompany.id;
    console.log('rendering private component');

    if(loggedInId > 0) {
        return <Component id={loggedInId} />
    }
    return null;
};

export default PrivateComponent;

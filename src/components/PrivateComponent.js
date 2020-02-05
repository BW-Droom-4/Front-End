import React from 'react';

const PrivateComponent = ({component: Component}) => {
    if(localStorage.getItem('token')) {
        return <Component />
    }
    return null;
};

export default PrivateComponent;

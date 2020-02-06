import React from 'react';

const UserCard = ({ user }) => {
    return (
        <>
            <h3>{user.firstname + ' ' + user.lastname}</h3>
        </>
    );
};

export default UserCard;

import React from 'react'
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signOutUser } from '../actions/act';

const Navigation =() =>{

    const history = useHistory();
    const dispatch = useDispatch();

    const signOut = () => {
        localStorage.clear();
        history.push('/login');
        dispatch(signOutUser());
    };
    return(
        <nav>
            <NavLink to="/dashboard">Dashboard</NavLink>
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/matches">Matches</NavLink>
            <NavLink to="Messages">Messages</NavLink>
            <button onClick={signOut}>Sign Out</button>
        </nav>
    )
}

export default Navigation
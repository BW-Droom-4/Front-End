import React from 'react'
import { NavLink, useHistory } from 'react-router-dom';

const Navigation =() =>{

    const history = useHistory();

    const signOut = () => {
        localStorage.clear();
        history.push('/login');
    };
    return(
        <nav>
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/matches">Matches</NavLink>
            <NavLink to="Messages">Messages</NavLink>
            <button onClick={signOut}>Sign Out</button>
        </nav>
    )
}

export default Navigation
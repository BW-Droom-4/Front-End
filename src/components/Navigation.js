import React from 'react'
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signOutUser } from '../actions/act';
import styled from "styled-components/macro";


export const NavigationBar = styled.nav `
  width: 80%;
  height: 10%;
  text-decoration: none;
  background-color: #F05D5E;
  background-image: linear-gradient(#F05D5E, #FF5A1E);
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
`
export const NavLinkStyle = styled(NavLink)`
    text-decoration: none;
    color: #263D42;
    font-weight: bold;
    // text-shadow: 1px 1px 5px #63C7B2; 
    letter-spacing: 2px;
    line-height: 1.5;
    font-size: 1rem;
    &:hover {
        color: yellow;
        text-shadow: 1px 1px 10px #263D42; 
    }
`

export const SignOutButton = styled.button `
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
        // color: yellow;
      }
    
`

const Navigation =() =>{

    const history = useHistory();
    const dispatch = useDispatch();

    const signOut = () => {
        localStorage.clear();
        history.push('/login');
        dispatch(signOutUser());
    };
    return(
        <NavigationBar>
            <NavLinkStyle to="/dashboard">Dashboard</NavLinkStyle>
            <NavLinkStyle to="/profile">Profile</NavLinkStyle>
            <NavLinkStyle to="/matches">Matches</NavLinkStyle>
            <NavLinkStyle to="Messages">Messages</NavLinkStyle>
            <SignOutButton onClick={signOut}>Sign Out</SignOutButton>
        </NavigationBar>
    )
}

export default Navigation
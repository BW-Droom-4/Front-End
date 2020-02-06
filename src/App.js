
import React, { useState, useEffect } from 'react';
import './App.css';
import Dashboard from './pages/Dashboard';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import PrivateComponent from './components/PrivateComponent';
import Register from './pages/Register';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Messages from './pages/Messages';
import Matches from './pages/Matches';
import JobForm from './pages/JobForm';
import Navigation from './components/Navigation';
import { getLoggedInUser, getLoggedInCompany } from './actions/act';
import { useSelector, useDispatch } from 'react-redux';

function App() {

  const loggedIn = useSelector(state => state.loggedIn);

  const dispatch = useDispatch();
  
  useEffect(() => {
    // set the user in the store
    console.log('hit useEffect');
    const userRole = localStorage.getItem('role');
    
    const jwtPayload = JSON.parse(localStorage.getItem('jwt_payload'));
    if(userRole === "User") {
      console.log('hit User');
      dispatch(getLoggedInUser(jwtPayload.userId));
    }
    else if(userRole === "Company") {
      console.log('hit Company');
      dispatch(getLoggedInCompany(jwtPayload.companyId));
    }
    
  }, [loggedIn]);

  return (
    <div className="App">

      <Switch>
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute path="/messages" component={Messages} />
        <PrivateRoute path="/matches" component={Matches} />
        <PrivateRoute path="/jobform" component={JobForm} />
        <Route path="/Register" component={Register}/>
        <Route path={["/Login", "/"]} component={Login}/>
      </Switch>
      {/* logged-in navigation */}
      {loggedIn && (
        <Navigation />
      )}

      
    </div>
  );
}

export default App;

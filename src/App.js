
import React, { useEffect } from 'react';
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
import { useDispatch } from 'react-redux';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    // set the user in the store
    const userRole = localStorage.getItem('role');
    const jwtPayload = JSON.parse(localStorage.getItem('jwt_payload'));
    if(userRole === "User") {
      dispatch(getLoggedInUser(jwtPayload.userId));
    }
    else if(userRole === "Company") {
      dispatch(getLoggedInCompany(jwtPayload.companyId));
    }
  }, []);

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
      <Route>
        {/* logged-in navigation */}
        <PrivateComponent component={Navigation} />
      </Route>

      
    </div>
  );
}

export default App;

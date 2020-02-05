
import React from 'react';
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

function App() {

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

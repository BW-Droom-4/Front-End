
import React, {useState} from 'react';
import './App.css';
import Dashboard from './pages/Dashboard';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {

  return (
    <div className="App">

      <Switch>
        <PrivateRoute exact path="/Dashboard" component={Dashboard} />
        <Route path="/Register" component={Register}/>
        <Route path={["/Login", "/"]} component={Login}/>
      </Switch>
    </div>
  );
}

export default App;

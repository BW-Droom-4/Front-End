
import React, {useState} from 'react';
import './App.css';
import Dashboard from './pages/Dashboard';
import { Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {

  return (
    <div className="App">
      <Route exact path="/" component={Dashboard} />
      <Route path="/Register" component={Register}/>
      <Route path="/Login" component={Login}/>
    </div>
  );
}

export default App;

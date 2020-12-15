import './App.css';
import Home from './Home.js'
import React from 'react';
import NavBar from './NavBar.js';
import SignUp from './SignUp.js';
import JoinSignIn from './JoinSignIn'
import { Link, Switch, Route } from 'react-router-dom'


function App() {
  return (
    <>
     {/* <NavBar /> */}
     <Home></Home>  
{/* 
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route exact path="/join-sign-in" render={(props) => <JoinSignIn {...props} />} />
        <Route exact path="/register" render={(props) => <SignUp {...props} />} />


      </Switch>
 */}

    </>
  );
}

export default App;

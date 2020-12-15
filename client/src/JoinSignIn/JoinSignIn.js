import React from 'react';
import { Link } from 'react-router-dom'
import './JoinSignIn.css'
import logoTwo from '../images/HappyWishing.png'

const JoinSignIn = () => {
    return (
        <div className="login-container">
            <h1 className="welcome">Welcome!</h1>
            <h2 className="sign-in">Sign In</h2>
            <form className="sign-in-form">
                <div className="form-group">
                    <label for="email">Email </label>
                    <input type="email" placeholder="Enter Email" name="email" required></input>
                    <br />
                    <br />
                    <label for="password">Password </label>
                    <input type="password" placeholder="Enter Password" name="password" required></input>
                </div>
                <br />
                <br />
                <div className="login-button">
                    <button type="submit">Login</button>
                </div>
                <br />
                <Link to="register" className="sign-up-link">Not Registered? Sign Up!</Link>

            </form>
            <br />
            <img id="happy-wishing" src={logoTwo} alt="Happy Wishing!" />

        </div>
    );
};

export default JoinSignIn;
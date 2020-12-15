import React from 'react';
import './SignUp.css';

const SignUp = () => {
    return (
        <div className="sign-up-container">
            <form>
                <div className="sign-up-group">
                    <label for="firstName">First Name </label>
                    <input type="text" placeholder="First Name" name="firstName" required></input>
                    <label for="lastName">Last Name </label>
                    <input type="text" placeholder="Last Name" name="lastName" required></input>

                    <label for="email">Email </label>
                    <input type="email" placeholder="Enter Email" name="email" required></input>
                    <br />
                    <br />
                    <label for="password">Create Password </label>
                    <input type="password" placeholder="Enter Password" name="password" required></input>

                    <button type="submit">Sign Up</button>

                </div>
                <br />
                <br />


            </form>
        </div>
    );
};

export default SignUp;
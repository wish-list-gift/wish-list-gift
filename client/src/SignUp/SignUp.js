
import React, { Component } from "react";
import './SignUp.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class SignUp extends Component {
    render() {
        return (
            <div className='container fluid'>
                <div className="row sign-up-form bg">        
                    <form className="col-12 col-sm-4 sign-up-group">
                        <h3>Sign Up</h3>
                        <div className="form-group ">
                            <label>First name</label>
                            <input type="text" className="form-control" placeholder="First name" />
                        </div>
                        
                        <div className="form-group">
                            <label>Last name</label>
                            <input type="text" className="form-control" placeholder="Last name" />
                        </div>

                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="form-control" placeholder="Enter email" />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password" />
                        </div>

                        <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                        <br></br>
                    </form>
                </div>
            </div>
        );
    }
}


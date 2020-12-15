import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import logo from '../images/WishListGift.png'


/* function NavBar(props) {
    return (
        <div className="nav">
            <div className="nav-container">
                <div className='nav-home'>
                    <Link to='/' className='nav-link'>
                        <img id="logo" src={logo} alt="WishListGift - Home" />
                    </Link>
                </div>


                <div className="nav-links">
                    <Link to="/join-sign-in" className='nav-link'>Join/Sign In</Link>
                    <Link to="/friends" className='nav-link'>Friends</Link>
                </div>
            </div>
        </div>
    );
}
 */
const state = () => {
    showCollapsedMenu: false
};
const toggleMenu = () => {
    this.setState({
        showCollapsedMenu: !this.state.showCollapsedMenu
      })
}

const show = () => {
    (this.state.showCollapsedMenu) ? "show" : "" ;}
    
 function NavBar(props) {

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link to ='/' className="navbar-brand"><img id="logo" src={logo} alt="WishListGift"></img></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                <div className={"collapse navbar-collapse" + show}  id="navbarNav">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to ='/join-sign-in' className="nav-link">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to ='/friends' className="nav-link">Friends</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#">Disabled</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
 }
export default NavBar;
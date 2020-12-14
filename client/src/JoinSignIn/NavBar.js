import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import logo from '../images/WishListGift.png'

function NavBar(props) {
    return (
        <div className="nav">
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
    );
}

export default NavBar;
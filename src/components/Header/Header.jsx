import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='header'>
            <Link to="/"><img src={logo} alt="" /></Link>
            <div>
                <Link to="/review">Review</Link>
                <Link to="/inventory">Inventory  </Link>
                <Link to="/order">Order</Link>
                <Link to="/login">Login</Link>
            </div>
        </nav>
    );
};

export default Header;
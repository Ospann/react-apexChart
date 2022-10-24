import React from 'react';
import './Navbar.scss';
import { NavLink } from 'react-router-dom';
import logo from './logo.svg';

const Navbar = () => {
    return (
            <header>
                <div>
                    <img src={logo} alt="logo"/>
                    <a href='https://www.instagram.com/shekerbala_/' target="_blank" rel="noreferrer" >Arystan</a>
                </div>
                <nav>
                    <NavLink to='Bar'>Bar-Chart</NavLink>
                    <NavLink to='Line'>Line-Chart</NavLink>
                    <NavLink to='Pie'>Pie-Chart</NavLink>
                </nav>
            </header>
    )
}

export default Navbar;

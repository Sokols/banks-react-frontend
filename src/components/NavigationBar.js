import React, { useState, useEffect } from 'react';

import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { AiFillBank } from 'react-icons/ai';

const NavigationBar = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const foundUser = JSON.parse(localStorage.getItem('user'));
        if (foundUser) {
            setUser(foundUser)
        }
    }, [])

    const handleLogout = e => {
        e.preventDefault();
        setUser(null);
        localStorage.clear();
        console.log("User: " + user)
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Link to={"/"} className="navbar-brand">
                <AiFillBank size="32px" />
            </Link>
            {
                user ? (
                    <Nav className="ml-auto">
                        <Link to={"/"} onClick={e => handleLogout(e)} className="nav-link">Logout</Link>
                    </Nav>
                ) : (
                    <Nav className="ml-auto">
                        <Link to={"register"} className="nav-link">Register</Link>
                        <Link to={"login"} className="nav-link">Login</Link>
                    </Nav>
                )
            }
        </Navbar>
    )
};

export default NavigationBar;

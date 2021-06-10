import React from 'react';

import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { AiFillBank } from 'react-icons/ai';
import { connect } from 'react-redux';

import { logoutUser } from '../redux/actions/userActions';

const NavigationBar = ({ user, logoutUser }) => {
    const handleLogout = e => {
        e.preventDefault();
        logoutUser();
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

const mapStateToProps = ({ users }) => {
    const { user } = users;
    return { user };
}

export default connect(mapStateToProps, { logoutUser })(NavigationBar);

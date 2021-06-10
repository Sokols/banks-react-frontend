import React from 'react'
import { connect } from 'react-redux';

import LoginForm from '../forms/LoginForm';

const HomeScreen = ({ user }) => {
    return (
        <div className="App">
            {user ? (
                <div className="welcome">
                    <h2>Welcome, <span>{user.username}</span></h2>
                </div>
            ) : (
                <LoginForm />
            )}
        </div>
    )
}

const mapStateToProps = ({ users }) => {
    const { user } = users;
    return { user };
}

export default connect(mapStateToProps, null)(HomeScreen);

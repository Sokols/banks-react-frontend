import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';

import LoginForm from '../forms/LoginForm';

const HomeScreen = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const foundUser = JSON.parse(localStorage.getItem('user'));
        if (foundUser) {
            setUser(foundUser)
        }
    }, [])

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

export default connect(null, null)(HomeScreen);

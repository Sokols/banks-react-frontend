import React, { useState, useEffect } from 'react';
import './Form.css';

import { connect } from 'react-redux';
import { registerUser, addErrorMessage, removeErrorMessage } from '../../redux/actions/userActions';
import HomeScreen from '../screens/HomeScreen';

const RegisterForm = ({ user, errorMessage, registerUser, addErrorMessage, removeErrorMessage }) => {
    const [details, setDetails] = useState({ username: "", email: "", password: "", repeatPassword: "" });

    useEffect(() => {
        removeErrorMessage()
    }, [])

    const submitHandler = e => {
        e.preventDefault();
        if (ifDetailsValidate(details)) {
            registerUser(details)
                .then(user => {
                    if (user) {

                    }
                })
                .catch(error => console.log(error))
        }
    }

    const ifDetailsValidate = ({ username, email, password, repeatPassword }) => {
        if (username === "" || email === "" || password === "" || repeatPassword === "") {
            addErrorMessage("Complete all fields!")
            return false;
        }
        removeErrorMessage();
        return true;
    }

    return (
        <div>
            { !user ? <form onSubmit={submitHandler}>
                <div className="form-inner">
                    <h2>Register</h2>
                    <div className="form-group">
                        <label htmlFor="name">Name: </label>
                        <input type="text" name="name" id="name" onChange={e => setDetails({ ...details, username: e.target.value })} value={details.username} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email: </label>
                        <input type="email" name="email" id="email" onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password: </label>
                        <input type="password" name="password" id="password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="repeatPassword">Repeat password: </label>
                        <input type="password" name="repeatPassword" id="repeatPassword" onChange={e => setDetails({ ...details, repeatPassword: e.target.value })} value={details.repeatPassword} />
                    </div>
                    <input type="submit" value="Apply" />
                    <div className="form-error-message">
                        <h3><div className="error">{errorMessage}</div></h3>
                    </div>
                </div>
            </form>
                : <HomeScreen />}
        </div>
    )
}

const mapStateToProps = ({ users }) => {
    const { user, errorMessage } = users;
    return { user, errorMessage };
}

export default connect(mapStateToProps, { registerUser, addErrorMessage, removeErrorMessage })(RegisterForm)

import React, { useState, useEffect } from 'react';
import './Form.css';

import { connect } from 'react-redux';
import { loginUser, addErrorMessage, removeErrorMessage } from '../../redux/actions/userActions';
import HomeScreen from '../screens/HomeScreen';

const LoginForm = ({ user, errorMessage, loginUser, addErrorMessage, removeErrorMessage }) => {
    const [details, setDetails] = useState({ email: "", password: "" });

    useEffect(() => {
        removeErrorMessage()
    }, [])

    const submitHandler = e => {
        e.preventDefault();

        if (ifDetailsValidate(details)) {
            loginUser(details)
                .then(user => {
                    if (user) {

                    }
                })
                .catch(error => console.log(error))
        }
    }

    const ifDetailsValidate = ({ email, password }) => {
        if (email === "" || password === "") {
            addErrorMessage("Complete all fields!")
            return false;
        }
        removeErrorMessage();
        return true;
    }

    return (
        <div>
            { !user ?
                <form onSubmit={submitHandler}>
                    <div className="form-inner">
                        <h2>Login</h2>
                        <div className="form-group">
                            <label htmlFor="email">Email: </label>
                            <input type="email" name="email" id="email" onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password: </label>
                            <input type="password" name="password" id="password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
                        </div>
                        <input type="submit" value="Apply" />
                        <div className="form-error-message">
                            <h3><div className="error">{errorMessage}</div></h3>
                        </div>
                    </div>
                </form>
                : <HomeScreen />
            }
        </div>
    )
}

const mapStateToProps = ({ users }) => {
    const { user, errorMessage } = users;
    return { user, errorMessage };
}

export default connect(mapStateToProps, { loginUser, addErrorMessage, removeErrorMessage })(LoginForm);

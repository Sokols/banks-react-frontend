import React, { useState } from 'react';
import './Form.css';

import { connect } from 'react-redux';
import { registerUser } from '../../redux/actions/userActions';

const RegisterForm = ({ registerUser }) => {
    const [details, setDetails] = useState({ username: "", email: "", password: "", repeatPassword: "" });
    const [user, setUser] = useState({});

    const submitHandler = e => {
        e.preventDefault();
        if (ifDetailsValidate(details)) {
            registerUser(details)
            .then(user => {
                if (user) {
                    setUser(user);
                    localStorage.setItem('user', JSON.stringify(user));
                }
            })
            .catch(error => console.log(error))
        }
    }

    const ifDetailsValidate = ({ username, email, password, repeatPassword}) => {
        if (username == "" || email == "" || password == "" || repeatPassword == "") {
            // fill all data
            return false;
        }
        return true;
    }

    return (
        <form onSubmit={submitHandler}>
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
                {/* <div className="form-error-message">
                    <h3>{(error != "") ? (<div className="error">{error}</div>) : ""}</h3>
                </div> */}
            </div>
        </form>
    )
}

export default connect(null, { registerUser })(RegisterForm)

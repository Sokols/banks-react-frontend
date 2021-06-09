import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './Form.css';

const LoginForm = () => {
    const [details, setDetails] = useState({ email: "", password: "" });
    const dispatch = useDispatch();

    const submitHandler = e => {
        e.preventDefault();

        dispatch();
    }

    return (
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
                {/* <div className="form-error-message">
                    <h3>{(error != "") ? (<div className="error">{error}</div>) : ""}</h3>
                </div> */}
            </div>
        </form>
    )
}

export default LoginForm;

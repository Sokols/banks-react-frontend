import React, { useState, useEffect } from 'react';
import './Form.css';

import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { registerUser, addErrorMessage, removeErrorMessage } from '../../redux/actions/userActions';
import HomeScreen from '../screens/HomeScreen';
import { useHistory } from 'react-router-dom';

const RegisterForm = ({ user, errorMessage, registerUser, addErrorMessage, removeErrorMessage }) => {
    const [details, setDetails] = useState({ username: "", email: "", password: "", repeatPassword: "" });
    const history = useHistory();

    if (user) {
        history.push("/");
    }

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
        <div className="App">
            {!user ? <div className="form">
                <h2>Register</h2>
                <Form onSubmit={submitHandler}>
                    <Form.Group controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" onChange={e => setDetails({ ...details, username: e.target.value })} value={details.username} />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>E-mail</Form.Label>
                        <Form.Control type="email" onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
                    </Form.Group>

                    <Form.Group controlId="formBasicRepeatPassword">
                        <Form.Label>Repeat password</Form.Label>
                        <Form.Control type="password" onChange={e => setDetails({ ...details, repeatPassword: e.target.value })} value={details.repeatPassword} />
                    </Form.Group>
                    <Button type="submit" className="btn btn-secondary mr-xl-5 w-100">
                        Apply
                    </Button>
                </Form>
                <div className="form-error-message">
                    <h3><div className="error">{errorMessage}</div></h3>
                </div>
            </div>
                : <HomeScreen />
            }
        </div>
    )
}

const mapStateToProps = ({ users }) => {
    const { user, errorMessage } = users;
    return { user, errorMessage };
}

export default connect(mapStateToProps, { registerUser, addErrorMessage, removeErrorMessage })(RegisterForm)

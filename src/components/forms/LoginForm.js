import React, { useState, useEffect } from 'react';
import './Form.css';

import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { loginUser, addErrorMessage, removeErrorMessage } from '../../redux/actions/userActions';
import HomeScreen from '../screens/HomeScreen';
import { useHistory } from 'react-router-dom';

const LoginForm = ({ user, errorMessage, loginUser, addErrorMessage, removeErrorMessage }) => {
    const [details, setDetails] = useState({ email: "", password: "" });
    const history = useHistory()

    if (user) {
        history.push("/");
    }

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
        <div className="App">
            {!user ? <div className="form">
                <h2>Login</h2>
                <Form onSubmit={submitHandler}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>E-mail</Form.Label>
                        <Form.Control type="email" placeholder="Enter e-mail" onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
                    </Form.Group>
                    <Button type="submit" variant="secondary" >
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

export default connect(mapStateToProps, { loginUser, addErrorMessage, removeErrorMessage })(LoginForm);

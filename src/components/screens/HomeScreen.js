import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import './HomeScreen.css';
import LoginForm from '../forms/LoginForm';
import { getAllBanks } from '../../redux/actions/bankActions';
import { useHistory } from 'react-router-dom';
import BanksList from '../BanksList';

const HomeScreen = ({ user, getAllBanks }) => {
    const [banks, setBanks] = useState([]);
    const history = useHistory();

    if (!user) {
        history.push("/login");
    }

    useEffect(() => {
        getAllBanks()
            .then(banks => setBanks(banks))
            .catch(error => console.log(error))
    }, [])

    return (
        <div className="Screen">
            {user ? (
                <div>
                    <div className="title">
                        <h2>Welcome, <span>{user.username}</span>!</h2>
                    </div>
                    <BanksList banks={banks} />
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

export default connect(mapStateToProps, { getAllBanks })(HomeScreen);

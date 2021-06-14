import React, { useEffect, useState } from 'react';
import './HomeScreen.css';

import { connect } from 'react-redux';
import { Container, Jumbotron, Col, Row } from 'react-bootstrap';

import { getAllBanks } from '../../redux/actions/bankActions';
import { getAllAccounts } from '../../redux/actions/accountActions';
import { useHistory } from 'react-router-dom';
import BanksList from '../bank/BanksList';
import AccountTable from '../account/AccountTable';

const HomeScreen = ({ user, getAllBanks, getAllAccounts }) => {
    const [banks, setBanks] = useState([]);
    const [accounts, setAccounts] = useState([]);
    const history = useHistory();

    if (!user) {
        history.push("/login");
    }

    useEffect(() => {
        getAllBanks()
            .then(banks => setBanks(banks))
            .catch(error => console.log(error))

        getAllAccounts()
            .then(accounts => setAccounts(accounts))
            .catch(error => console.log(error))
    }, [])

    return (
        <div className="Screen">
            {user ? (
                <div>
                    <Jumbotron fluid className="jumbotron">
                        <Container className="title">
                            <h2>Welcome, <span>{user.username}</span>!</h2>
                            <p>
                                Take a look at the accounts available!
                            </p>
                        </Container>
                    </Jumbotron>
                    <Container className="screenContainer">
                        <Row>
                            <Col className="listContainer">
                                <BanksList banks={banks} />
                            </Col>
                            <Col>
                                <AccountTable accounts={accounts} />
                            </Col>
                        </Row>
                    </Container>
                </div>) : (<div></div>)
            }
        </div>
    )
}

const mapStateToProps = ({ users }) => {
    const { user } = users;
    return { user };
}

export default connect(mapStateToProps, { getAllBanks, getAllAccounts })(HomeScreen);

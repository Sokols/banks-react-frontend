import React, { useEffect, useState } from 'react';
import './HomeScreen.css';

import { connect } from 'react-redux';
import { Container, Col, Row, Button } from 'react-bootstrap';

import { getAllBanks } from '../../redux/actions/bankActions';
import { getAccountsByUserAndBankId, addAccount, editAccount, removeAccountById } from '../../redux/actions/accountActions';
import { useHistory } from 'react-router-dom';
import BanksList from '../bank/BanksList';
import AccountTable from '../account/AccountTable';
import AccountModal from '../account/AccountModal';
import BankInfo from '../bank/BankInfo';

const HomeScreen = ({ user, authToken, getAllBanks, getAccountsByUserAndBankId, addAccount, editAccount, removeAccountById }) => {
    const history = useHistory();

    const [banks, setBanks] = useState([]);
    const [currentBank, setCurrentBank] = useState({ bankImageUrl: "", bankName: "" });
    const [accounts, setAccounts] = useState([]);

    const [show, setShow] = useState(false);
    const [account, setAccount] = useState({ accountNumber: "", ownerName: "", ownerSurname: "", bank: currentBank, userId: "" });

    if (!user) {
        history.push("/login");
    }

    useEffect(() => {
        if (user) {
            getAllBanks(authToken)
                .then(banks => {
                    setBanks(banks)
                    setAccount({ ...account, userId: user.id, bank: banks[0] })
                    updateAccounts(banks[0])
                })
                .catch(error => console.log(error))
        }
    }, [])

    const saveAccount = () => {
        addAccount(authToken, account)
            .then(() => {
                updateAccounts(account.bank);
                setAccount({ ...account, accountNumber: "", ownerName: "", ownerSurname: "", bank: { bankName: "" } });
            })
            .catch(error => console.log("Error on adding user: " + error))
    }

    const handleAddAccountButton = (account) => {
        setAccount(account)
        setShow(true);
    }

    const updateAccounts = (bank) => {
        if (bank && user) {
            getAccountsByUserAndBankId(authToken, user, bank.id)
                .then(accounts => {
                    setAccounts(accounts)
                })
                .catch(error => console.log(error))
            setCurrentBank(bank);
        }
    }

    return (
        <div className="Screen">
            {user ? (
                <div>
                    <AccountModal banks={banks} show={show} setShow={setShow} account={account} setAccount={setAccount} saveAccount={saveAccount} />
                    <Container className="screenContainer">
                        <Row>
                            <Col className="listContainer">
                                <Row>
                                    <BankInfo bank={currentBank} />
                                </Row>
                                <Row className="bankList">
                                    <BanksList banks={banks} onBankClicked={(bank) => updateAccounts(bank)} />
                                </Row>
                            </Col>
                            <Col className="tableContainer">
                                <AccountTable
                                    user={user}
                                    banks={banks}
                                    accounts={accounts}
                                    editAccount={(account) => {
                                        editAccount(authToken, account).then(() => {
                                            updateAccounts(account.bank);
                                        })
                                    }}
                                    removeAccount={(account) => {
                                        removeAccountById(authToken, account.id).then(() => {
                                            updateAccounts(account.bank);
                                        })
                                    }}
                                />
                                <Button
                                    className="rowButton"
                                    variant="primary"
                                    onClick={() => handleAddAccountButton(account)}>Add account</Button>
                            </Col>
                        </Row>
                    </Container>
                </div>) : (<div></div>)
            }
        </div>
    )
}

const mapStateToProps = ({ users }) => {
    const { user, authToken } = users;
    return { user, authToken };
}

export default connect(mapStateToProps, { getAllBanks, getAccountsByUserAndBankId, addAccount, editAccount, removeAccountById })(HomeScreen);

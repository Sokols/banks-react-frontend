import React, { useState } from 'react';
import './AccountTable.css';

import { Table, Button } from 'react-bootstrap';
import AccountModal from './AccountModal';

const AccountTable = ({ user, banks, accounts, editAccount, removeAccount }) => {
    const [show, setShow] = useState(false);
    const [account, setAccount] = useState({ accountNumber: "", ownerName: "", ownerSurname: "", bank: { bankName: "" }, userId: user.id });

    const editChosenAccount = (account) => {
        setAccount(account)
        setShow(true);
    }

    const saveAccount = () => editAccount(account);

    return (
        <div>
            <AccountModal banks={banks} show={show} setShow={setShow} account={account} setAccount={setAccount} saveAccount={saveAccount} />
            <Table striped bordered hover variant="dark" className="table" >
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Account Number</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                {
                    accounts && accounts[0] ? (
                        <tbody>
                            {accounts.map((account) => (
                                <tr>
                                    <td>{account.ownerName}</td>
                                    <td>{account.ownerSurname}</td>
                                    <td>{account.accountNumber}</td>
                                    <td>
                                        <Button 
                                            className="rowButton" 
                                            variant="primary" 
                                            onClick={() => editChosenAccount(account)}>Edit</Button>
                                        <Button 
                                            className="rowButton" 
                                            variant="danger"
                                            onClick={() => removeAccount(account)}>Delete</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    ) : (
                        <tbody>
                            <tr>
                                <td colSpan="4">No account yet!</td>
                            </tr>
                        </tbody>
                    )}
            </Table>
        </div>
    )
}

export default AccountTable;

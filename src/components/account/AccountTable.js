import React, { useState } from 'react';
import './AccountTable.css';

import { Table, Button } from 'react-bootstrap';
import AccountModal from './AccountModal';

const AccountTable = ({ accounts, addAccount }) => {
    const [show, setShow] = useState(false);
    const [account, setAccount] = useState({});

    const editAccount = (account) => {
        setAccount(account)
        setShow(true);
    }

    const saveAccount = () => addAccount(account);

    return (
        <div>
            <AccountModal show={show} setShow={setShow} account={account} setAccount={setAccount} saveAccount={saveAccount} />
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
                    accounts ? (
                        <tbody>
                            {accounts.map((account) => (
                                <tr>
                                    <td>{account.ownerName}</td>
                                    <td>{account.ownerSurname}</td>
                                    <td>{account.accountNumber}</td>
                                    <td>
                                        <Button className="rowButton" variant="primary" onClick={() => editAccount(account)}>Edit</Button>
                                        <Button className="rowButton" variant="danger">Delete</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    ) : (
                        <tbody>
                            <tr>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>1234</td>
                            </tr>
                            <tr>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>5678</td>
                            </tr>
                            <tr>
                                <td>Larry the Bird</td>
                                <td></td>
                                <td>9012</td>
                            </tr>
                        </tbody>
                    )}
            </Table>
        </div>
    )
}

export default AccountTable;

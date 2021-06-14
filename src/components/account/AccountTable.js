import React from 'react';
import './AccountTable.css';

import { Table } from 'react-bootstrap';

const AccountTable = ({ accounts }) => {
    return (
        <Table striped bordered hover variant="dark" className="table" >
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Account Number</th>
                </tr>
            </thead>
            {
                accounts ? (
                    <tbody>
                        {accounts.map(({ ownerName, ownerSurname, accountNumber }) => (
                            <tr>
                                <td>{ownerName}</td>
                                <td>{ownerSurname}</td>
                                <td>{accountNumber}</td>
                            </tr>
                        ))}
                    </tbody>
                )
                    : (
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
    )
}

export default AccountTable;

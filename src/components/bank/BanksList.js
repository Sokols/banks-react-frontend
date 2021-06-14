import React from 'react';
import './Bank.css';

import { ListGroup } from 'react-bootstrap';

const BanksList = ({ banks }) => {
    return (
        <div>
            <ListGroup >
                {banks.map((bank) => (
                    <ListGroup.Item variant="dark">
                        {bank.bankName}
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    )
}

export default BanksList

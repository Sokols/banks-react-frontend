import React from 'react';

import { Card, Button } from 'react-bootstrap';

const BankCard = ({ bank }) => {
    return (
        <div>
            <Card>
                <Card.Img variant="top" src={bank.bankImageUrl} className="cardImage" />
                <Card.Body>
                    <Card.Title>{bank.bankName}</Card.Title>
                    <Button variant="secondary">Check</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default BankCard;

import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

import BankCard from './BankCard';

const BanksList = ({ banks }) => {
    return (
        <div>
            <Container>
                <Row>
                    {banks.map((bank) => (
                        <Col>
                            <BankCard bank={bank} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default BanksList

import React from 'react';
import { Button, Image } from 'react-bootstrap';

const BankInfo = ({ bank }) => {
    return (
        <div className="bankInfoContainer">
            <Image className="bankInfoImage" src={bank.bankImageUrl} fluid />
            <p>Name: <span>{bank.bankName}</span></p>
            <p>Country code: <span>{bank.countryCode}</span></p>
            <p>Swift code: <span>{bank.swiftCode}</span></p>
        </div>
    )
}

export default BankInfo;

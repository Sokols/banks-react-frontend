import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

const AccountModal = ({ banks, show, setShow, account, setAccount, saveAccount }) => {
    const [dataError, setDataError] = useState("");

    const handleClose = () => {
        setDataError("");
        setShow(false);
    }

    const saveChanges = () => {
        if (checkIfDataCorrect()) {
            saveAccount();
            handleClose();
        }
    }

    const checkIfDataCorrect = () => {
        const regex = /^[0-9\b]+$/;
        if (account.accountNumber === "" || account.ownerName === "" || account.ownerSurname === "" || !account.bank) {
            setDataError("Enter all values!");
            return false;
        } else if (!regex.test(account.accountNumber)) {
            setDataError("Incorrect account number!");            
            return false;
        }
        setDataError("");
        return true;
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Edit account</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group>
                    <Form.Label>Account Number</Form.Label>
                    <Form.Control placeholder="Enter account number" onChange={e => setAccount({ ...account, accountNumber: e.target.value })} value={account.accountNumber} />
                    <Form.Text className="text-muted" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control placeholder="Enter owner name" onChange={e => setAccount({ ...account, ownerName: e.target.value })} value={account.ownerName} />
                    <Form.Text className="text-muted" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Surname</Form.Label>
                    <Form.Control placeholder="Enter owner surname" onChange={e => setAccount({ ...account, ownerSurname: e.target.value })} value={account.ownerSurname} />
                    <Form.Text className="text-muted" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Choose bank</Form.Label>
                    <Form.Control as="select" onChange={e => {
                        const bank = banks.find((element) => {
                            return element.bankName === e.target.value
                        })
                        setAccount({ ...account, bank: bank })
                    }} value={account.bank.bankName}>
                        {banks.map((bank) => (
                            <option>
                                {bank.bankName}
                            </option>
                        ))}
                    </Form.Control>
                </Form.Group>
                {
                    dataError !== "" ? (
                        <div className="data-error">
                            {dataError}
                        </div>) : (<div></div>)
                }
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={saveChanges}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default AccountModal;

import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

const AccountModal = ({ show, setShow, account, setAccount, saveAccount }) => {
    const [dataError, setDataError] = useState(false);

    const handleClose = () => setShow(false);

    const saveChanges = () => {
        if (account.accountNumber !== "" && account.ownerName !== "" && account.ownerSurname) {
            saveAccount();
            handleClose();
            setDataError(false);
        } else {
            setDataError(true);
        }
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
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant={dataError ? "danger" : "primary"} onClick={saveChanges}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default AccountModal;

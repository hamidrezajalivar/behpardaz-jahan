import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import FormUser from './formUser';
import Modal from 'react-bootstrap/Modal';

const AddUser = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
      <Button variant="primary" onClick={handleShow}>
       add user
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>add new user</Modal.Title>
        </Modal.Header>
        <Modal.Body><FormUser setShow={setShow}/></Modal.Body>
      
      </Modal>
        </>
    );
}

export default AddUser;
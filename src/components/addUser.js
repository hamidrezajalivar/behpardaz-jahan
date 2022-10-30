import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import FormUser from './formUser';
import Modal from 'react-bootstrap/Modal';

const AddUser = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button size="lg" variant="primary" onClick={handleShow}>
        add user
      </Button>

      <Modal show={show} backdrop="static" keyboard={false}  onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>add new user</Modal.Title>
        </Modal.Header>
        <Modal.Body><FormUser setShow={setShow} add={true} setList={props.setList} /></Modal.Body>

      </Modal>
    </>
  );
}

export default AddUser;
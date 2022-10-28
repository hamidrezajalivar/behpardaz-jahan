import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import FormEditUser from './formEditUser';
import Modal from 'react-bootstrap/Modal';

const EditUser = ({id,show,setShow}) => {
  const handleClose = () => setShow(false);
    return (
        <>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit user</Modal.Title>
        </Modal.Header>
        <Modal.Body><FormEditUser id={id} setShow={setShow}/></Modal.Body>
      
      </Modal>
        </>
    );
}

export default EditUser;
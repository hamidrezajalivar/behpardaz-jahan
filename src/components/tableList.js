import { BsEyeFill, BsPencilFill } from "react-icons/bs";

import Button from 'react-bootstrap/Button';
import FormUser from './formUser';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import axios from "axios";
import styles from "../styles/tableList.module.css";
import { useState } from 'react';

const TableList = ({ dataList }) => {
    const [show, setShow] = useState(false);
    const [itemId, setItemId] = useState(null);
    const handleCloseEdit = () => {

        setShow(false)
    };
    const handleShowEdit = (event) => {
        setItemId(event.target.value)
        setShow(true);
    }
    const deleteUser = (event) => {

        axios
            .delete(`https://63581241c27556d289368088.mockapi.io/api/v1/users/${event.target.value}`)

    }
    return (
        <>



            <Table striped bordered hover responsive size="sm" className={styles.table}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>City</th>
                        <th>Address</th>
                        <th>CreatedAt</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>

                    {dataList.map((item, index) => (

                        <tr key={item.id}>

                            <td>{index + 1}</td>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.city}</td>
                            <td>{item.address}</td>
                            <td>{item.createdAt}</td>
                            <td>
                                <div className="d-flex justify-content-around align-items-center">
                                    <Link to={`/users/${item.id}`}><BsEyeFill style={{ fontSize: "27px", margin: "5px 10px" }} /></Link>
                                    <Button value={item.id} variant="primary" onClick={(event) => handleShowEdit(event)}>edit</Button>
                                    <Button value={item.id} variant="primary" onClick={(event) => deleteUser(event)}>delete</Button>
                                </div>
                            </td>
                        </tr>



                    ))}


                </tbody>
            </Table>

            <Modal show={show} onHide={handleCloseEdit}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit user</Modal.Title>
                </Modal.Header>
                <Modal.Body><FormUser id={itemId} edit={true} /></Modal.Body>

            </Modal>


        </>
    );
}

export default TableList; 
import { deleteData, getAllData } from './../services/AllService';

import { BsEyeFill } from "react-icons/bs";
import Button from 'react-bootstrap/Button';
import FormUser from './formUser';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import styles from "../styles/tableList.module.css";
import { toast } from 'react-toastify';
import { useState } from 'react';

const TableList = ({ dataList, setList }) => {
    const [show, setShow] = useState(false);
    const [itemId, setItemId] = useState(null);
    const handleCloseEdit = () => {

        setShow(false)
    };
    const handleShowEdit = (event) => {
        setItemId(event.target.value)
        setShow(true);
    }
    const deleteUser = async(event) => {
      
            try {
                const id=event.target.value;
                await deleteData(id);
                const { data } = await getAllData();
                setList(data);
                toast.success("User deleted successfully")
            } catch (err) { console.log(err) }
    
    
        
    
   

    }

    return (
        <>


            {(dataList ) ? (


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
            ) : (<p>Loading ...</p>)}
            <Modal show={show} onHide={handleCloseEdit}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit user</Modal.Title>
                </Modal.Header>
                <Modal.Body><FormUser id={itemId} edit={true} setShow={setShow} setList={setList} /></Modal.Body>

            </Modal>


        </>
    );
}

export default TableList; 
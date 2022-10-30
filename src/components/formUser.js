import React, { useState } from 'react';
import { getAllData, postData, putData } from '../services/AllService';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { toast } from 'react-toastify';

const FormEditUser = (props) => {
    const [validated, setValidated] = useState(false);
    const [user, setuser] = useState({ firstName: "", lastName: "", city: "", address: "" });


    const changeHandler = (event) => {
        setuser({ ...user, [event.target.name]: event.target.value });

    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            toast.error("Please enter the fields correctly")
        }

        setValidated(true);
        if (form.checkValidity() === true) {
            if (props.edit) {

           
                    try {
                        const id=props.id;
                        await putData(id,user);
                        const { data } = await getAllData();
                        props.setList(data);
                        toast.success("Edited")
                    }
                    catch (error) {
                        console.log(error)
                    }

            }
            else if (props.add) {
                try {
                    await postData(user);
                    const { data } = await getAllData();
                    props.setList(data);
                    toast.success("User successfully created!")
                }
                catch (error) {
                    console.log(error)
                }


            }
            props.setShow(false)

        }



    };

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit} >
            <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom01" >
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        name="firstName"
                        placeholder="First name"
                        onChange={changeHandler}

                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationCustom02">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        name="lastName"
                        placeholder="Last name"
                        onChange={changeHandler}

                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>


                <Form.Group as={Col} md="6" controlId="validationCustom04">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder="City" name="city" onChange={changeHandler} required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid city.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationCustom03">
                    <Form.Label>address</Form.Label>
                    <Form.Control type="text" placeholder="address" name="address" onChange={changeHandler} required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid address.
                    </Form.Control.Feedback>
                </Form.Group>

            </Row>

            <Button type="submit" size="lg" className='w-100' >{props.edit ? "Edit " : "Submit"}</Button>
        </Form>
    );
}

export default FormEditUser;
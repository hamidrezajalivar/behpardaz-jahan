import React, { useEffect, useState } from 'react';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import axios from 'axios';

const FormEditUser = (props) => {
    const [validated, setValidated] = useState(false);
    const [user, setuser] = useState({ firstName: "", lastName: "", city: "", address: "" });


    const changeHandler = (event) => {
        setuser({ ...user, [event.target.name]: event.target.value });

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);

        if (props.edit) {

            axios
                .put(`http://localhost:3001/posts/${props.id}`, { ...user })
                .then((res) => setuser(res.data))
                .catch();

        }
        else {
            axios
                .post("http://localhost:3001/posts", { ...user })
                .then((res) => console.log("post", res.data))
                .catch();

        }
        props.setShow(false)





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

            <Button type="submit">{props.edit ? "Edit " : "Submit"}</Button>
        </Form>
    );
}

export default FormEditUser;
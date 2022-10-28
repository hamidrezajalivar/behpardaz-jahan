import { use, useEffect, useState } from "react"

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import axios from "axios";
import { useParams } from 'react-router';

const UserDetails = () => {
    const [user, setUser] = useState([])
    const { id } = useParams();
    useEffect(() => {
        function dataUser() {
            axios
                .get(`http://localhost:3001/posts/${id}`)
                .then((response) => setUser(response.data))
                .catch((err) => console.log(err))
        }
        dataUser();
    }, [id]);
    return (
        <>


          <div>
            <Card style={{ width: '50rem' }} className="d-flex align-items-center mx-auto mt-5">

                <Card.Body>
                    <Card.Title>Full Name : {user.firstName + " "+ user.lastName}</Card.Title>
                    <Card.Text>
                        City : {user.city}
                        <br/>
                        Address : {user.address}
                        <br/>
                        CreatedAt : {user.createdAt}
                    </Card.Text>
                    <Link to="/"><Button variant="primary">All List</Button></Link>
                </Card.Body>
            </Card>
</div>

        </>
    );
}

export default UserDetails;
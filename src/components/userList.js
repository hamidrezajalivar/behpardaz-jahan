import { useEffect, useState } from 'react';

import AddUser from './addUser';
import Container from 'react-bootstrap/Container';
import TableList from './tableList';
import axios from 'axios';

const UserList = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        function dataUsers() {
            axios
                .get('http://localhost:3001/posts')
                .then((response) => setList(response.data))
                .catch((err) => console.log(err))
        }
        dataUsers();
    }, [list]);



    return (
        <>
            <Container>
                <div className="my-5">
                    <AddUser />
                </div>
                <TableList dataList={list} />
            </Container>
        </>
    );
}

export default UserList;
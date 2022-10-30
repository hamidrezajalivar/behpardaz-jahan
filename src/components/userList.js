import { useEffect, useState } from 'react';

import AddUser from './addUser';
import Container from 'react-bootstrap/Container';
import TableList from './tableList';
import { getAllData } from './../services/AllService';

const UserList = () => {
    const [list, setList] = useState();

    useEffect(() => {
        const dataUsers = async () => {
            try {
                const { data } = await getAllData();
                setList(data)
            }
            catch (error) {
                console.log(error);
            }


        }
        dataUsers();
    }, []);



    return (
        <>
            <Container>
                <div className="my-5">
                    <AddUser setList={setList} />
                </div>
                <TableList dataList={list} setList={setList} />
            </Container>
        </>
    );
}

export default UserList;
import { useEffect, useState } from 'react';

import TableList from './tableList';
import axios from 'axios';

const UserList = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
         function dataUser() {
             axios
                .get('https://63581241c27556d289368088.mockapi.io/api/v1/users')
                .then((response) => setList(response.data))
                .catch((err) => console.log(err))
        }
        dataUser();
    }, []);



    return (
        <>
            <TableList dataList={list}/>
        </>
    );
}

export default UserList;
import axios from 'axios';

axios.defaults.baseURL = 'https://63581241c27556d289368088.mockapi.io/api/v1/users';


const http={
    get:axios.get,
    put:axios.put,
    delete:axios.delete,
    post:axios.post

}

export default http;
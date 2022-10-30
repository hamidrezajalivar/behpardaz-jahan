import axios from 'axios';

axios.defaults.baseURL = 'https://63581241c27556d289368088.mockapi.io/api/v1/users';

axios.interceptors.request.use(
    (request)=>{
        console.log(request);
        return request;
    },
    (error)=>{
        console.log(error);
        return Promise.reject();
    }
)

axios.interceptors.response.use(
    (response)=>{
        console.log(response);
        return response;
    },
    (error)=>{
        console.log(error);
        return Promise.reject();
    }
)

const http={
    get:axios.get,
    put:axios.put,
    delete:axios.delete,
    post:axios.post

}

export default http;
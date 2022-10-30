import http from './httpService';

export function getAllData() {
    return http.get()
}
export function getSingleData(id) {
    return http.get(`/${id}`)
}

export function putData(id,user) {
    return http.put(`/${id}`,{...user})
}
export function deleteData(id) {
    return http.delete(`/${id}`)
}


export function postData(user) {
    const token="SECURE TOKEN !";
    const header={
        headers:{
            Authorization: `Bearer ${token}`,
        },
    }
    return http.post(``,{...user},header)
}
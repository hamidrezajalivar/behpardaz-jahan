import http from './httpService';

export function getAllData() {
    return http.get()
}
export function getSingleData(id) {
    return http.get(`/${id}`)
}

export function postData(user) {
    return http.post(``,{...user})
}
export function putData(id,user) {
    return http.put(`/${id}`,{...user})
}
export function deleteData(id) {
    return http.delete(`/${id}`)
}
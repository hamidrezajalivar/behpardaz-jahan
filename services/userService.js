import config from "./config.json";
import http from "./httpService";

export const getUser = user => {
    return http.post(
        `${config.userapi}`,JSON.stringify(user)
    );
};

export const editUser = user => {
    return http.post(`${config.userapi}`, JSON.stringify(user));
};


export const deleteUser = user => {
    return http.post(`${config.userapi}`, JSON.stringify(user));
};

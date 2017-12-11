import axios from 'axios';

const baseURL = '/api/auth';

function register(body) {
    return axios
        .post(`${baseURL}/register`, body)
        .then(res => res)
        .catch(err => res.status(500).send(err));
}

function login(body) {
    return axios
        .post(`${baseURL}/login`, body)
        .then(res => res)
        .catch(err => res.status(500).send(err));
}

function logout() {
    return axios
        .post(`${baseURL}/logout`, body)
        .then(res => res)
        .catch(err => res.status(500).send(err));
}

export {
    register,
    login,
    logout
};

import 'axios';

const baseURL = '/api/auth';

function register(body) {
    return axios
        .post(`${baseURL}/register`, body)
        .then( res => res )
        .catch( err => {throw err});
}

function login(body) {
    return axios
        .post(`${baseURL}/login`, body)
        .then( res => res )
        .catch( err => {throw err});
}

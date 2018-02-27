import axios from 'axios';

const baseURL = '/api/session'

function getUserid() {
    return axios
        .get(`${baseURL}/userid`)
        .then(res => res)
        .catch(err => {throw err});
}

export {
    getUserid
};
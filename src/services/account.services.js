import axios from 'axios';

const baseURL = '/api/account';

function findUser(userid) {
    return axios
        .get(`${baseURL}/${userid}`)
        .then(res => res)
        .catch(err => res.status(500).send(err));
}

function updateUser(userid, body) {
    return axios
        .put(`${baseURL}/update/${userid}`, body)
        .then(res => res)
        .catch(err => res.status(500).send(err));
}

function deleteUser(userid) {
    return axios
        .put(`${baseURL}/update/${userid}`)
        .then(res => res)
        .catch(err => res.status(500).send(err));
}

export {
    findUser,
    updateUser,
    deleteUser
};

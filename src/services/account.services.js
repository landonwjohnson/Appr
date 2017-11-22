import 'axios';

const baseURL = '/api/account';

function findUser(userId) {
    return axios
        .get(`${baseURL + '/' + userId}`)
        .then( res => res )
        .catch( err => {throw err});
}

function updateUser(userId, body) {
    return axios
        .put(`${baseURL + '/update' + userId}`, body)
        .then( res => res )
        .catch( err => {throw err});
}

function deleteUser(userId) {
    return axios
        .put(`${baseURL + '/update' + userId}`)
        .then( res => res )
        .catch( err => {throw err});
}

export {
    findUser,
    updateUser,
    deleteUser
}

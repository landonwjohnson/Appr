import 'axios';

const baseURL = '/api/account';

function findUser(id) {
    return axios
        .get(`${baseURL + '/' + id}`)
        .then( res => res )
        .catch( err => {throw err});
}

function updateUser(id, body) {
    return axios
        .put(`${baseURL + '/update' + id}`, body)
        .then( res => res )
        .catch( err => {throw err});
}

function deleteUser(id) {
    return axios
        .delete(`${baseURL + '/update' + id}`)
        .then( res => res )
        .catch( err => {throw err});
}

export {
    findUser,
    updateUser,
    deleteUser
}

import 'axios'

const baseURL = '/api/group';

function createGroup(body) {
    return axios
        .post(`${baseURL}/create`, body)
        .then( res => res )
        .catch( err => {throw err});
}

function findGroup(groupId) {
    return axios
        .get(`${baseURL + '/' + groupId}`)
        .then( res => res )
        .catch( err => {throw err});
}

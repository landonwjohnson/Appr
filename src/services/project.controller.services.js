import 'axios'

const baseURL = '/api/project';

function createProjectController(body) {
    return axios
        .post(`${baseURL}/create/controller`, body)
        .then( res => res )
        .catch( err => {throw err});
}

function findProjectController(controllerid) {
    return axios
        .get(`${baseURL}/controller/:${controllerid}`)
        .then( res => res )
        .catch( err => {throw err});
}

function updateProjectController(controllerid, body) {
    return axios
        .put(`${baseURL}/update/controller/:${controllerid}`, body)
        .then( res => res )
        .catch( err => {throw err});
}

function deleteProjectController(controllerid) {
    return axios
        .delete(`${baseURL}/delete/controller/:${controllerid}`)
        .then( res => res )
        .catch( err => {throw err});
}

export {
    createProjectController,
    findProjectController,
    updateProjectController,
    deleteProjectController,
}
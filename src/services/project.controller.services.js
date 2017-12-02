import 'axios'

const baseURL = '/api/project/:projectid';

function createProjectController(projectid, body) {
    return axios
        .post(`${baseURL}/create/controller`, body)
        .then( res => res )
        .catch( err => {throw err});
}

function findProjectController(projectid, controllerid) {
    return axios
        .get(`${baseURL}/controller/:${controllerid}`)
        .then( res => res )
        .catch( err => {throw err});
}

function updateProjectController(projectid, controllerid, body) {
    return axios
        .put(`${baseURL}/update/controller/:${controllerid}`, body)
        .then( res => res )
        .catch( err => {throw err});
}

function deleteProjectController(projectid, controllerid) {
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
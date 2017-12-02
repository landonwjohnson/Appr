import 'axios'

const baseURL = '/api/project/:projectid';

function createProjectEndpoint(projectid, body) {
    return axios
        .post(`${baseURL}/create/endpoint`, body)
        .then( res => res )
        .catch( err => {throw err} );
}

function findProjectEndpoint(projectid, endpointid) {
    return axios
        .get(`${baseURL}/endpoint/:${endpointid}`)
        .then( res => res )
        .catch( err => {throw err});
}

function updateProjectEndpoint(projectid, endpointid, body) {
    return axios
        .put(`${baseURL}/update/endpoint/:${endpointid}`)
        .then( res => res )
        .catch( err => {throw err});
}

function deleteProjectEndpoint(projectid, endpointid) {
    return axios
        .delete(`${baseURL}/delete/endpoint/:${endpointid}`)
        .then( res => res )
        .catch( err => {throw err});
}

export {
    createProjectEndpoint,
    findProjectEndpoint,
    updateProjectEndpoint,
    deleteProjectEndpoint,
}
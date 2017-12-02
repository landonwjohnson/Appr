import 'axios'

const baseURL = '/api/project';

function createProjectEndpoint(body) {
    return axios
        .post(`${baseURL}/create/endpoint`, body)
        .then( res => res )
        .catch( err => {throw err} );
}

function findProjectEndpoint(endpointid) {
    return axios
        .get(`${baseURL}/endpoint/:${endpointid}`)
        .then( res => res )
        .catch( err => {throw err});
}

function updateProjectEndpoint(endpointid, body) {
    return axios
        .put(`${baseURL}/update/endpoint/:${endpointid}`)
        .then( res => res )
        .catch( err => {throw err});
}

function deleteProjectEndpoint(endpointid) {
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
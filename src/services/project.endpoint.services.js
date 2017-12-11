import axios from 'axios';

const baseURL = '/api/project';

function createProjectEndpoint(projectid, body) {
    return axios
        .post(`${baseURL}/${projectid}/create/endpoint`, body)
        .then(res => res)
        .catch(err => res.status(500).send(err));
}

function findProjectEndpoints(projectid) {
    return axios
        .get(`${baseURL}/${projectid}/endpoints`)
        .then(res => res)
        .catch(err => res.status(500).send(err));
}

function findProjectEndpoint(projectid, endpointid) {
    return axios
        .get(`${baseURL}/${projectid}/endpoint/:${endpointid}`)
        .then(res => res)
        .catch(err => res.status(500).send(err));
}

function updateProjectEndpoint(projectid, endpointid, body) {
    return axios
        .put(`${baseURL}/${projectid}/update/endpoint/${endpointid}`)
        .then(res => res)
        .catch(err => res.status(500).send(err));
}

function deleteProjectEndpoint(projectid, endpointid) {
    return axios
        .delete(`${baseURL}/${projectid}/delete/endpoint/${endpointid}`)
        .then(res => res)
        .catch(err => res.status(500).send(err));
}

export {
    createProjectEndpoint,
    findProjectEndpoints,
    findProjectEndpoint,
    updateProjectEndpoint,
    deleteProjectEndpoint
};

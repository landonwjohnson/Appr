import axios from 'axios';

const baseURL = '/api/project';

function createProjectFeature(projectid, body) {
    return axios
        .post(`${baseURL}/${projectid}/create`, body)
        .then(res => res)
        .catch(err => res.status(500).send(err));
}

function findProjectFeatures(projectid) {
    return axios
        .get(`${baseURL}/${projectid}/features`)
        .then(res => res)
        .catch(err => res.status(500).send(err));
}

function findProjectFeature(projectid, featureid) {
    return axios
        .get(`${baseURL}/${projectid}/feature/${featureid}`)
        .then(res => res)
        .catch(err => res.status(500).send(err));
}

function updateProjectFeature(projectid, featureid, body){
    return axios
        .put(`${baseURL}/${projectid}/update/feature/${featureid}`)
        .then(res => res)
        .catch(err => res.status(500).send(err));
}

function deleteProjectFeature(projectid, featureid){
    return axios
        .delete(`${baseURL}/${projectid}/delete/feature/${featureid}`)
        .then(res => res)
        .catch(err => res.status(500).send(err));
}

export {
    createProjectFeature,
    findProjectFeatures,
    findProjectFeature,
    updateProjectFeature,
    deleteProjectFeature
};

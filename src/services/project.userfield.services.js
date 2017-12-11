import axios from 'axios';

const baseURL = '/api/project';

function createProjectUserField(projectid, body) {
    return axios
        .post(`${baseURL}/${projectid}/create/userfield`, body)
        .then(res => res)
        .catch(err => res.status(500).send(err));
}

function findProjectUserFields(projectid) {
    return axios
        .get(`${baseURL}/${projectid}/userfields`)
        .then(res => res)
        .catch(err => res.status(500).send(err));
}

function findProjectUserField(projectid, userfieldid) {
    return axios
        .get(`${baseURL}/${projectid}/userfield/${userfieldid}`)
        .then(res => res)
        .catch(err => res.status(500).send(err));
}

function updateProjectUserField(projectid, userfieldid, body) {
    return axios    
        .put(`${baseURL}/${projectid}/update/userfield/${userfieldid}`, body)
        .then(res => res)
        .catch(err => res.status(500).send(err));
}

function deleteProjectUserField(projectid, userfieldid) {
    return axios    
        .delete(`${baseURL}/${projectid}/delete/userfield/${userfieldid}`)
        .then(res => res)
        .catch(err => res.status(500).send(err));
}

export {
    createProjectUserField,
    findProjectUserFields,
    findProjectUserField,
    updateProjectUserField,
    deleteProjectUserField
};

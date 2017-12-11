import axios from 'axios';

const baseURL = '/api/project';

function createProjectIdea(projectid, body) {
    return axios
        .post(`${baseURL}/${projectid}/create/idea`, body)
        .then(res => res)
        .catch(err => res.status(500).send(err));
}

function findProjectIdeas(projectid) {
    return axios
        .get(`${baseURL}/${projectid}/ideas`)
        .then(res => res)
        .catch(err => res.status(500).send(err));
}

function findProjectIdea(projectid, ideaid) {
    return axios
        .get(`${baseURL}/${projectid}/idea/${ideaid}`)
        .then(res => res)
        .catch(err => res.status(500).send(err));
}

function updateProjectIdea(projectid, ideaid, body) {
    return axios
        .put(`${baseURL}/${projectid}/update/idea/${ideaid}`, body)
        .then(res => res)
        .catch(err => res.status(500).send(err));
}

function deleteProjectIdea(projectid, ideaid) {
    return axios
        .delete(`${baseURL}/${projectid}/delete/idea/${ideaid}`)
        .then(res => res)
        .catch(err => res.status(500).send(err));
}

export {
    createProjectIdea,
    findProjectIdeas,
    findProjectIdea,
    updateProjectIdea,
    deleteProjectIdea
};

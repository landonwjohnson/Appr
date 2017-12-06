import 'axios'

const baseURL = '/api/project/';

function createProjectIdea(projectid, body) {
    return axios
        .post(`${baseURL + projectid}/create/idea`, body)
        .then( res => res )
        .catch( err => {throw err});
}

function findProjectIdea(projectid, ideaid) {
    return axios
        .get(`${baseURL + projectid + '/' + ideaid}`)
        .then( res => res )
        .catch( err => {throw err});
}

function updateProjectIdea(projectid, ideaid, body) {
    return axios
        .put(`${baseURL + projectid + '/update/idea/' + ideaid}`, body)
        .then( res => res )
        .catch( err => {throw err});
}

function deleteProjectIdea(projectid, ideaid) {
    return axios
        .delete(`${baseURL + projectid + '/delete/idea/' + ideaid}`)
        .then( res => res )
        .catch( err => {throw err});
}

export {
    createProjectIdea,
    findProjectIdea,
    updateProjectIdea,
    deleteProjectIdea
}
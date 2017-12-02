import 'axios'

const baseURL = '/api/project/:projectid';

function createProjectIdea(projectid, body) {
    return axios
        .post(`${baseURL}/create/idea`, body)
        .then( res => res )
        .catch( err => {throw err});
}

function findProjectIdea(projectid, ideaid) {
    return axios
        .get(`${baseURL + '/' + ideaid}`)
        .then( res => res )
        .catch( err => {throw err});
}

function updateProjectIdea(projectid, ideaid, body) {
    return axios
        .put(`${baseURL + '/update/idea/' + ideaid}`, body)
        .then( res => res )
        .catch( err => {throw err});
}

function deleteProjectIdea(projectid, ideaid) {
    return axios
        .delete(`${baseURL + '/delete/idea/' + ideaid}`)
        .then( res => res )
        .catch( err => {throw err});
}

export {
    createProjectIdea,
    findProjectIdea,
    updateProjectIdea,
    deleteProjectIdea
}

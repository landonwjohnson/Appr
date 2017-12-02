import 'axios'

const baseURL = '/api/project';

function createProjectIdea(body) {
    return axios
        .post(`${baseURL}/create/idea`, body)
        .then( res => res )
        .catch( err => {throw err});
}

function findProjectIdea(ideaid) {
    return axios
        .get(`${baseURL + '/' + ideaid}`)
        .then( res => res )
        .catch( err => {throw err});
}

function updateProjectIdea(ideaid, body) {
    return axios
        .put(`${baseURL + '/update/idea/' + ideaid}`, body)
        .then( res => res )
        .catch( err => {throw err});
}

function deleteProjectIdea(ideaid) {
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

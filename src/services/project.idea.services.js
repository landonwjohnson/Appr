import 'axios'

const baseURL = '/api/project';

function createProjectIdea(body) {
    return axios
        .post(`${baseURL}/create/idea`, body)
        .then( res => res )
        .catch( err => {throw err});
}

function findProjectIdea(ideaId) {
    return axios
        .get(`${baseURL + '/' + ideaId}/`)
        .then( res => res )
        .catch( err => {throw err});
}
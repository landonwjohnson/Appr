import 'axios'

const baseURL = '/api/project';

function createProjectFeature(body) {
    return axios
        .post(`${baseURL}/create`, body)
        .then( res => res )
        .catch( err => {throw err});
}

function findProjectFeature(featureid) {
    return axios
        .get(`${baseURL}/feature/:${featureid}`)
        .then( res => res )
        .catch( err => {throw err});
}

function updateProjectFeature(featureid, body){
    return axios
        .put(`${baseURL}/update/feature/:${featureid}`)
        .then( res => req )
        .catch( err => {throw err})
}

function deleteProjectFeature(featureid){
    return axios
        .delete(`${baseURL}/delete/feature/:${featureid}`)
        .then( res => req )
        .catch( err => {throw err} )
}


export {
    createProjectFeature,
    findGroup,
    updateGroup,
    deleteGroup
}

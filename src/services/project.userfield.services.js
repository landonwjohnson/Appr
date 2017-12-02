import 'axios'

const baseURL = '/api/project/:projectid';

function createProjectUserField(projectid, body) {
    return axios
        .post(`${baseURL}/create/userfield`, body)
        .then( res => res )
        .catch( err => {throw err});
}

function findProjectUserField(projectid, userfieldid) {
    return axios
        .get(`${baseURL}/userfield/:${userfieldid}`)
        .then( res => res )
        .catch( err => {throw err});
}

function updateProjectUserField(projectid, userfieldid, body) {
    return axios    
        .put(`${baseURL}/update/userfield/:${userfieldid}`, body)
        .then( res => res )
        .catch( err => {throw err});
}

function deleteProjectUserField(projectid, userfield) {
    return axios    
        .delete(`${baseURL}/delete/userfield/:${userfieldid}`)
        .then( res => res )
        .catch( err => {throw err});
}

export {
    createProjectUserField,
    findProjectUserField,
    updateProjectUserField,
    deleteProjectUserField,
}
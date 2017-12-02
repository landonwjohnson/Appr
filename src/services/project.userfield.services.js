import 'axios'

const baseURL = '/api/project';

function createProjectUserField(body) {
    return axios
        .post(`${baseURL}/create/userfield`, body)
        .then( res => res )
        .catch( err => {throw err});
}

function findProjectUserField(userfieldid) {
    return axios
        .get(`${baseURL}/userfield/:${userfieldid}`)
        .then( res => res )
        .catch( err => {throw err});
}

function updateProjectUserField(userfieldid, body) {
    return axios    
        .put(`${baseURL}/update/userfield/:${userfieldid}`, body)
        .then( res => res )
        .catch( err => {throw err});
}

function deleteProjectUserField(userfield) {
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
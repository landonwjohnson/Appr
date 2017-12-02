import 'axios'

const baseURL = '/api/project';

function createProjectSchema(body) {
    return axios
        .post( `${baseURL}/create/schema`, body )
        .then( res => res )
        .catch( err => {throw err} );
}

function findProjectSchema(schemaid) {
    return axios
        .get( `${baseURL}/schema/:${schemaid}`)
        .then( res => res )
        .catch( err => {throw err} );
}

function updateProjectSchema(schemaid, body) {
    return axios
        .put( `${baseURL}/update/schema/:${schemaid}`, body )
        .then( res => res )
        .catch( err => {throw err});
}

function deleteProjectSchema(schemaid) {
    return axios
        .delete( `${baseURL}/delete/schema/:${schemaid}`)
        .then( res => res )
        .catch( err => {throw err});
}

export {
    createProjectSchema,
    findProjectSchema,
    updateProjectSchema,
    deleteProjectSchema
}
import 'axios'

const baseURL = '/api/project';

function createProjectSchema(body) {
    return axios
        .post( `${baseURL + projectid}/create/schema`, body )
        .then( res => res )
        .catch( err => {throw err} );
}

function findProjectSchema(schemaid) {
    return axios
        .get( `${baseURL + projectid}/schema/:${schemaid}`)
        .then( res => res )
        .catch( err => {throw err} );
}

function updateProjectSchema(schemaid, body) {
    return axios
        .put( `${baseURL + projectid}/update/schema/:${schemaid}`, body )
        .then( res => res )
        .catch( err => {throw err});
}

function deleteProjectSchema(schemaid) {
    return axios
        .delete( `${baseURL + projectid}/delete/schema/:${schemaid}`)
        .then( res => res )
        .catch( err => {throw err});
}

export {
    createProjectSchema,
    findProjectSchema,
    updateProjectSchema,
    deleteProjectSchema
}

import 'axios'

const baseURL = '/api/project';

function createProjectView(body) {
    return axios
        .post( `${baseURL}/create/view`, body )
        .then( res => res )
        .catch( err => {throw err});
}

function findProjectView(viewid) {
    return axios
        .get( `${baseURL}/view/:${viewid}`)
        .then( res => res )
        .catch( err => {throw err});
}

function updateProjectView( viewid, body ) {
    return axios
        .put( `${baseURL}/update/view/:${viewid}`, body)
        .then( res => res )
        .catch( err => {throw err});
    }

function deleteProjectView( viewid ) {
    return axios   
        .delete( `${baseURL}/delete/view/:${viewid}` )
        .then( res => res )
        .catch( err => {throw err});
}

export {
    createProjectView,
    findProjectView,
    updateProjectView,
    deleteProjectView,
}
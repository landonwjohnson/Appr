import 'axios';

const baseURL = '/api/dashboard';

function findUserGroupsAndUserProjects(id) {
    return axios
        .get(`${baseURL + '/' + id}`)
        .then( res => res )
        .catch( err => {throw err});
}

export {
    findUserGroupsAndUserProjects
}

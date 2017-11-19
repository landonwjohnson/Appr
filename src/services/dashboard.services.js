import 'axios';

const baseURL = '/api/dashboard';

function findUserGroupsAndUserProjects(userId) {
    return axios
        .get(`${baseURL + '/' + userId}`)
        .then( res => res )
        .catch( err => {throw err});
}

export {
    findUserGroupsAndUserProjects
}

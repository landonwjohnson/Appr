import 'axios';

const baseURL = '/api/account';

function findUser(id) {
    return axios
        .get(`${baseURL + '/' + id}`)
        .then( res => res )
        .catch( err => {throw err});
}

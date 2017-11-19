import 'axios'

const baseURL = '/api/group';

function createGroup(body) {
    return axios
        .post(`${baseURL}/create`, body)
        .then( res => res )
        .catch( err => {throw err});
}

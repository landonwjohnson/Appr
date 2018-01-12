import axios from 'axios';

const baseURL = '/api/user_customization';

function findProjectBackgrounds() {
    return axios
        .get(`${baseURL}/project_backgrounds`)
        .then(res => res)
        .catch(err => {throw err});
}


export {
    findProjectBackgrounds
}
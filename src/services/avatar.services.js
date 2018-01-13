import axios from 'axios';

const baseURL = '/api/user_customization';

function findAvatars(){
    return axios
        .get(`${baseURL}/user_avatar`)
        .then(res => res)
        .catch(err => {throw err});
}

export {
    findAvatars
}
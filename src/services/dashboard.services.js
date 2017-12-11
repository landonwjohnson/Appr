import axios from 'axios';

const baseURL = '/api/dashboard';

function findDashboardInfo(userid) {
    return axios
        .get(`${baseURL}/${userid}`)
        .then(res => res)
        .catch(err => res.status(500).send(err));
}

export {
    findDashboardInfo
};

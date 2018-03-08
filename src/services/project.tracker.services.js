import axios from 'axios';

const baseURL = '/api/project';

function createTrackerList(projectid, body) {
    return axios
        .post(`${baseURL}/${projectid}/create/tracker-list`, body)
        .then(res => res)
        .catch(err => {throw err});
}

function findTrackerLists(projectid) {
    return axios
        .get(`${baseURL}/${projectid}/tracker-lists`)
        .then(res => res)
        .catch(err => {throw err});
}

function findTrackerList(projectid, listid) {
    return axios
        .get(`${baseURL}/${projectid}/tracker-list/${listid}`)
        .then(res => res)
        .catch(err => {throw err});
}

function updateTrackerList(projectid, listid, body) {
    return axios
        .put(`${baseURL}/${projectid}/update/tracker-list/${listid}`, body)
        .then(res => res)
        .catch(err => {throw err});
}

function deleteTrackerList(projectid, trackerid, listid, body) {
    return axios
        .delete(`${baseURL}/${projectid}/delete/tracker-list/${trackerid}/list-order/${listid}`, body)
        .then(res => res)
        .catch(err => {throw err});
}




///////////////////
//Cards
///////////////////

function createTrackerCard(projectid, body) {
    return axios
        .post(`${baseURL}/${projectid}/create/tracker-card`, body)
        .then(res => res)
        .catch(err => {throw err});
}

function findTrackerCards(projectid) {
    return axios
        .get(`${baseURL}/${projectid}/tracker-cards`)
        .then(res => res)
        .catch(err => {throw err});
}
//finding tracker cards per list
function findTrackerCardsPerList(projectid, listid) {
    return axios
        .get(`${baseURL}/${projectid}/tracker-cards/${listid}`)
        .then(res => res)
        .catch(err => {throw err});
}

function findTrackerCard(projectid, cardid) {
    return axios
        .get(`${baseURL}/${projectid}/tracker-card/${cardid}`)
        .then(res => res)
        .catch(err => {throw err});
}

function updateTrackerCard(projectid, cardid, body) {
    return axios
        .put(`${baseURL}/${projectid}/update/tracker-card/${cardid}`, body)
        .then(res => res)
        .catch(err => {throw err});
}

function deleteTrackerCard(projectid, cardid) {
    return axios
        .delete(`${baseURL}/${projectid}/delete/tracker-card/${cardid}`)
        .then(res => res)
        .catch(err => {throw err});
}

function deleteTrackerCards(projectid, listid) {
    return axios
        .delete(`${baseURL}/${projectid}/delete/tracker-card/${listid}`)
        .then(res => res)
        .catch(err => {throw err});
}



//Landons Ish
function deleteTrackerListNew(projectid, listid) {
    return axios
        .delete(`${baseURL}/${projectid}/delete/tracker-list/${listid}`)
        .then(res => res)
        .catch(err => {throw err});
}

function deleteTrackerListCardsNew(projectid, listid) {
    return axios
        .delete(`${baseURL}/${projectid}/delete/cards/tracker-list/${listid}`)
        .then(res => res)
        .catch(err => {throw err});
}

export {
    createTrackerList,
    findTrackerLists,
    findTrackerList,
    updateTrackerList,
    deleteTrackerList,
    createTrackerCard,
    findTrackerCards,
    findTrackerCardsPerList,
    findTrackerCard,
    updateTrackerCard,
    deleteTrackerCard,
    deleteTrackerCards,

    //Landons
    deleteTrackerListNew,
    deleteTrackerListCardsNew
};
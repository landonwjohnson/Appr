const express = require('express');
const getDb = require('../database/bootstrap.database.js');

const avatarsRouter = express.Router();

avatarsRouter.get('/user_avatars', (req, res) => {
    const db = getDb();

    db.find_user_avatars()
    .then(avatar => res.send(avatars))
    .catch(err => res.status(500).send(err));
});

module.exports = avatarsRouter;
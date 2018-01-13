const express = require('express');
const getDb = require('../database/bootstrap.database.js');

const avatarsRouter = express.Router();

avatarsRouter.get('/user_avatar', (req, res ) => {
    const db = getDb();

    db.find_user_avatars()
    .then(avatars => res.send(avatars))
    .catch(err => res.status(500).send(err));
})

module.exports = avatarsRouter;
const express = require('express');
const getDb = require('../database/bootstrap.database');

const accountRouter = express.Router();

accountRouter.get('/:userid', (req, res) => {
    const db = getDb();
    db.find_user_by_id([this.props.match.params.id])
        .then( user => res.send(user))
        .catch( err => res.send(err));
});

accountRouter.put('/update/:userid', (req, res) => {});

accountRouter.delete('/delete/:userid', (req, res) => {});

module.exports = accountRouter;
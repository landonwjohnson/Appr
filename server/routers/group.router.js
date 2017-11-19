const express = require('express');
const getDb = require('../database/bootstrap.database');

const groupRouter = express.Router();

groupRouter.post('/create', (req, res) => {
    const db = getDb();
    const { name, createdByUserId } = req.body;
    db.create_group([name, createdByUserId])
        .then( () => res.status(200).send())
        .catch( err => res.send(err));
});

groupRouter.get('/:groupid', (req, res) => {
    const db = getDb();
    db.find_group_by_id([this.props.match.params.id])
        .then( group => res.send(group))
        .catch( err => res.send(err));
});

groupRouter.put('/update/:groupid', (req, res) => {
    const db = getDb();
    const { name } = req.body;
    db.update_group([name])
        .then( () => res.status(200).send())
        .catch( err => res.send(err));
});

groupRouter.delete('/delete/:groupid', (req, res) => {
    const db = getDb();
});

module.exports = groupRouter;
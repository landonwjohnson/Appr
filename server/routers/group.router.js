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
});

groupRouter.put('/update/:groupid', (req, res) => {
    const db = getDb();
});

groupRouter.delete('/delete/:groupid', (req, res) => {
    const db = getDb();
});

module.exports = groupRouter;
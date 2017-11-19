const express = require('express');
const getDb = require('../database/bootstrap.database');

const projectRouter = express.Router();

projectRouter.post('/create', (req, res) => {
    const db = getDb();
    const { authorId } = req.body;
    db.create_project([ authorId ])
        .then( () => res.status(200).send())
        .catch( err => res.send( err ));
});

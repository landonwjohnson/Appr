const express = require('express');
const getDb = require('../database/bootstrap.database');

const projectRouter = express.Router();

projectRouter.post('/create', (req, res) => {
    const db = getDb();
    const { authorId } = req.body;
    db.create_project([ authorId ])
        .then( promise => res.status(200).send( promise ))
        .catch( err => res.send( err ));
});

projectRouter.get('/:projectid', (req, res) => {
    const db = getDb();
    db.find_project_by_id([ this.props.match.params.projectid ])
        .then( project => res.status(200).send( project ))
        .catch( err => res.send( err ));
});

projectRouter.update('/update/:projectid', (req, res) => {
    const db = getDb();
    const projectId = this.props.match.params.projectid;
    const {  } = req.body;
    db.update_project([ projectId ])
        .then( promise => res.status(200).send( promise ))
        .catch( err => res.send( err ));
});

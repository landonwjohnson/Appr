const express = require('expresss');
const getDb = require('../database/bootstrap.database');

const projectIdeaRouter = express.Router();

projectIdeaRouter.post('project/create/idea', (req, res) => {
    const { projectId, ideaData } = req.body;
    const db = getDb();
    db.read_project_idea([ ideaData ])
        .then( projectIdea => {
            if (projectIdea[0] && projectIdea[0].ideaData === ideaData ) {
                return res.status(409).send({message: 'Idea is a duplicate, please choose another name'});
            }
            else {
                db.create_project_idea([ projectId, ideaData ])
                .then( promise => res.send())
                .catch( err => res.send(err));
            }
        })
        .catch( err => res.send(err));
});

projectIdeaRouter.get('project/idea/:ideaid', (req, res) => {
    const ideaId = req.params.ideaId;
    const db = getDb();
    db.read_project_idea([ ideaId ])
        .then( projectIdea => res.send(projectIdea))
        .catch( err => res.send(err));
});


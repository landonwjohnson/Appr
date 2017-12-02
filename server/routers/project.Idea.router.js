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

projectIdeaRouter.put('project/update/idea/:ideaid', (req, res) => {
    const ideaId = req.params.ideaId;
    const { projectId, ideaData } = req.body;
    const db = getDb();
    db.update_project_idea([ ideaData ])
        .then( projectIdea => {
            if (projectIdea[0] && projectIdea[0].id != ideaData) {
                return res.status(409).send({message: 'There is another project that is using the idea'})
            }
            else {
                db.update_project_idea([ projectId, ideaData ])
                    .then( promise => res.status(200).send())
                    .catch( err => res.send(err));
            }
        })
        .catch( err => res.send(err));
});

projectIdeaRouter.delete('project/delete/idea/:ideaid', (req, res) => {
    const ideaid = req.params.ideaId;
    const db = getDb();
    db.delete_project_idea([ ideaid ])
        .then( promise => res.send())
        .catch( err => res.send(err));
});

module.exports = projectIdeaRouter;


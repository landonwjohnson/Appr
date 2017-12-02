const express = require('express');
const getDB = require('../database/bootstrap.database');

const projectFeatureRouter = express.Router();

projectFeatureRouter.post('/:projectid/create/feature', (req, res) => {
    const projectid = req.params.projectid
    const { feature_data } = req.body;
    const db = getDB();
    db.create_project_feature([ projectid, feature_data] )
        .then( promise => res.send())
        .catch(err => res.send(err));
    
});

projectFeatureRouter.get('/:projectid/feature/:featureid', (req, res) => {
    const projectid = req.params.projectid;
    const featureid = req.params.featureid;
    const db = getDB();
    db.find_project_feature([ featureid ])
        .then( promise => res.send() )
        .catch(err => res.send(err))
})

projectFeatureRouter.put('/:projectid/update/feature/:featureid', (req, res) => {
    const projectid = req.params.projectid;
    const featureid = req.params.featureid;
    const { feature_data } = req.body;
    db.update_project_feature({ projectid, feature_data} )
        .then( promise => res.send() )
        .catch(err => res.send(err))
})

projectFeatureRouter.delete('/:projectid/delete/feature/:featureid', (req, res) => {
    const projectid = req.params.projectid;
    db.delete_project_feature({ featureid })
        .then( promise => res.send(err))
        .catch(err => res.send(err))
})

module.exports = projectFeatureRouter;
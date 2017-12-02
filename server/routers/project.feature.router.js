const express = require('express');
const getDb = require('../database/bootstrap.database');

const projectFeatureRouter = express.Router();

projectFeatureRouter.post('/project/create/feature', (req, res) => {
    const { name, createdByUserId, ownerId } = req.body;
    
});

projectFeatureRouter.get('/project/feature/:featureid', (req, res) => {

})

projectFeatureRouter.put('/project/update/feature/:featureid', (req, res) => {

})

projectFeatureRouter.delete('/project/delete/feature/:featureid', (req, res) => {

})

module.exports = groupRouter;
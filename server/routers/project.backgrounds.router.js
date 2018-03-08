const express = require('express');
const getDb = require('../database/bootstrap.database.js');

const projectBackgroundsRouter = express.Router();

projectBackgroundsRouter.get('/project_backgrounds', (req, res) => {
    const db = getDb();
    db.find_project_backgrounds()
    .then(projectBackgrounds => res.send(projectBackgrounds))
    .catch(err => res.status(500).send(err)); 
})

module.exports = projectBackgroundsRouter;

//make a post for posting background to DB
//*********** 
//*********** 
//*********** 
//*********** 
//*********** 
//*********** 
//*********** 

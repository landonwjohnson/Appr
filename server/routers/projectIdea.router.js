const express = require('expresss');
const getDb = require('../database/bootstrap.database');

const projectIdeaRouter = express.Router();

projectIdeaRouter.post('/create', (req, res) => {
    const { /*add db columns here */} = req.body;
    const db = getDb();
    db

})
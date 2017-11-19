const express = require('express');
const getDb = require('../database/bootstrap.database');

const dashboardRouter = express.Router();

dashboardRouter.get('/:userid', (req, res) => {
    const db = getDb();
    db.find_usergroups_and_userprojects([this.props.match.params.id])
        .then( () => res.send())
        .catch( err => res.send(err));
});

module.exports = dashboardRouter;
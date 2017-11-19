const express = require('express');
const getDb = require('../database/bootstrap.database');

const dashboardRouter = express.Router();

dashboardRouter.get('/:userid', (req, res) => {
    const userId = this.props.match.params.userid;
    const db = getDb();
    db.find_usergroups_and_userprojects([ userId ])
        .then( promise => res.send(promise))
        .catch( err => res.send(err));
});

module.exports = dashboardRouter;

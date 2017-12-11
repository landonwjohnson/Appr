const express = require('express');
const getDb = require('../database/bootstrap.database');

const dashboardRouter = express.Router();

dashboardRouter.get('/:userid', (req, res) => {
    const userId = this.props.match.params.userid;
    const db = getDb();
    db.find_usergroups_by_userid([ userId ])
        .then( groups => {
            db.find_userprojects_by_userid([ userId ])
                .then(projects => res.send(groups, projects))
                .catch(err => res.status(500).send(err));
        })
        .catch(err => res.status(500).send(err));
});

module.exports = dashboardRouter;

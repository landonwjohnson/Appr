const express = require('express');
const getDb = require('../database/bootstrap.database');

const dashboardRouter = express.Router();

dashboardRouter.get('/:userid', (req, res) => {
    const userid = req.params.userid;
    const db = getDb();
    db.find_usergroups_by_userid([ userid ])
        .then( ugroupids => {
            let userGroups = [];
            let groupProjects = [];
            let userProjects = [];
            for (var i in ugroupids) {
                db.find_group_by_id([ i ])
                    .then( group => {
                        userGroups.push(group[0]);
                        db.find_groupprojects_by_groupid([ i ])
                            .then( gprojectids => {
                                for (var j in gprojectids) {
                                    db.find_project_by_id([ j ])
                                        .then( gproject => {
                                            groupProjects.push(gproject[0]);
                                            res.send();
                                        })
                                        .catch(err => res.status(500).send(err));
                                }
                                res.send();
                            })
                            .catch(err => res.status(500).send(err));
                        res.send();
                    })
                    .catch(err => res.status(500).send(err));
            }
            db.find_userprojects_by_userid([ userid ])
                .then( uprojectids => {
                    for (var k in uprojectids) {
                        db.find_project_by_id([ k ])
                            .then( uproject => {
                                userProjects.push(uproject[0]);
                                res.send();
                            })
                            .catch(err => res.status(500).send(err));
                    }
                    res.send();
                })
                .catch(err => res.status(500).send(err));
            res.send(userGroups, groupProjects, userProjects)
        })
        .catch(err => res.status(500).send(err));
});

module.exports = dashboardRouter;

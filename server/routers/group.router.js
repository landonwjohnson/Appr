const express = require('express');
const getDb = require('../database/bootstrap.database');

const groupRouter = express.Router();

groupRouter.post('/create', (req, res) => {
    const { createdByUserId, name } = req.body;
    const db = getDb();
    db.find_group_by_name([ name ])
        .then( group => {
            if (group[0] && group[0].name === name) {
                res.send({message: 'There is another group that is currently using that name.'});
            }
            else {
                db.create_group([ createdByUserId, name ])
                .then(group => {
                    const userid = createdByUserId;
                    const groupid = group[0].id;
                    res.send(group);
                    db.create_usergroup_relation([ userid, groupid ])
                        .then(promise => res.send())
                        .catch(err => res.status(500).send(err));
                })
                .catch(err => res.status(500).send(err));
            }
        })
        .catch( err => res.status(500).send(err));
});

groupRouter.get('/:groupid', (req, res) => {
    const groupId = req.params.groupid;
    const db = getDb();
    db.find_group_by_id([ groupId ])
        .then(group => res.send(group))
        .catch(err => res.status(500).send(err));
});

groupRouter.put('/update/:groupid', (req, res) => {
    const groupId = req.params.groupid;
    const { name, ownerId } = req.body;
    const db = getDb();
    db.find_group_by_name([ name ])
        .then( group => {
            if (group[0] && group[0].id != groupId) {
                return res.status(409).send({message: 'There is another group that is currently using that name.'});
            }
            else {
                db.update_group([ groupId, name, ownerId ])
                    .then(promise => res.status(200).send())
                    .catch(err => res.status(500).send(err));
            }
        })
        .catch(err => res.status(500).send(err));
});

groupRouter.delete('/delete/:groupid', (req, res) => {
    const groupId = req.params.groupid;
    const db = getDb();
    db.delete_group([ groupId ])
        .then(promise => res.send())
        .catch(err => res.status(500).send(err));
});

module.exports = groupRouter;

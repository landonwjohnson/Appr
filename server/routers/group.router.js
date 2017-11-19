const express = require('express');
const getDb = require('../database/bootstrap.database');

const groupRouter = express.Router();

groupRouter.post('/create', (req, res) => {
    const { name, createdByUserId } = req.body;
    const db = getDb();
    db.create_group([ name, createdByUserId ])
        .then( promise => res.send(promise))
        .catch( err => res.send(err));
});

groupRouter.get('/:groupid', (req, res) => {
    const groupId = this.props.match.params.groupid;
    const db = getDb();
    db.find_group_by_id([ groupId ])
        .then( group => res.send(group))
        .catch( err => res.send(err));
});

groupRouter.put('/update/:groupid', (req, res) => {
    const groupId = this.props.match.params.groupid;
    const { name } = req.body;
    const db = getDb();
    db.update_group([ groupId, name ])
        .then( promise => res.send(promise))
        .catch( err => res.send(err));
});

groupRouter.delete('/delete/:groupid', (req, res) => {
    const groupId = this.props.match.params.groupid;
    const db = getDb();
    db.delete_group([ groupId ])
        .then( promise => res.send(promise))
        .catch( err => res.send(err));
});

module.exports = groupRouter;

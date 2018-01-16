const express = require('express');
const getDb = require('../database/bootstrap.database');

const projectTrackerRouter = express.Router();

projectTrackerRouter.post('/:projectid/create/tracker-list', (req, res) => {
    const projectid = req.params.projectid;
    const { list_name, card_order_id, list_order } = req.body;
    const db = getDb();
    db.create_tracker_list([ projectid, list_name, card_order_id, list_order ])
        .then(list => res.send(list))
        .catch(err => res.status(500).send(err));
});

projectTrackerRouter.get('/:projectid/tracker-lists', (req, res) => {
    const projectid = req.params.projectid;
    const db = getDb();
    db.find_tracker_lists([ projectid ])
        .then(lists => res.send(lists))
        .catch(err => res.status(500).send(err));
});

projectTrackerRouter.get('/:projectid/tracker-list/:trackerid', (req, res) => {
    const projectid = req.params.projectid;
    const trackerid = req.params.trackerid;
    const db = getDb();
    db.find_tracker_list([ projectid, trackerid ])
        .then(list => res.send(list))
        .catch(err => res.status(500).send(err));
});

projectTrackerRouter.put('/:projectid/tracker-list/:trackerid', (req, res) => {
    const projectid = req.params.projectid;
    const trackerid = req.params.trackerid;
    const { listName, cardOrderId, listOrder } = req.body;
    const db = getDb();
    db.update_tracker_list([ projectid, trackerid, listName, cardOrderId, listOrder ])
        .then(promise => res.send())
        .catch(err => res.status(500).send(err));
});

module.exports = projectTrackerRouter;
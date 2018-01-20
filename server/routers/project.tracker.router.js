const express = require('express');
const getDb = require('../database/bootstrap.database');

const projectTrackerRouter = express.Router();

//lists

//create
projectTrackerRouter.post('/:projectid/create/tracker-list', (req, res) => {
    const projectid = req.params.projectid;
    const { list_name, card_order_id, list_order } = req.body;
    const db = getDb();
    db.create_tracker_list([ projectid, listName, cardOrderId, listOrder ])
        .then(list => res.send(list))
        .catch(err => res.status(500).send(err));
});
//get all
projectTrackerRouter.get('/:projectid/tracker-lists', (req, res) => {
    const projectid = req.params.projectid;
    const db = getDb();
    db.find_tracker_lists([ projectid ])
        .then(lists => res.send(lists))
        .catch(err => res.status(500).send(err));
});
//get one
projectTrackerRouter.get('/:projectid/tracker-list/:listid', (req, res) => {
    const projectid = req.params.projectid;
    const listid = req.params.listid;
    const db = getDb();
    db.find_tracker_list([ projectid, listid ])
        .then(list => res.send(list))
        .catch(err => res.status(500).send(err));
});
//update
projectTrackerRouter.put('/:projectid/tracker-list/:listid', (req, res) => {
    const projectid = req.params.projectid;
    const listid = req.params.listid;
    const { listName, cardOrderId, listOrder } = req.body;
    const db = getDb();
    db.update_tracker_list([ projectid, listid, listName, cardOrderId, listOrder ])
        .then(promise => res.send())
        .catch(err => res.status(500).send(err));
});
//delete
projectTrackerRouter.delete('/:projectid/delete/tracker-list/:listid', (req, res) => {
    const projectid = req.params.projectid;
    const listid = req.params.listid;
    const db = getDb();
    db.delete_tracker_list([ projectid, listid ])
        .then(promise => res.send())
        .catch(err => res.status(500).send(err));
});


// cards

projectTrackerRouter.post('/:projectid/create/tracker-card', (req, res) => {
    const projectid = req.params.projectid;
    const { cardName, cardData, cardOrderId, listOrder } = req.body;
    const db = getDb();
    db.create_tracker_card([ projectid, cardName, cardData, cardOrderId, listOrder ])
        .then(card => res.send(card))
        .catch(err => res.status(500).send(err));
});

projectTrackerRouter.get('/:projectid/tracker-cards', (req, res) => {
    const projectid = req.params.projectid;
    const db = getDb();
    db.find_tracker_cards([ projectid ])
        .then(cards => res.send(cards))
        .catch(err => res.status(500).send(err));
});

projectTrackerRouter.get('/:projectid/tracker-card/:cardid', (req, res) => {
    const projectid = req.params.projectid;
    const cardid = req.params.cardid;
    const db = getDb();
    db.find_tracker_card([ projectid, cardid ])
        .then(card => res.send(card))
        .catch(err => res.status(500).send(err));
});

projectTrackerRouter.put('/:projectid/tracker-list/:cardid', (req, res) => {
    const projectid = req.params.projectid;
    const cardid = req.params.cardid;
    const { cardName, cardData, cardOrderId, listOrder } = req.body;
    const db = getDb();
    db.update_tracker_card([ projectid, cardid, cardName, cardData, cardOrderId, listOrder ])
        .then(promise => res.send())
        .catch(err => res.status(500).send(err));
});

projectTrackerRouter.delete('/:projectid/delete/tracker-list/:cardid', (req, res) => {
    const projectid = req.params.projectid;
    const cardid = req.params.cardid;
    const db = getDb();
    db.delete_tracker_card([ projectid, cardid ])
        .then(promise => res.send())
        .catch(err => res.status(500).send(err));
});


module.exports = projectTrackerRouter;
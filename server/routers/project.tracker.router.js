const express = require('express');
const getDb = require('../database/bootstrap.database');

const projectTrackerRouter = express.Router();

//lists

//create
//test works 
projectTrackerRouter.post('/:projectid/create/tracker-list', (req, res) => {
    const projectid = req.params.projectid;
    const { listName, listOrder } = req.body;
    const db = getDb();
    db.create_tracker_list([ projectid, listName, listOrder ])
        .then(list => res.send(list))
        .catch(err => res.status(500).send(err));
});



//get all
//test works
projectTrackerRouter.get('/:projectid/tracker-lists', (req, res) => {
    const projectid = req.params.projectid;
    const db = getDb();
    db.find_tracker_lists([ projectid ])
        .then(lists => res.send(lists))
        .catch(err => res.status(500).send(err));
});
//get one
//test works
projectTrackerRouter.get('/:projectid/tracker-list/:listid', (req, res) => {
    const projectid = req.params.projectid;
    const listid = req.params.listid;
    const db = getDb();
    db.find_tracker_list([ projectid, listid ])
        .then(list => res.send(list))
        .catch(err => res.status(500).send(err));
});
//update
//test works
projectTrackerRouter.put('/:projectid/update/tracker-list/:listid', (req, res) => {
    const projectid = req.params.projectid;
    const listid = req.params.listid;
    const { listName, listOrder } = req.body;
    const db = getDb();
    db.update_tracker_list([ projectid, listid, listName, listOrder ])
        .then(promise => res.send())
        .catch(err => res.status(500).send(err));
});
//delete
//test works
// projectTrackerRouter.delete('/:projectid/delete/tracker-list/:listid', (req, res) => {
//     const projectid = req.params.projectid;
//     const listid = req.params.listid;
//     const db = getDb();
//     db.delete_tracker_list([ projectid, listid ])
//         .then(promise => res.send())
//         .catch(err => res.status(500).send(err));
// });

//delete one list
projectTrackerRouter.delete('/:projectid/delete/tracker-list/:trackerid/list-order/:listid', (req, res) => {
    const projectid = req.params.projectid;
    const trackerid = req.params.trackerid;
    const listid = req.params.listid;
    const db = getDb();
    db.delete_tracker_list([ projectid, trackerid, listid ])
        .then(promise => res.send())
        .catch(err => res.status(500).send(err));
});

// cards
//test works
projectTrackerRouter.post('/:projectid/create/tracker-card', (req, res) => {
    const projectid = req.params.projectid;
    const { cardName, cardData, cardOrderId, listid } = req.body;
    const db = getDb();
    db.create_tracker_card([ projectid, cardName, cardData, cardOrderId, listid ])
        .then(card => res.send(card))
        .catch(err => res.status(500).send(err));
});
//test works
projectTrackerRouter.get('/:projectid/tracker-cards', (req, res) => {
    const projectid = req.params.projectid;
    const db = getDb();
    db.find_tracker_cards([ projectid ])
        .then(cards => res.send(cards))
        .catch(err => res.status(500).send(err));
});

//get all cards on one list
projectTrackerRouter.get('/:projectid/tracker-cards/:listid', (req, res) => {
    const projectid = req.params.projectid;
    const listid = req.params.listid;
    const db = getDb();
    db.find_tracker_cards([ projectid, listid ])
        .then(cards => res.send(cards))
        .catch(err => res.status(500).send(err));
});


//test works
projectTrackerRouter.get('/:projectid/tracker-card/:cardid', (req, res) => {
    const projectid = req.params.projectid;
    const cardid = req.params.cardid;
    const db = getDb();
    db.find_tracker_card([ projectid, cardid ])
        .then(card => res.send(card))
        .catch(err => res.status(500).send(err));
});
//test works
projectTrackerRouter.put('/:projectid/update/tracker-card/:cardid', (req, res) => {
    const projectid = req.params.projectid;
    const cardid = req.params.cardid;
    const { cardName, cardData, cardOrderId, listid } = req.body;
    const db = getDb();
    db.update_tracker_card([ projectid, cardid, cardName, cardData, cardOrderId, listid ])
        .then(promise => res.send())
        .catch(err => res.status(500).send(err));
});
//test works
projectTrackerRouter.delete('/:projectid/delete/tracker-card/:cardid', (req, res) => {
    const projectid = req.params.projectid;
    const cardid = req.params.cardid;
    const db = getDb();
    db.delete_tracker_card([ projectid, cardid ])
        .then(promise => res.send())
        .catch(err => res.status(500).send(err));
});

projectTrackerRouter.delete('/:projectid/delete/tracker-card/:listid', (req, res) => {
    const projectid = req.params.projectid;
    const listid = req.params.listid;
    const db = getDb();
    db.delete_tracker_cards([ projectid, listid ])
        .then(promise => res.send())
        .catch(err => res.status(500).send(err));
});

//Landons Gotta be the bomb
projectTrackerRouter.delete('/:projectid/delete/tracker-list/:listid', (req, res) => {
    const listid = req.params.listid;
    const projectid = req.params.projectid;
    const db = getDb();

    db.delete_tracker_cards_and_list([ listid, projectid ])
        .then(promise => res.send())
        .catch(err => res.status(500).send(err));
});


module.exports = projectTrackerRouter;
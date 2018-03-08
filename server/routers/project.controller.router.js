const express = require('express');
const getDb = require('../database/bootstrap.database.js');

const projectControllerRouter = express.Router();

projectControllerRouter.post('/:projectid/create/controller', (req, res) => {
    const projectid = req.params.projectid;
    const { controllerName, whenData, doData, requireData } = req.body;
    const db = getDb();
    db.create_project_controller([ projectid, controllerName, whenData, doData, requireData ])
        .then(controller => res.send(controller))
        .catch(err => res.status(500).send(err));
});

// get all
projectControllerRouter.get('/:projectid/controllers', (req, res) => {
    const projectid = req.params.projectid;
    const db = getDb();
    db.find_project_controllers([ projectid ])
        .then(controllers => res.send(controllers))
        .catch(err => res.status(500).send(err));
});

// get one
projectControllerRouter.get('/:projectid/controller/:controllerid', (req, res) => {
    const projectid = req.params.projectid;
    const controllerid = req.params.controllerid;
    const db = getDb();
    db.find_project_controller([ projectid, controllerid ])
        .then(controller => res.send(controller))
        .catch(err => res.status(500).send(err));
});

projectControllerRouter.put('/:projectid/update/controller/:controllerid', (req, res) => {
    const projectid = req.params.projectid;
    const controllerid = req.params.controllerid;
    const { controllerName, whenData, doData, requireData } = req.body;
    const db = getDb();
    db.update_project_controller([ projectid, controllerid, controllerName, whenData, doData, requireData ])
        .then(promise => res.send())
        .catch(err => res.status(500).send(err));
});

projectControllerRouter.delete('/:projectid/delete/controller/:controllerid', (req, res) => {
    const projectid = req.params.projectid;
    const controllerid = req.params.controllerid;
    const db = getDb();
    db.delete_project_controller([ projectid, controllerid ])
        .then(promise => res.send())
        .catch(err => res.status(500).send(err));
});

module.exports = projectControllerRouter;

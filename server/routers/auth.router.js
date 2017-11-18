const express = require('express');
const getDb = require('../database/bootstrap.database');
const passport = require('../auth/local.auth');

const authRouter = express.Router();

authRouter.post('/register', (req, res) => {
    const db = getDb();
    const { firstName, lastName, email, password, username } = req.body;
    db.find_user_by_email([email])
        .then( user => {
            if (user) {
                console.error('There is already an existing account using that email address.');
                return res.send({message: 'There is already an existing account using that email address.'});
            }
            else {
                db.find_user_by_username([username])
                    .then( user => {
                        if (user) {
                            console.error('That username already exists.');
                            return res.send({message: 'That username already exists.'});
                        }
                        else {
                            db.register_user([firstName, lastName, email, password, username])
                                .then( () => res.status(200).send())
                                .catch( err => res.send(err));
                        }
                    })
                    .catch(err => {
                        console.error('Error registering user.');
                        res.send(err);
                    });
            }
        })
});

authRouter.post('/login', passport.authenticate('login'), (req, res) => {
    res.send(req.user);
});

// authRouter.post('/logout');

module.exports = authRouter;
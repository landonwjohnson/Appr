const passport = require('passport');
const Strategy = require('passport-local'.Strategy);
//const getDb = require('../database/bootstrap.database');

passport.use( /* Login Auth Strategy */ );
passport.use( /* Logout Auth Strategy */ );

passport.serializeUser(( user, done ) => {
    return done(null, user.id);
});

passport.deserializeUser(( user, done ) => {
    //const db = getDb();
    db.find_user_by_id([user.id])
        .then( user => done(null, user))
        .catch( err => done(err));
});
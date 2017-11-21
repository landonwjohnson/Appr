const passport = require('passport');
const Strategy = require('passport-local').Strategy;
const getDb = require('../database/bootstrap.database');

passport.use('login', new Strategy(
    (username, password, done) => {
        const db = getDb();
         db.find_user_by_username([ username ])
             .then( user => {
                 if (!user[0]) {
                     return done({message: 'That username does not exist.'});
                 }
                 if (user[0].password !== password) {
                     return done({message: 'That password is incorrect.'});
                 }
                 return done(null, user[0]);
             })
             .catch(err => {return done(err)});
    }
));

// passport.use( /* Logout Auth Strategy */ );

passport.serializeUser((user, done) => {
    return done(null, user.id);
});

passport.deserializeUser((user, done) => {
    const db = getDb();
    db.find_user_by_id([ user.id ])
        .then( user => done(null, user[0]))
        .catch( err => done(err));
});

module.exports = passport;

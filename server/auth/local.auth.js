const chalk = require('chalk');
const passport = require('passport');
const Strategy = require('passport-local'.Strategy);
//const getDb = require('../database/bootstrap.database');

passport.use('login', new Strategy(
    (username, password, done) => {
        //const db = getDb();
        db.find_user([username])
            .then( user => {
                if (!user) {
                    console.error('That username does not exist');
                    return done({message: 'That username does not exist.'});
                }
                if (user.password !== password) {
                    console.error('That password is incorrect.');
                    return done({message: 'That password is incorrect.'});
                }
                console.log(chalk.green('Login was successful!'));
                return done(null, user);
            })
            .catch(err => {
                console.error('Error with login.');
                return done(err);
            });
    }
));
passport.use( /* Logout Auth Strategy */ );

passport.serializeUser(( user, done ) => {
    return done(null, user.id);
});

passport.deserializeUser(( user, done ) => {
    //const db = getDb();
    // db.find_user_by_id([user.id])
    //     .then( user => done(null, user))
    //     .catch( err => done(err));
});

module.exports = passport;
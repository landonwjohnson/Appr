const massive = require('massive');
const connectionString = require('./connection.database.js');

let db;
let messageString;

massive(connectionString)
<<<<<<< HEAD
    .then( dbInstance => db = dbInstance ) 
        console.log('initializing db')     
        return dbInstance.appr_init()
    .catch( err => {throw err});
=======
    .then( dbInstance => {
        db = dbInstance;
        messageString = 'Connection to the database was successful.'
    })
    .catch( err => {
        throw err
    });
>>>>>>> e70054ab6265941888701baa706eea9ca5e46d9a

function getDb() {
    if (!db) {
        messageString = 'We haven\'t connected to the database yet.';
        console.error(messageString);
        return messageString;
    }
    else {
        return db;
    }
}

module.exports = getDb;

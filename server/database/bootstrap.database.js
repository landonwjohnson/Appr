const massive = require('massive');
//const connectionString = require('./connection.database.js');

let db;

massive(connectionString)
    .then( dbInstance => db = dbInstance )
    .catch( err => {throw err});

function getDb() {
    if (!db) {
        console.error('We haven\'t connected to the database yet!');
    }
    return db;
}
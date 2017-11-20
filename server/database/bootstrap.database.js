const massive = require('massive');
const connectionString = require('./connection.database.js');

let db;

massive(connectionString)
    .then( dbInstance => db = dbInstance ) 
        console.log('initializing db')     
        return dbInstance.appr_init()
    .catch( err => {throw err});

function getDb() {
    if (!db) {
        console.error('We haven\'t connected to the database yet!');
    }
    return db;
}

module.exports = getDb;

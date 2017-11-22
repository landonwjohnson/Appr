const { username, password, name } = require('../config/keys.config');

const dbUsername = process.env.DB_USERNAME || username;
const dbPassword = process.env.DB_PASSWORD || password;
const dbName = process.env.DB_NAME || name;

const connectionString = `postgres://${dbUsername}:${dbPassword}@ec2-54-197-224-52.compute-1.amazonaws.com:5432/${dbName}?ssl=true`;

module.exports = connectionString;

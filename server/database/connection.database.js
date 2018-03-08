const { username, password, name } = require('../config/keys.config');

const dbUsername = process.env.DB_USERNAME || username;
const dbPassword = process.env.DB_PASSWORD || password;
const dbName = process.env.DB_NAME || name;

const connectionString = 'postgres://rpejwvmsgzztpf:df3f70368fb6da3266931cb012bff11e05ffa3d97129b1b0ba65905da1d7a8ab@ec2-54-221-207-184.compute-1.amazonaws.com:5432/db23058ggvu8ca?ssl=true'
// const connectionString = `postgres://${dbUsername}:${dbPassword}@ec2-54-221-207-184.compute-1.amazonaws.com/${dbName}?ssl=true`;

module.exports = connectionString;



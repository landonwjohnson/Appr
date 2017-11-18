const chalk = require('chalk');
const express = require('express');
const addMiddlewareTo = require('./middleware/decorate.middleware');

const app = express();

addMiddlewareTo(app);

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(chalk.green(`Server is listening on port ${chalk.cyan(port)}.`));
});
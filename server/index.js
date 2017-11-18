const chalk = require('chalk');
const express = require('express');

const app = express();

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(chalk.green(`Server is listening on port ${chalk.cyan(port)}.`));
});
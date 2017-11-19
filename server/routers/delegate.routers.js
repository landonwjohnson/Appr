const express = require('express');
const authRouter = require('./auth.router');
// const accountRouter = require('./account.router');
// const dashboardRouter = require('./dashboard.router');
// const groupRouter = require('./group.router');
// const projectRouter = require('./project.router');

function delegateRoutesFor(app) {
    app.use('/api/auth', authRouter);
    // app.use('/api/account', accountRouter);
    // app.use('/api/dashboard', dashboardRouter);
    // app.use('/api/group', groupRouter);
    // app.use('/api/project', projectRouter);

    // app.all('*', (req, res) => {});
    
    return app;
}

module.exports = delegateRoutesFor;

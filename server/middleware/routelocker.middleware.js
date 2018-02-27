function routeLocker(req, res, next) {
    // const sessionid = req.session.passport.user
    // const userid = req.params.userid;
    // sessionid === userid ? next() : res.status(401);
    // if (sessionid === userid){
        next();
    // } else {
    //     res.status(401).send();
    //     console.log('test failed');
    // }
}

module.exports = routeLocker;
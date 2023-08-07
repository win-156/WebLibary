class HistoryControllers {
    HistoryGet(req, res) {
        const url_auth = {pass: req.session.user.password}
        res.render('History', { layout: 'Client_Layout.hbs' ,URL_AUTH: url_auth});

    }
}

module.exports = new HistoryControllers;
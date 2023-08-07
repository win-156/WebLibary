class MyInterestingBook {
    MyInterestingBookGet(req, res) {
        const url_auth = {pass: req.session.user.password}
        res.render('MyInterestingBook', { layout: 'Client_Layout.hbs', URL_AUTH: url_auth});

    }
}

module.exports = new MyInterestingBook;
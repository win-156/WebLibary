
class  AccountUpdateControllers{
    AccountUpdateGet(req, res) {
        const url_auth = {pass: req.session.user.password}
        res.render('AccountUpdate', { layout: 'Client_Layout.hbs', URL_AUTH: url_auth});
    }
}

module.exports = new AccountUpdateControllers;
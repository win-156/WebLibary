
class ChangePasswordUserControllers {
    ChangePasswordUserGet(req, res) {
        const url_auth = {pass: req.session.user.password}
        res.render('ChangePasswordUser', { layout: 'Client_Layout.hbs', URL_AUTH:url_auth });
    }
}

module.exports = new ChangePasswordUserControllers;
class AdminChangePasswordControllers {
    AdminChangePasswordGet(req, res) {
        res.render('AdminChangePassword', { layout: 'Admin_Layout.hbs' });
    }
}

module.exports = new AdminChangePasswordControllers;
class AdminViewAdminProfileControllers {
    AdminViewAdminProfileGet(req, res) {
        res.render('AdminViewAdminProfile', { layout: 'Admin_Layout.hbs' });
    }
}

module.exports = new AdminViewAdminProfileControllers;
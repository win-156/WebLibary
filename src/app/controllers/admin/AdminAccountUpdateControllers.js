class AdminAccountUpdateControllers {
    AdminAccountUpdateGet(req, res) {
        res.render('AdminAccountUpdate', { layout: 'Admin_Layout.hbs' });
    }
}
module.exports = new AdminAccountUpdateControllers;
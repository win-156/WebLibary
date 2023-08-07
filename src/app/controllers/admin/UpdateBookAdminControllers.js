class UpdateBookAdminControllers {
    UpdateBookAdminGet(req, res) {
        res.render('UpdateBookAdmin', { layout: 'Admin_Layout.hbs' });
    }
}

module.exports = new UpdateBookAdminControllers;
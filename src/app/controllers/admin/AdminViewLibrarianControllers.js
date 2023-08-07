class AdminViewLibrarianControllers {
    AdminViewLibrarianGet(req, res) {
        res.render('AdminViewLibrarian', { layout: 'Admin_Layout.hbs' });
    }
}
module.exports = new AdminViewLibrarianControllers;

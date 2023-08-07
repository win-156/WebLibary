
class AdminViewProfileLibrarianControllers {
    AdminViewProfileLibrarianGet(req, res) {
        res.render('AdminViewProfileLibrarian', { layout: 'Admin_Layout.hbs' });
    }
}

module.exports = new AdminViewProfileLibrarianControllers;
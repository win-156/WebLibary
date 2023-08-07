
class AdminViewBookControllers {
    AdminViewBookGet(req, res) {
        res.render('AdminViewBook', { layout: 'Admin_Layout.hbs' });
    }
}

module.exports = new AdminViewBookControllers;
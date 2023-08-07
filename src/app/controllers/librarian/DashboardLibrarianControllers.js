
class DashboardLibrarianControllers {
    DashboardLibrarianGet(req, res) {
        res.render('DashboardLibrarian', { layout: 'Librarian_Layout.hbs' });

    }
}

module.exports = new DashboardLibrarianControllers;
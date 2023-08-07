
class ChangePassWordLibrarianControllers {
    ChangePassWordLibrarianGet(req, res) {
        res.render('ChangePassWordLibrarian', { layout: 'Librarian_Layout.hbs' });
    }
}

module.exports = new ChangePassWordLibrarianControllers;

class UpdateBookLibrarianControllers {
    UpdateBookLibrarianGet(req, res) {
        res.render('UpdateBookLibrarian', { layout: 'Librarian_Layout.hbs' });

    }
}

module.exports = new UpdateBookLibrarianControllers;
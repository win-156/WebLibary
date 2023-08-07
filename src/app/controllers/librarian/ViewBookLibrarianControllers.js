

class ViewBookLibrarianControllers {
    ViewBookLibrarianGet(req, res) {
        res.render('ViewBookLibrarian', { layout: 'Librarian_Layout.hbs' });
    }
}

module.exports = new ViewBookLibrarianControllers;
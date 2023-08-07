
class ViewBookInforLibrarianControllers {
    ViewBookInforLibrarianGet(req, res) {
        res.render('ViewBookInforLibrarian', { layout: 'Librarian_Layout.hbs' });

    }
}

module.exports = new ViewBookInforLibrarianControllers;
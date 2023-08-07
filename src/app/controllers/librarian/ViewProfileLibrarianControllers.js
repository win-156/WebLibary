class ViewProfileLibrarianControllers {
    ViewProfileLibrarianGet(req, res) {
        res.render('ViewProfileLibrarian', { layout: 'Librarian_Layout.hbs' });

    }
}

module.exports = new ViewProfileLibrarianControllers;
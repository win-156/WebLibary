
class Add_book_librarianControllers {
    Add_book_librarianGet(req, res) {
        res.render('Add_book_librarian', { layout: 'Librarian_Layout.hbs' });

    }
}

module.exports = new Add_book_librarianControllers;
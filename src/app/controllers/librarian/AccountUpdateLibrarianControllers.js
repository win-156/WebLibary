
class AccountUpdateLibrarianControllers {
    AccountUpdateLibrarianGet(req, res) {
        res.render('AccountUpdateLibrarian', { layout: 'Librarian_Layout.hbs' });

    }
}

module.exports = new AccountUpdateLibrarianControllers ;
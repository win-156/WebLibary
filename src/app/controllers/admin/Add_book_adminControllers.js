class Add_book_adminControllers {
    Add_book_adminGet(req, res) {
        res.render('Add_book_admin', { layout: 'Admin_Layout.hbs' });
    }
}

module.exports = new Add_book_adminControllers;
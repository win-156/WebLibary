
class ViewClientControllers {
    ViewClientGet(req, res) {
        res.render('ViewClient', { layout: 'Librarian_Layout.hbs' });
    }
}

module.exports = new ViewClientControllers;
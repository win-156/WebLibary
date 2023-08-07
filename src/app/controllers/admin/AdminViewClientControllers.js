class  AdminViewClientControllers{
    AdminViewClientGet(req, res) {
        res.render('AdminViewClient', { layout: 'Admin_Layout.hbs' });
    }
}

module.exports = new AdminViewClientControllers;
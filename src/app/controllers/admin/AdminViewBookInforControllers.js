class AdminViewBookInforControllers {
    AdminViewBookInforGet(req, res) {
        res.render('AdminViewBookInfor', { layout: 'Admin_Layout.hbs' });
    }
}

module.exports = new AdminViewBookInforControllers;
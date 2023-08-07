class Statistic_AdminControllers {
    Statistic_AdminGet(req, res) {
        res.render('Statistic_Admin', { layout: 'Admin_Layout.hbs' });
    }
}

module.exports = new Statistic_AdminControllers;
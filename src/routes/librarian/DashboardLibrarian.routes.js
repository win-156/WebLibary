const express = require('express');
const router = express.Router();
const dashboardLibrarianControllers = require('../../app/controllers/librarian/DashboardLibrarianControllers')

router.get('/',dashboardLibrarianControllers.DashboardLibrarianGet)


module.exports = router
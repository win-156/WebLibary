const express = require('express');
const router = express.Router();
const statistic_AdminControllers = require('../../app/controllers/admin/Statistic_AdminControllers')

router.get('/',statistic_AdminControllers.Statistic_AdminGet)


module.exports = router
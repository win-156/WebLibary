const express = require('express');
const router = express.Router();
const adminViewLibrarianControllers = require('../../app/controllers/admin/AdminViewLibrarianControllers')

router.get('/',adminViewLibrarianControllers.AdminViewLibrarianGet)
module.exports = router
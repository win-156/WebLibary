const express = require('express');
const router = express.Router();
const updateBookAdminControllers = require('../../app/controllers/admin/UpdateBookAdminControllers')

router.get('/',updateBookAdminControllers.UpdateBookAdminGet)


module.exports = router
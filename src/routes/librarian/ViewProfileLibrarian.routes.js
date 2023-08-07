const express = require('express');
const router = express.Router();
const viewProfileLibrarianControllers = require('../../app/controllers/librarian/ViewProfileLibrarianControllers')

router.get('/',viewProfileLibrarianControllers.ViewProfileLibrarianGet)


module.exports = router
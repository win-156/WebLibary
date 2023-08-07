const express = require('express');
const router = express.Router();
const viewBookLibrarianControllers  = require('../../app/controllers/librarian/ViewBookLibrarianControllers')

router.get('/', viewBookLibrarianControllers.ViewBookLibrarianGet)


module.exports = router
const express = require('express');
const router = express.Router();
const updateBookLibrarianControllers  = require('../../app/controllers/librarian/UpdateBookLibrarianControllers')

router.get('/',updateBookLibrarianControllers.UpdateBookLibrarianGet)


module.exports = router
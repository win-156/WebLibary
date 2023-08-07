const express = require('express');
const router = express.Router();
const viewBookInforLibrarianControllers = require('../../app/controllers/librarian/ViewBookInforLibrarianControllers')

router.get('/',viewBookInforLibrarianControllers.ViewBookInforLibrarianGet)


module.exports = router
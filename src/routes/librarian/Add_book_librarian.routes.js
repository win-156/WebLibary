const express = require('express');
const router = express.Router();
const add_book_librarianControllers = require('../../app/controllers/librarian/Add_book_librarianControllers')

router.get('/',add_book_librarianControllers.Add_book_librarianGet)


module.exports = router


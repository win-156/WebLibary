const express = require('express');
const router = express.Router();
const add_book_adminControllers = require('../../app/controllers/admin/Add_book_adminControllers')

router.get('/', add_book_adminControllers.Add_book_adminGet)


module.exports = router
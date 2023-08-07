const express = require('express');
const router = express.Router();
const changePassWordLibrarian = require('../../app/controllers/librarian/ChangePassWordLibrarianControllers')

router.get('/',changePassWordLibrarian.ChangePassWordLibrarianGet)


module.exports = router
const express = require('express');
const router = express.Router();
const accountUpdateLibrarianControllers = require('../../app/controllers/librarian/AccountUpdateLibrarianControllers')

router.get('/', accountUpdateLibrarianControllers.AccountUpdateLibrarianGet)


module.exports = router
const express = require('express');
const router = express.Router();
const viewClientControllers  = require('../../app/controllers/librarian/ViewClientControllers')

router.get('/', viewClientControllers.ViewClientGet)


module.exports = router
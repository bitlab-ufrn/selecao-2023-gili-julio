const express = require('express');
const router = express.Router();

const filterController = require('../src/controllers/filterController');

router.get('/', filterController.home);
router.post('/', filterController.filter);

module.exports = router;

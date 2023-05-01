const express = require('express');
const router = express.Router();

const controller = require('../controllers/convertController');

router.route('/').post(controller.convertDocxToPDF);

module.exports = router;
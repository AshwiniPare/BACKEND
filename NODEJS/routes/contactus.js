const express = require('express');

const router = express.Router();

const contactUsController = require('../controllers/contactus');

router.get('/', contactUsController.getContactUs);

router.post('/', contactUsController.postContactUs);

module.exports = router;
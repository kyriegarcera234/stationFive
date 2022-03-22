const express = require('express');
const {message} = require('../controllers/message_controller');
const router = express.Router();

router
    .post('/message', message);

module.exports = router;
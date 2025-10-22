const express = require('express');
const { login } = require('../controllers/authController');
const router = express.Router();
router.post('/signin', login);

module.exports = router;

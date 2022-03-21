var express = require('express');
const LoginController = require('../controllers/loginController');
var router = express.Router();

router.post('/', LoginController.login);

module.exports = router;
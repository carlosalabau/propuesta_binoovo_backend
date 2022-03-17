var express = require('express');
const LoginController = require('../controllers/loginController');
var router = express.Router();

/* GET users listing. */
router.post('/', LoginController.login);

module.exports = router;
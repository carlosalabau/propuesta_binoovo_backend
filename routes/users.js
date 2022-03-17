var express = require('express');
const UsersController = require('../controllers/usersController');
var router = express.Router();

/* GET users listing. */
router.get('/', UsersController.getUsers);
router.get('/:id', UsersController.whoIam);
router.post('/create', UsersController.createUser);
router.post('/update/:id', UsersController.editUser);
router.delete('/delete/:id', UsersController.deleteUser);

module.exports = router;

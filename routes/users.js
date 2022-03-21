var express = require('express');
const UsersController = require('../controllers/usersController');
var router = express.Router();
const { autenthication, hasPermission } = require('../middleware/auth')

router.get('/all/:id', autenthication, hasPermission, UsersController.getUsers);
router.get('/:id', autenthication, UsersController.whoIam);
router.post('/create',autenthication, hasPermission, UsersController.createUser);
router.post('/update/:id', autenthication, hasPermission, UsersController.editUser);
router.delete('/delete/:id', autenthication, hasPermission, UsersController.deleteUser);

module.exports = router;

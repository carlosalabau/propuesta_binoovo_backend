var express = require('express');
var router = express.Router();
const TaskController = require('../controllers/tasksController');
const {autenthication, hasPermission} = require('../middleware/auth');

/* GET home page. */
router.get('/', autenthication, hasPermission, TaskController.getAllTasks);
router.get('/:idUser', autenthication, TaskController.getTasksByUser);
router.put('/assign/:id', autenthication, hasPermission, TaskController.assignTask);
router.post('/create', autenthication, hasPermission, TaskController.createTask);
router.post('/update/:id', autenthication, hasPermission, TaskController.editTask);
router.delete('/delete/:id', autenthication, hasPermission, TaskController.deleteTask);

module.exports = router;

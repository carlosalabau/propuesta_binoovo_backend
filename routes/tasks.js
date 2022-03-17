var express = require('express');
var router = express.Router();
const TaskController = require('../controllers/tasksController')

/* GET home page. */
router.get('/', TaskController.getAllTasks);
router.get('/:idUser', TaskController.getTasksByUser);
router.put('/assign/:id', TaskController.assignTask);
router.post('/create', TaskController.createTask);
router.post('/update/:id', TaskController.editTask);
router.delete('/delete/:id', TaskController.deleteTask);

module.exports = router;

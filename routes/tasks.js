var express = require('express');
var router = express.Router();
const TaskController = require('../controllers/tasksController')

/* GET home page. */
router.get('/', TaskController.getAllTasks);

module.exports = router;

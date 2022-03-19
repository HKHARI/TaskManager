const router = require('express').Router();
const TaskController = require('../controller/taskController');


router.get('/', TaskController.getAllTasks);
router.get('/:id', TaskController.getTask);
router.post('/', TaskController.addTask);
router.patch('/:id', TaskController.updateTask);
router.delete('/:id', TaskController.deleteTask);

module.exports = router;
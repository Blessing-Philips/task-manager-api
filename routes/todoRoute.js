const express = require('express');

const { getTask, addTask, updateTask, deleteTask } = require('../controllers/todoController');

const router = express.Router();

router.get('/gettask', getTask);
router.post('/addtask', addTask);
router.put('/updatetask/:id', updateTask);
router.delete('/deletetask/:id', deleteTask);

module.exports = router;
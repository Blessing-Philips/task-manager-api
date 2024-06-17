const express = require('express');

const Todo = require('../models/TodoModel');

const getTask = (async (req, res) => {
    try {
        let getTasks = await Todo.find().sort({ createdAt: -1 });
        res.status(200).json({ Tasks: getTasks });
       // res.render('app', { Tasks: getTasks })
        // window.getTask = getTasks;
    } catch (err) {
        res.status(400).send({ error: error.message })
    }

});

const addTask = (async (req, res) => {
    try {
        let existingTask = await Todo.findOne({ task: req.body.task });

        if (!existingTask) {
            let tasks = new Todo({
                task: req.body.task
            });
            let addedTask = await tasks.save();
            res.status(200).send("Task added!");
            // res.redirect('/')
        } else {
            res.status(400).send("Task already exists")
        };

    } catch (err) {
        res.status(400).json({ error: err.message })
    }
});

const updateTask = (async (req, res) => {
    try {
        const { id } = req.params
        const task = await Todo.findByIdAndUpdate(id, { new: true, runValidators: true })
        res.status(200).send("task updated successfully")
    } catch (err) {
        res.status(400).send("task not found")
    }
});

const deleteTask = (async (req, res) => {
    try {
        const { id } = req.params
        const task = await Todo.findByIdAndDelete(id)
        res.status(200).send("Task deleted successfully")
    } catch (err) {
        res.status(400).send("Task not found")
    }

})

module.exports = {
    getTask,
    addTask,
    updateTask,
    deleteTask

};
const express = require('express');

const app = express.Router();
const Task = require('./task.schema.js');
const Project = require('../projects/project.schema.js');
// feedback: fw18_0042 - What is the name of this route? what it does?
app.post('/', async (req, res) => {
    try {
        // feedback: fw18_0042 - We can update the tasks in one go.
        let item = await Task.create(req.body);
        let findProject = await Project.findById(req.body.projectId);
        let tasks = [...findProject.task, { "taskId": item._id }];
        let updateProject = await Project.findByIdAndUpdate(req.body.projectId, { "task": tasks })
        res.send(item);
    }
    catch (e) {
        console.log(e)
    }
})

app.get('/', async (req, res) => {
    let Tasks = await Task.find({ "projectId": req.params.projectId });
    res.send(Tasks);
})

app.get('/:id', async (req, res) => {
    let id = req.params.id;
    let Task = await Task.findById(id);
    res.send(Task);
})

app.delete('/:id', async (req, res) => {
    try {
         // feedback: fw18_0042 - We can delete the task in one go.
        let id = req.params.id;
        let task = await Task.findOne({ 'id': id }); // no need for this
        let deleteTask = await Task.findByIdAndDelete(id);
        res.send(deleteTask);
    }
    catch (e) {
        console.log(e)
    }
})

app.patch('/:id', async (req, res) => {
    try {
        let id = req.params.id;
        let item = await Task.findByIdAndUpdate(id, req.body)
        res.send(item);
    }
    catch (e) {
        console.log(e)
    }
})

module.exports = app;

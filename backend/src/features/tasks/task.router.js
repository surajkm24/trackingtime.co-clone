const express = require('express');

const app = express.Router();
const Task = require('./task.schema.js');
const Project = require('../projects/project.schema.js');
app.post('/', async (req, res) => {
    let item = await Task.create(req.body);
    let findProject = await Project.findById(req.body.projectId);
    let tasks = [...findProject.task, { "taskId": item._id }];
    let updateProject = await Project.findByIdAndUpdate(req.body.projectId, { "task": tasks })
    res.send(item);
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
    let id = req.params.id;
    let deleteTask = await Task.findByIdAndDelete(id);
    let findProject = await Project.findById(req.body.projectId);
    let tasks = findProject.task.filter(ele => ele.taskId.toString() !== id);
    let updateProject = await Project.findByIdAndUpdate(req.body.projectId, { "task": tasks })
    res.send(deleteTask);
})

app.patch('/:id', async (req, res) => {
    let id = req.params.id;
    let item = await Task.findByIdAndUpdate(id, req.body)
    res.send(item);
})

module.exports = app;
const express = require('express');
const Project = require('./project.schema.js')

const app = express.Router();

app.post('/', async (req, res) => {

    let project = await Project.find({
        "projectName": req.body.projectName,
        "userId": req.body.userId
    });

    if (project.length) {
        res.status(404).send('Project already exists')
    }
    else {
        let item = await Project.create(req.body);
        res.send(item);
    }
})

app.get('/', async (req, res) => {
    let projects = await Project.find({ 'userId': req.userId });
    res.send(projects);
})

app.get('/:id', async (req, res) => {
    let id = req.params.id;
    let project = await Project.findById(id).populate({ path:"task",populate: { path: "taskId" } });
    res.send(project);
})

app.delete('/:id', async (req, res) => {
    let id = req.params.id;
    let deleteProject = await Project.findByIdAndDelete(id);
    res.send(deleteProject);
})

app.patch('/:id', async (req, res) => {
    let id = req.params.id;
    let item = await Project.findByIdAndUpdate(id, req.body)
    res.send(item);
})

module.exports = app;
const express = require('express');
const Project = require('./project.schema.js')

const app = express.Router();

app.post('/', async (req, res) => {
    try {
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
    }
    catch (e) {
        console.log(e)
    }


})

app.get('/', async (req, res) => {
    try {
        let projects = await Project.find({ 'userId': req.userId });
        res.send(projects);
    }
    catch (e) {
        console.log(e)
    }
})

app.get('/:id', async (req, res) => {
    try {
        let id = req.params.id;
        let project = await Project.findById(id).populate({ path: "task", populate: { path: "taskId" } });
        res.send(project);
    }
    catch (e) {
        console.log(e)
    }
})

app.delete('/:id', async (req, res) => {
    try {
        let id = req.params.id;
        let deleteProject = await Project.findByIdAndDelete(id);
        res.send(deleteProject);
    }
    catch (e) {
        console.log(e)
    }
})

app.patch('/:id', async (req, res) => {
    try {
        let id = req.params.id;
        let item = await Project.findByIdAndUpdate(id, req.body);
        res.send(item);
    }
    catch (e) {
        console.log(e)
    }
})

module.exports = app;
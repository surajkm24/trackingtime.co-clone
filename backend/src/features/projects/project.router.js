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
    catch (error) {
        res.send({ error })
    }


})

app.get('/', async (req, res) => {
    try {
        let projects = await Project.find({ 'userId': req.userId });
        res.send(projects);
    }
    catch (error) {
        res.send({ error })
    }
})

app.get('/:id', async (req, res) => {
    try {
        let id = req.params.id;
        let project = await Project.findById(id);
        res.send(project);
    }
    catch (error) {
        res.send({ error })
    }
})

app.delete('/:id', async (req, res) => {
    try {
        let id = req.params.id;
        let deleteProject = await Project.findByIdAndDelete(id);
        res.send(deleteProject);
    }
    catch (error) {
        res.send({ error })
    }
})

app.patch('/:id', async (req, res) => {
    try {
        let id = req.params.id;
        let item = await Project.findByIdAndUpdate(id, req.body, { new: true });
        res.send(item);
    }
    catch (error) {
        res.send({ error })
    }
})

module.exports = app;

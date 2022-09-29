const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "user" },
    projectName: { type: String, required: true },
    dueDate: { type: Number, required: true, min: 1, max: 31 },
    security: { type: String },
    client: { type: String },
    estimatedTime: { type: Number, required: true },
    task: [{ taskId: { type: mongoose.Schema.Types.ObjectId, ref: 'task' } }],
    duration: { type: Number, default: 0 }
});

const Project = mongoose.model('project', projectSchema);

module.exports = Project;
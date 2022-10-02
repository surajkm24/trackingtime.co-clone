const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    projectId: { type: mongoose.Schema.Types.ObjectId, ref: "project" },
    taskName: { type: String, required: true },
    description: { type: String },
    duration: { type: Number, default: 0 },
    status: { type: Boolean, default: false },
    estimatedTime: { type: Number }
});

const Task = mongoose.model('task', taskSchema);

module.exports = Task;
const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "user" },
    projectName: { type: String, required: true },
    dueDate: { type: String, default: "No Due Date" },
    security: { type: String },
    client: { type: String, default: "No Client" },
    estimatedTime: { type: Number, required: true },
    duration: { type: Number, default: 0 }
});
// feedback: fw18_0042 - Model name should be always in capital ex: Project
const Project = mongoose.model('project', projectSchema);

module.exports = Project;

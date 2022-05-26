const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: String,
    content: String,
    completed: Boolean
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
const mongoose = require('mongoose');
const ObjectId = mongoose.SchemaTypes.ObjectId;

const taskSchema = new mongoose.Schema({
    name: String,
    description: String,
    state: {
        type: String,
        default: 'new'
    },
    idUser: {
        type: ObjectId,
        ref: 'users'
    }
})

const TaskModel = new mongoose.model('tasks', taskSchema);

module.exports = TaskModel
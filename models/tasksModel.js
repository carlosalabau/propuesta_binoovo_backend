import mongoose from 'mongoose';
const ObjectId = mongoose.SchemaTypes.ObjectId;

const taskSchema = new mongoose.Schema({
    name: String,
    description: String,
    state: String,
    idUser: {
        type: ObjectId,
        ref: 'users'
    }
})

const TaskModel = new mongoose.model('tasks', taskSchema);

module.exports = taskModel
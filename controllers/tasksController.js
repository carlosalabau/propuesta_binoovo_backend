const TaskModel = require('../models/tasksModel');

const TaskController = {
    async getAllTasks(req, res) {
        try {
            const tasks = await TaskModel.find();
            res.status(200).json(tasks)
        } catch (error) {
            res.status(500).send('Ha ocurrido un error', error)
        }
    },

    async getTasksByUser(req, res) {
        try {
            const _idUser = req.params.idUser;
            const tasksByUser = await TaskModel.find({idUser: _idUser});
            res.status(200).json(tasksByUser);
        } catch (error) {
            res.status(500).send('Ha ocurrido un error', error)
        }
    },

    async assignTask(req, res) {
        try {
            const id = req.params.id;
            const task = req.body;
            const taskUpdate = await TaskModel.findOneAndUpdate({_id: id}, task);
            res.status(200).json(taskUpdate);
        } catch (error) {
            res.status(500).send('Ha ocurrido un error', error)
        }
    },

    async createTask(req, res) {
        try {
            const task = req.body;
            const newTask = await TaskModel.create(task);
            res.status(200).json(newTask)
        } catch (error) {
            res.status(500).send('Ha ocurrido un error', error)
        }
    },

    async editTask(req, res) {
        try {
            const id = req.params.id;
            const task = req.body;
            const updateTask = await TaskModel.findOneAndUpdate({_id: id}, task);
            res.status(200).json(updateTask)
        } catch (error) {
            res.status(500).send('Ha ocurrido un error', error)
        }
    },

    async deleteTask(req, res) {
        try {
            const id = req.params.id;
            await TaskModel.deleteOneAndDelete({_id: id})
            res.status(200).send('Tarea eliminada con exito')
        } catch (error) {
            res.status(500).send('Ha ocurrido un error', error)
        }
    }
}

module.exports = TaskController
const UserModel = require('../models/usersModel');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const UsersController = {
    async getUsers(req, res) {
        try {
            const users = await UserModel.find();
            res.status(200).json(users)
        } catch (error) {
            res.status(500).send('Ha ocurrido un error', error)
        }
    },

    async whoIam(req, res) {
        try {
            const id = req.params.id
            const user = await UserModel.findOne({_id: id})
            res.status(200).json(user)
        } catch (error) {
            res.status(500).send('Ha ocurrido un error', error)
        }
    },

    async createUser(req, res) {
        try {
            const user = req.body;
            user.password = await bcrypt.hash(user.password, saltRounds);
            const newUser = await UserModel.create(user);
            res.status(200).json(newUser)
        } catch (error) {
            res.status(500).send('Ha ocurrido un error', error)
        }
    },

    async editUser(req, res) {  
        try {   
            const user = req.body;
            const id = req.params.id;
            if(user.password){
                delete user.password
            }
            const updateUser = await UserModel.findOneAndUpdate({_id: id}, user);
            res.status(200).json(updateUser)
        } catch (error) {
            res.status(500).send('Ha ocurrido un error', error)
        }
    },

    async deleteUser(req, res) {
        try {
            const id = req.params.id;
            await UserModel.deleteOne({_id: id})
            res.status(200).send('Usuario eliminado con exito')
        } catch (error) {
            res.status(500).send('Ha ocurrido un error', error)
        }
    }
}

module.exports = UsersController
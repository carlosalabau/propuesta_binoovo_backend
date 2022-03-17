var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const UsersModel = require('../models/usersModel');
const LoginController = {
    async login(req, res){
        try {
            const user = req.body;
            const existUser = await UsersModel.findOne({email: user.email});
            if(!existUser) return res.status(401).json('Email o password incorrectos')
            const isMatch = await bcrypt.compare(user.password, existUser.password);
            if(!isMatch) return res.status(401).json('Email o password incorrectos')
            const token = jwt.sign({_id: user.id}, 'pepitopalotes', {expiresIn: '24h'});
            res.status(200).json(token)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = LoginController
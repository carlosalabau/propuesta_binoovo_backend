var jwt = require('jsonwebtoken');
const UserModel = require('../models/usersModel');

const autenthication = async (req,res,next) => {
    try {
        const token = req.headers.authorization;
        const tok = token.slice(7);
        const decoded = jwt.verify(tok, 'pepitopalotes')
        console.log(decoded)
        next()
    } catch (error) {
        res.status(500).json(error)
    }
}

const hasPermission = async (req, res, next) => {
    try {
        const id = req.params.id || req.params.idUser;
        const admin = 'admin';
        const user = await UserModel.findOne({_id: id});
        if(user.rol != admin) return res.status(401).json('No tienes permisos para realizar esta accion')
        next()
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports =  {autenthication, hasPermission}
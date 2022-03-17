const mongoose = require('mongoose')
const { Schema } = mongoose;

const userSchema = new Schema({
    name:  String,
    lastName: String,
    rol:  {
        type: String,
        default: 'usuario'
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
  });

const UserModel = new mongoose.model('users', userSchema);

module.exports = UserModel;

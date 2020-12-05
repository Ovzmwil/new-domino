const mongoose = require('../Database/server');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({

    name: {
        type: String,
        require: true
    },

    email: {
       type: String,
        unique: true,
        required: true,
        lowercase: true
    },

    password: {
        type: String,
        required: true,
        select: true,
    },

    pontos: {
        type: Number,
        required: false,
        default: 0
    },

    createdAt: {
        type: Date,
        default: Date.now()
    }

});

UserSchema.pre('save', async function(next) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;

    next();
})

const Usuario = mongoose.model('User', UserSchema);

module.exports = Usuario;
class User{
    constructor(id, username, name){
        this.id = id;
        this.username = username;
        this.name = name;
    }

    getId(){
        return this.id;
    }

    getUsername(){
        return this.username;
    }

    getName(){
        return this.name;
    }
}

// const mongoose = require('../../database/server');
// const bcrypt = require('bcryptjs');

// const UserSchema = new mongoose.Schema({

//     name: {
//         type: String,
//         require: true
//     },

//     email: {
//         type: String,
//         unique: true,
//         required: true,
//         lowercase: true
//     },

//     password: {
//         type: String,
//         required: true,
//         select: true,
//     },

//     passwordResetToken: {
//         type: String,
//         select: false
//     },

//     passwordResetExpires: {
//         type: Date,
//         select: false
//     },

//     createdAt: {
//         type: Date,
//         default: Date.now()
//     }


// });

// UserSchema.pre('save', async function(next) {
//     const hash = await bcrypt.hash(this.password, 10);
//     this.password = hash;

//     next();
// })

// const User = mongoose.model('User', UserSchema);

module.exports = User;

// module.exports = User;
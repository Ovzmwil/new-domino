const User = require('../Models/User');

const DB = {
    "games" : [],
    "users" : [
        new User(1, "jones", "Jones"),
        new User(2, "allan", "Allan"),
        new User(3, "joão", "João"),
        new User(4, "matheus", "Matheus"),
        new User(5, "vinicius", "Vinicius"),
        new User(6, "patrick", "Patrick"),
        new User(7, "lucas", "Lucas"),
        new User(8, "dominando", "Dominando"),
        new User(9, "leandro", "Leandro")
    ]
};
module.exports = DB;
const DB = require('../Database/DB');
const Usuario = require('../Models/Usuario');
const User = require('../Models/User');
const bcrypt = require('bcryptjs');


class CadastroService {
    static async post(data) {
        console.log('Service')
        console.log(data)
        return new Promise(async (resolve, reject) => {

            const {name} = data;
            try {
                
                if( await Usuario.findOne({name}))
                    return reject({user: usuario, success: false, message:'Usuário já existe'})
               
                const user =  await Usuario.create(data);
                console.log(user);
                console.log('Usuario criado com sucesso')
                user.password = undefined;

                // if(user == null){
                //     let nextId = Math.max.apply(Math, db.users.map(u => u.getId())) + 1;
                //     user = new User(nextId, data.username, "123456");
                //     db.users.push(user);
                // }
                return resolve({user: user, success: true, message:'Cadastro Efetuado com sucesso.'});
            } catch (err) {
                console.log(err)
                reject(err.message);
            }
        });
    }
    static async getDataUser(user){
        console.log('Service')
        console.log(user)
        return new Promise(async (resolve, reject) => {
        console.log('Dentro Promisse')
        const id = user._id;
        console.log(id)
        try {
            const user = await Usuario.findById(id);
            return resolve({user: user, success: true, message:'Dados retornado com sucesso'})
        } catch (err) {
            console.log(err)
            return reject({user: undefined, success: false, message:'Erro ao consultar dados!!!'})
        }

    })
    }
}

module.exports = CadastroService;
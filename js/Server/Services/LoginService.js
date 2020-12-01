const User = require('../Models/User');
const Usuario = require('../Models/Usuario');
const bcrypt = require('bcryptjs');

class LoginService {
    static post(data, db) {
        return new Promise(async (resolve, reject) => {
            
            const {name, password} = data;
            console.log({name, password})
            
            try{
                if(!data)
                    reject("Invalid data!");

                //TODO: Load from DB. We can use Knex.
                let user = db.users.find(u => u.username == data.username);


                const usuario = await Usuario.findOne({name}).select('+password')
       
                if(!usuario)
                    return reject({success: false, message:'Usuario não existe'})
                    
                if(!await bcrypt.compare(password, usuario.password))
                    return reject({success: false, message:'Senha incorreta'})

                usuario.password = undefined;

                return resolve(usuario);

                if(user == null){
                    let nextId = Math.max.apply(Math, db.users.map(u => u.getId())) + 1;
                    user = new User(nextId, data.username, "123456");
                    db.users.push(user);
                }

                return resolve(user);
            }catch(err){
                reject(err.message);
            }
        });
    }
}

module.exports = LoginService;
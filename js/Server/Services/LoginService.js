const Usuario = require('../Models/Usuario');
const bcrypt = require('bcryptjs');

class LoginService {
    static post(data, db) {
        return new Promise(async (resolve, reject) => {
            
            const {name, password} = data;
            
            try{
                if(!data)
                    reject("Invalid data!");
                //TODO: Load from DB. We can use Knex.
                let user = db.users.find(u => u.username == data.username);


                const usuario = await Usuario.findOne({name}).select('+password')
       
                if(!usuario){
                    console.log('Usuário não existe!!!');
                    return reject({user: usuario, success: false, message:'Usuario não existe.'})
                }
                if(!await bcrypt.compare(password, usuario.password)){
                    console.log('Senha incorreta')
                    return reject({user: usuario, success: false, message:'Senha incorreta.'})
                }
                usuario.password = undefined;
                
                return resolve({user: usuario, success: true, message:'Login Efetuado com sucesso.'});
            }catch(err){
                reject(err.message);
            }
        });
    }
}

module.exports = LoginService;
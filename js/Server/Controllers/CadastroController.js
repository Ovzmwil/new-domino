
const DB = require('../Database/DB');
const Usuario = require('../Models/Usuario');
const User = require('../Models/User');

class CadastroController {
    static async post(req, res) {

            const {name} = req.body;
            try {
                
                if( await Usuario.findOne({name}))
                    return res.status(400).send({error:'Usuário já existe'});
                
                const user =  await Usuario.create(req.body);
                console.log(user);
                console.log('Usuario criado com sucesso')
                user.password = undefined;

                if(user == null){
                    let nextId = Math.max.apply(Math, db.users.map(u => u.getId())) + 1;
                    user = new User(nextId, data.username, "123456");
                    db.users.push(user);
                }
        
                return res.send({
                    user
                    // token: geraToken({id: user.id})
                });
            } catch (err) {
                console.error(err.message);
                return res.status(400).send({error: 'Erro ao fazer registro!!!'});
            }
        }         
    }

module.exports = CadastroController;

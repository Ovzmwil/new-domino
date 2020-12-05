
const DB = require('../Database/DB');
const Usuario = require('../Models/Usuario')


class CadastroController {
    static async post(req, res) {

            const {email} = req.body;
            try {
                
                if( await Usuario.findOne({email}))
                    return res.status(400).send({error:'Usuário já existe'});
                
                const user =  await Usuario.create(req.body);
                console.log(user);
                console.log('Usuario criado com sucesso')
                user.password = undefined;
        
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

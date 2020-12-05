const CadastroService = require('../Services/CadastroService');


class CadastroController {
    static async post(req, res) {
        console.log('Controller')
        console.log(req.body)
        CadastroService.post(req.body)
        .then((user) => {
            if(user.success){
                res.status(200).send({user: user.message})
                
            }else{
                res.status(404).send({user: user.message})
            }
        })
        .catch((err)=>{
            console.log(err)
            res.status(500).send({ message: 'Erro ao fazer registro!!!', error : err});

        })
    }

    static async getDataUser(req,res){
        console.log('Controller')
        console.log(req.session.user)
        CadastroService.getDataUser(req.session.user)
        .then((user) => {
            if(user.success){
                res.status(200).send({user: user.user, message:user.message})
            }else{
                res.status(404).send({user: user.user, message:user.message})
            }
        })
        .catch((err)=>{
            console.log(err)
            res.status(500).send({ message: 'Erro ao consultar dados registro!!!', error : err});

        })
    }
}
module.exports = CadastroController;

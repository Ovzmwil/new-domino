const RankService = require('../Services/RankService');


class RankController {
    static addPontosWinner(req,res) {
        RankService.addPontosWinner(req.body)
        .then((user) => {
            if(user.success){
                req.session.user = user.user;
                console.log('loggin controller status 200')
                res.status(200).send({ user: user.message });
            }else{
                console.log('loggin controller status 404')
                res.status(404).send({ user: user.message });
            }
        })
        .catch((err) => {
            res.status(500).send({ message: 'Erro durante soma de pontos', error : err});
        });
    }

    static listPlayers(req,res){
        RankService.listPlayers()
        .then((user)=>{

            res.status(200).send({ user: user.user })

        })
        .catch((err) => {
            res.status(500).send({ message: 'Erro durante request de usuarios para rank', error : err});
        });

    }
}


  

module.exports = RankController;
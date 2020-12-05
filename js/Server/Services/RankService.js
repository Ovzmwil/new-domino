const { compareSync } = require('bcryptjs');
const Usuario = require('../Models/Usuario');

class RankService {
    static addPontosWinner(winnerId) {
        return new Promise(async (resolve, reject) => {
            
            const id = winnerId.id;
            
            try{
                if(!id)
                    reject({user: undefined, success: false, message:'Dado inválido'});

                const user = await Usuario.findById(id);
                user.pontos = user.pontos + 50
                Usuario.findByIdAndUpdate(id,{pontos:user.pontos}, function(err,docs){
                    if(err){
                        console.log(err)
                    }else{
                        console.log("Sucesso")
                    }
                });
              
                return resolve({user: user, success: true, message:'Pontos Adicionados com sucesso'});
            }catch(err){
                reject(err.message);
            }
        });
    }

    static listPlayers(){
        return new Promise(async (resolve, reject) => {
                       
            try{
                
                const users = await Usuario.find({},function(err,docs){
                    if(err){
                        console.log(err)
                    }else{
                        console.log("Sucesso")
                    }
                }).sort({pontos:'desc'});
                
                let rank = []
                users.forEach(player => {
                    rank.push({"nome":player.name, "pontos":player.pontos})
                })

                return resolve({user: rank, success: true, message:'Lista de usuários rankeados retornada com sucesso'});
            }catch(err){
                reject(err.message);
            }
        });

    }
}


module.exports = RankService;
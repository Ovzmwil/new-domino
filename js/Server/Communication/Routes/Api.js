const express = require('express');
const RoomController = require('../../Controllers/RoomController');
const LoginController = require('../../Controllers/LoginController');
const LogoutController = require('../../Controllers/LogoutController');
const CadastroController = require('../../Controllers/CadastroController');
const RankController = require('../../Controllers/RankController');
const router = express.Router();

//Gambiarra para compartilhar o dado enquanto nao implementamos acesso a BD.
let games = [];

/* POST api/login */
router.post('/login', LoginController.post);

/* POST api/logout */
router.post('/logout', LogoutController.post);

router.post('/cadastro', CadastroController.post);

router.get('/cadastro/meucadastro', CadastroController.getDataUser);

/* POST api/rank */
router.post('/rank/addpontos', RankController.addPontosWinner);
router.get('/rank',RankController.listPlayers);


/* GET api/rooms/avaliable */
//Gambiarra para compartilhar o dado enquanto nao implementamos acesso a BD.
router.get('/rooms/avaliable', function(req, res){
    RoomController.avaliable(req, res, games);
});

/* POST api/rooms */
//Gambiarra para compartilhar o dado enquanto nao implementamos acesso a BD.
router.post('/rooms', function(req, res){
    RoomController.post(req, res, games);
});

module.exports = router;
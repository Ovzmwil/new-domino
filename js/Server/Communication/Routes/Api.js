const express = require('express');
const RoomController = require('../../Controllers/RoomController');
const LoginController = require('../../Controllers/LoginController');
const LogoutController = require('../../Controllers/LogoutController');
<<<<<<< HEAD
// const CadastroController = require('../../Controllers/CadastroController');
=======
const CadastroController = require('../../Controllers/CadastroController');
>>>>>>> b82b2e073f2835a8a9907794f890db88130acf7c

const router = express.Router();

//Gambiarra para compartilhar o dado enquanto nao implementamos acesso a BD.
let games = [];

/* POST api/login */
router.post('/login', LoginController.post);

/* POST api/logout */
router.post('/logout', LogoutController.post);

<<<<<<< HEAD
// router.post('/cadastro', CadastroController.post)
=======
//router.post('/cadastro', CadastroController.post);
>>>>>>> b82b2e073f2835a8a9907794f890db88130acf7c

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
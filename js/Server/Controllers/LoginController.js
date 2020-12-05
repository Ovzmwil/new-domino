const LoginService = require('../Services/LoginService');
const DB = require('../Database/DB');

class LoginController {
    static post(req, res) {
        LoginService.post(req.body, DB)
        .then((user) => {
            if(user.success){
                req.session.user = user.user;
                console.log('loggin controller status 200')
                res.status(200).send({ user: user.user });
            }else{
                console.log('loggin controller status 404')
                res.status(404).send({ user: user.message });
            }
        })
        .catch((err) => {
            res.status(500).send({ message: 'Error while logging in.', error : err});
        });
    }
}

module.exports = LoginController;
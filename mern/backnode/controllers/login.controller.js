const loginCtrl = {};
const Login = require('../models/Login')
const jwt = require('jsonwebtoken');
loginCtrl.postLogin = async(req, res, next) => {

    const result = await Login.findOne({
        usuario: req.body.usuario,
        password: req.body.password
    })

    if (result) {
        console.log(process.env.SECRET);

        const token = jwt.sign(result.toJSON(), process.env.SECRET, {
            expiresIn: 43200,
        });
        res.json(token)
    } else {
        res.json({ msg: 'Usuario o contraseña incorrectos' })
    }
}

module.exports = loginCtrl;
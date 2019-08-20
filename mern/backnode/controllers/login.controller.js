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
        res.status(200).json(token)
    } else {
        res.status(401).json({ msg: 'Usuario o contraseña incorrectos' })
    }
}

module.exports = loginCtrl;
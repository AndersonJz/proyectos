const loginCtrl = {};
const Login = require('../models/Login')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
loginCtrl.postLogin = async(req, res, next) => {

    const result = await Login.findOne({
        usuario: req.body.usuario,
    })

    if (result) {
        const bash = async () => {
            const pass = await bcrypt.compare(req.body.password, result.password)
            if (pass) {
                const token = jwt.sign(result.toJSON(), 'hollymolly', {
                    expiresIn: 43200,
                });
                res.status(200).json(token)
            } else {
                res.status(401).json({ msg: 'Usuario o contraseña incorrectos' })
            }
        }
        bash();
    } else {
        res.status(401).json({ msg: 'Usuario o contraseña incorrectos' })
    }
}

module.exports = loginCtrl;
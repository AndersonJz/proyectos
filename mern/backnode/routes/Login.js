const { Router } = require('express');
const router = Router();
const { postLogin } = require('../controllers/login.controller');

router.route('/').post(postLogin)

module.exports = router
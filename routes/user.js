var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController')
const middleware = require('../middlewares/middleware')

router.post('/', userController.register)
router.post('/login', userController.login)
router.post('/login/google', middleware.googleSign, userController.google)

module.exports = router;

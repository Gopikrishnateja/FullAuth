const userCtrl = require('../controllers/userCtrl')

const router = require('express').Router()

const auth = require('../middileware/auth')


router.post('/register', userCtrl.register)
router.post('/activation', userCtrl.activateEmail)
router.post('/login', userCtrl.login)
router.post('/refresh_token', userCtrl.getAccessToken)
router.post('/forgot', userCtrl.forgotPassword)
router.post('/reset', auth, userCtrl.resetPassword)

module.exports = router

const express = require("express")
const router = express.Router()
const {register, login } = require('../controllers/adminController')
const {playMusic} = require('../controllers/userController')

router.post('/register',register)
router.post('/login', login)

router.get('/', playMusic)


module.exports = router
const router = require('express').Router()

const planoRotas = require('./planoRotas')
const pessoaRotas = require('./pessoaRotas')
const loginRotas = require('./loginRotas')

router.use('/planos', planoRotas)
router.use('/users', pessoaRotas)
router.use('/login', loginRotas)

module.exports = router
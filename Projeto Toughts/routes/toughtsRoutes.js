const express = require('express')
const router= express.Router()
const ThoughtController = require('../controllers/ToughtController')

//helpers
const checkAuth = require('../helpers/auth').checkAuth

router.get('/add',checkAuth, ThoughtController.createTought)
router.post('/add',checkAuth, ThoughtController.createToughtSave)
router.get('/dashboard',checkAuth, ThoughtController.dashboard)
router.post('/remove', checkAuth, ThoughtController.removeTought) 
router.get('/', ThoughtController.showThoughts)

module.exports = router
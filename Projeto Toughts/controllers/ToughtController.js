const Tought = require('../models/Tought')
const User = require('../models/User')

module.exports = class ThoughtsController {
    static async showThoughts(req, res) {
        res.render('toughts/home') 
    }

    static async dashboard(req, res) {
        res.render('toughts/dashboard')
    }

    static createTought (req, res) {
        res.render('toughts/create')
    }
}
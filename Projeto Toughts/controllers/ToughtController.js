const Tought = require('../models/Tought')
const User = require('../models/User')

module.exports = class ThoughtsController {
    static async showThoughts(req, res) {
        res.render('toughts/home') 
    }
}
const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('toughts', 'root', '07012005', {
    host: 'localhost',
    dialect:'mysql'
})

try {
    sequelize.authenticate()
    console.log('Conectamos com sucesso')
} catch (error) {
    console.log(`Nao foi possivel conectar: ${err}`)
}

module.exports = sequelize
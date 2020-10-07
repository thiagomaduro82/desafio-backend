const Sequelize = require("sequelize")

const connection = new Sequelize('desafio_db','postgres','th123456', {
    host: 'localhost',
    port: '5432',
    dialect: 'postgres'
})

module.exports = connection
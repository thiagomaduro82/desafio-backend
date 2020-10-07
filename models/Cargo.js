const Sequelize = require("sequelize")
const connection = require("../database/database")

const Cargo = connection.define("cargos",{
    descricao: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

Cargo.sync({ force: false })
module.exports = Cargo

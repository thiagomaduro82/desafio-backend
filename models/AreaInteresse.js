const Sequelize = require("sequelize")
const connection = require("../database/database")

const AreaInteresse = connection.define("areasinteresse",{
    descricao: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

AreaInteresse.sync({ force: false })
module.exports = AreaInteresse

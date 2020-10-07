const Sequelize = require("sequelize")
const connection = require("../database/database")
const Cargo = require("../models/Cargo")

const Usuario = connection.define("usuarios",{
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    }, 
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    }, 
    senha: {
        type: Sequelize.STRING,
        allowNull: false
    },
    telefone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cargoId: {
        type: Sequelize.INTEGER,
        references: {
          model: Cargo,
          key: 'id'
        }
    }
})

Usuario.belongsTo(Cargo)

Usuario.sync({ force: false })
module.exports = Usuario

const Sequelize = require("sequelize")
const connection = require("../database/database")
const AreaInteresse = require("../models/AreaInteresse")
const Usuario = require("./Usuario")

const UsuarioInteresse = connection.define("usuariosinteresse",{
    usuarioId: {
        type: Sequelize.INTEGER,
        references: {
          model: Usuario,
          key: 'id'
        }
    },
    areaInteresseId: {
        type: Sequelize.INTEGER,
        references: {
          model: AreaInteresse,
          key: 'id'
        }
    }
})

Usuario.belongsTo(UsuarioInteresse)
AreaInteresse.belongsTo(UsuarioInteresse)

UsuarioInteresse.sync({ force: true })
module.exports = UsuarioInteresse

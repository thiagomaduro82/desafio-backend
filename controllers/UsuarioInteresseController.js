var Usuario = require("../models/Usuario")
var AreaInteresse = require("../models/AreaInteresse")
var UsuarioInteresse = require("../models/UsuarioInteresse")

class UsuarioInteresseController {

    // método index retorna JSON dos Dados cadastrados
    index(req, res){
        UsuarioInteresse.findAll({
            include: [{ all: true, nested: true }]
            }).then(usuariosinteresse => {
                res.status(200)
                res.json(usuariosinteresse)
        }).catch((error) => {
            res.status(500)
            res.json({error: "Erro ao listar !"})
        })
        
    }

    // método findOne retorna JSON de um dado específico
    findOne(req, res) {
        if(isNaN(req.params.id)) {
            res.sendStatus(403)
            res.json({error: "Id inválido !"})
        } else {
            var id = req.params.id
            UsuarioInteresse.findByPk(id, {
                include: [{ all: true, nested: true }]
                }).then(usuariointeresse => {
                    res.status(200)
                    res.json(usuariointeresse)
            })
        }
        
    }

    // Método store | Efetua a inclusão no banco de dados
    store(req, res){
        var usuarioId = req.body.usuarioId
        var areaInteresseId = req.body.areaInteresseId
        
        UsuarioInteresse.create({
            usuarioId: usuarioId,
            areaInteresseId: areaInteresseId

        }).then(() => {
            res.status(200)
        }).catch((error) => {
            res.status(500)
        })
        
    }

    // Método update | Efetua no banco a alteração de um dado específico.
    update(req, res){
        var id = req.body.id
        var usuarioId = req.body.usuarioId
        var areaInteresseId = req.body.areaInteresseId

        UsuarioInteresse.update({
            usuarioId: usuarioId,
            areaInteresseId: areaInteresseId
            },{ where: {id: id}
        }).then(() => {
            res.status(200)
        }).catch((error) => {
            res.status(500)
        })
    }

    // Método delete | Efetua no banco a exclusão de um dado específico.
    delete(req, res){
        var id = req.params.id
        UsuarioInteresse.destroy({
            where: {
                id: id
            }
        }).then(() => {
            res.status(200)
        }).catch((error) => {
            res.status(500)
        })
    }

}

module.exports = new UsuarioInteresseController

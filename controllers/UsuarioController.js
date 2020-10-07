var Usuario = require("../models/Usuario")
var Cargo = require("../models/Cargo")
var bcrypty = require("bcryptjs")

class UsuarioController {

    // método index retorna JSON dos Dados cadastrados
    index(req, res){
        Usuario.findAll({
            include: [{
                model: Cargo
            }]
        }).then(usuarios => {
            res.status(200)
            res.json(usuarios)
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
            Usuario.findByPk(id, {
                include: [{
                    model: Cargo
                }]
            }).then(usuario => {
                res.status(200)
                res.json(usuario)
            })
        }
        
    }

    // Método store | Efetua a inclusão no banco de dados
    store(req, res){
        var nome = req.body.nome
        var email = req.body.email
        var telefone = req.body.telefone
        var senha = req.body.senha
        var cargoId = req.body.cargoId

        var salt = bcrypty.genSaltSync(10)
        var hash = bcrypty.hashSync(senha,salt)
        
        Usuario.create({
            nome: nome,
            email: email,
            telefone: telefone,
            senha: hash,
            cargoId: cargoId

        }).then(() => {
            res.status(200)
        }).catch((error) => {
            res.status(500)
        })
        
    }

    // Método update | Efetua no banco a alteração de um dado específico.
    update(req, res){
        var id = req.body.id
        var nome = req.body.nome
        var email = req.body.email
        var telefone = req.body.telefone
        var cargoId = req.body.cargoId

        Usuario.update({
            nome: nome,
            email: email,
            telefone: telefone,
            cargoId: cargoId
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
        Usuario.destroy({
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

module.exports = new UsuarioController

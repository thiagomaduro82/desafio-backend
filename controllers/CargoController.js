var Cargo = require("../models/Cargo")

class CargoController {

    // método index retorna JSON dos Dados cadastrados
    index(req, res){
        Cargo.findAll().then(cargos => {
            res.status(200)
            res.json(cargos)
        }).catch((error) => {
            res.status(500)
            res.json({error: "Erro ao Listar !"})
        })
        
    }

    // método findOne retorna JSON de um dado específico
    findOne(req, res) {
        if(isNaN(req.params.id)) {
            res.status(403)
            res.json({error: "Id inválido !"})
        } else {
            var id = req.params.id
            Cargo.findByPk(id).then(cargo => {
                res.status(200)
                res.json(cargo)
            })
        }
        
    }

    // Método store | Efetua a inclusão no banco de dados
    store(req, res){
        var descricao = req.body.descricao
        
        Cargo.create({
            descricao: descricao
        }).then(() => {
            res.status(200)
        }).catch((error) => {
            res.status(500)
        })
        
    }

    // Método update | Efetua no banco a alteração de um dado específico.
    update(req, res){
        var id = req.body.id
        var descricao = req.body.descricao

        Cargo.update({
            descricao: descricao},{ where: {id: id}
        }).then(() => {
            res.status(200)
        }).catch((error) => {
            res.status(500)
        })
    }

    // Método delete | Efetua no banco a exclusão de um dado específico.
    delete(req, res){
        var id = req.params.id
        Cargo.destroy({
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

module.exports = new CargoController

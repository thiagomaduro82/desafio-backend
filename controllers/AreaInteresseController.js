var AreaInteresse = require("../models/AreaInteresse")

class AreaInteresseController {

    // método index retorna JSON dos Dados cadastrados
    index(req, res){
        AreaInteresse.findAll().then(areasinteresse => {
            res.status(200)
            res.json(areasinteresse)
        }).catch((error) => {
            res.status(500)
            res.json({error: "Erro ao listar"})
        })
        
    }

    // método findOne retorna JSON de um dado específico
    findOne(req, res) {
        if(isNaN(req.params.id)) {
            res.status(403)
            res.json({error: "Id inválido !"})
        } else {
            var id = req.params.id
            AreaInteresse.findByPk(id).then(areainteresse => {
                res.status(200)
                res.json(areainteresse)
            })
        }
        
    }

    // Método store | Efetua a inclusão no banco de dados
    store(req, res){
        var descricao = req.body.descricao
        
        AreaInteresse.create({
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

        AreaInteresse.update({
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
        AreaInteresse.destroy({
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

module.exports = new AreaInteresseController

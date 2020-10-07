const Usuario = require("../models/Usuario")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

// um hash secreto para geração do Token
const JWTSecret = "thlsdfçpoasmmv5412%%78kjsdnfk";

class LoginController {

    // função que valida o Login
    auth(req, res) {

        var email = req.body.email
        var senha = req.body.senha

        Usuario.findOne({
            where: {
                email: email
            }
        }).then(usuario => {
            var correct = bcrypt.compareSync(senha, usuario.senha)
            if(correct){
                jwt.sign({id: usuario.id, email: usuario.email},JWTSecret, {expiresIn: '1h'}, 
                (error, token) => {
                    if(error){
                        res.status(400)
                        res.json({error: "falha ao gerar o Token !"})
                    } else {
                        res.status(200)
                        res.json({token: token})
                    }
                })
            } else {
                res.status(400)
                res.json({error: "Dados inválidos 2 !"})
            }
            
        }).catch((error) => {
            res.status(400)
            res.json({error: "Dados inválidos !"})
        })

    }

    // middlware que verifica a validade do Token
    authVerify(req, res, next) {
 
        const authToken = req.headers['authorization']
        if(authToken != undefined){
            const bearer = authToken.split(' ')
            var token = bearer[1]
            jwt.verify(token, JWTSecret, (error, data) => {
                if(error){
                    res.status(401)
                    res.json({error: "token inválido !"})
                } else {
                    var dataVerifica = new Date()
                    dataVerifica = dataVerifica.getMinutes()
                    if(dataVerifica > data.exp){
                        res.status(401)
                        res.json({error: "Token expirado, refaça o login !"})
                    } else {
                        next();
                    }
                   
                }
            })

        } else {
            res.status(401)
            res.json({error: "token inválido !"})
        }

    }

}

module.exports = new LoginController

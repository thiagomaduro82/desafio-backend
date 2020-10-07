const express = require("express")
const router = express.Router()
const CargoController = require("../controllers/CargoController")
const AreaInteresseController = require("../controllers/AreaInteresseController")
const UsuarioController = require("../controllers/UsuarioController")
const UsuarioInteresseController = require("../controllers/UsuarioInteresseController")
const LoginController = require("../controllers/LoginController")

// Rotas de Cargo
router.get("/cargos",LoginController.authVerify, CargoController.index)
router.get("/cargo/:id",LoginController.authVerify, CargoController.findOne)
router.post("/cargo",LoginController.authVerify, CargoController.store)
router.put("/cargo",LoginController.authVerify, CargoController.update)
router.delete("/cargo/:id",LoginController.authVerify, CargoController.delete)

// Rotas de Área de Interesse
router.get("/areasinteresse",LoginController.authVerify, AreaInteresseController.index)
router.get("/areainteresse/:id",LoginController.authVerify, AreaInteresseController.findOne)
router.post("/areainteresse",LoginController.authVerify, AreaInteresseController.store)
router.put("/areainteresse",LoginController.authVerify, AreaInteresseController.update)
router.delete("/areainteresse/:id",LoginController.authVerify, AreaInteresseController.delete)

// Rotas de Usuários
router.get("/usuarios",LoginController.authVerify, UsuarioController.index)
router.get("/usuario/:id",LoginController.authVerify, UsuarioController.findOne)
router.post("/usuario",LoginController.authVerify, UsuarioController.store)
router.put("/usuario/:id",LoginController.authVerify, UsuarioController.update)
router.delete("/usuario/:id",LoginController.authVerify, UsuarioController.delete)

// Rotas de Usuários Interesse
router.get("/usuariosinteresse", LoginController.authVerify, UsuarioInteresseController.index)
router.get("/usuariointeresse/:id", LoginController.authVerify, UsuarioInteresseController.findOne)
router.post("/usuariointeresse", LoginController.authVerify, UsuarioInteresseController.store)
router.put("/usuariointeresse/:id", LoginController.authVerify, UsuarioInteresseController.update)
router.delete("/usuariointeresse/:id", LoginController.authVerify, UsuarioInteresseController.delete)

// Rotas de Login
router.post("/login/auth", LoginController.auth)

module.exports = router

const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const connection = require("./database/database")
const router = require("./routes/router")

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use("/", router)

connection.authenticate().then(() => {
    console.log("conexão feita com sucesso !")
}).catch((error) => {
    console.log(error)
})

app.listen(8080, () => {
    console.log("API Rodando")
})
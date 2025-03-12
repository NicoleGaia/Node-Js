const express = require("express")
const app = express()

app.get("/", function(req, res){
    res.send("Hello!")
})

app.get("/sobre", function(req, res){
    res.send("Minha página sobre")
})

app.get("/blog", function(req, res){
    res.send("Bem vindo ao meu blog!")
})

app.listen(8081, function(){
    console.log("Server is running on port 8081")
})

app.get("/ola/:nome/:cargo/:cor", function(req, res){
    res.send("<h1> Ola " + req.params.nome + "<h1/>" + "<h2> Seu cargo e: " + req.params.cargo + "<h2/>")
})
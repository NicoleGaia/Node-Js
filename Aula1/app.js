var http = require('http')

http.createServer(function(req, res){
    res.end('Hello World! Welcome to my website')
}).listen(8081)

console.log("Servidor rodadndo na porta 8081")
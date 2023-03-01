var http = require('http')
var url = require('url')
var fs = require('fs')

var myServer = http.createServer(function(req,res){
    console.log(req.method + " " + req.url)

    var q = url.parse(req.url,true)

    pasta =""
    if (q.pathname.substring(1)=="index"){
        pasta = ""
    }else{
        pasta="cidades/"
    }

    fs.readFile(pasta+q.pathname.substring(1)+".html",function(err,data){
        res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
        if(err){
            res.write("ERRO: na leitura do ficheiro :: " + err)
        }else{
            res.write(data)
        }
        res.end();
    })

});

myServer.listen(7778)
console.log("Servidor a escuta na porta 7778...");
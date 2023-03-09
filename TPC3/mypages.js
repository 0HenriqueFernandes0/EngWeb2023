// mypages.js
// 2023-03-03 by jcr

const { distribuicao } = require("./distribuiçoes")

// HTML templates generating functions
exports.genMenuPage = function (data){
    var pagHTML = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8"/>
            <title>Menu</title>
            <link rel="stylesheet" type="text/css" href="w3.css"/>
        </head>
        <body>
            <div class="w3-card-4">
                <header class="w3-container w3-purple">
                    <h1>Lista de Opçoes</h1>
                </header>
        
                <div class="w3-container">
                    <table class="w3-table-all">
                    <tr>
                        <th><a href="http://localhost:7777/pessoas">Lista de pessoas</a></th>
                        <th><a href="http://localhost:7777/pessoasOrdenadas">Lista de pessoas ordenadas</a></th>
                        <th><a href="http://localhost:7777/distribuicao/sexo">Tabela de distribuiçao por sexo</a></th>
                        <th><a href="http://localhost:7777/distribuicao/desportos">Tabela de distribuiçao por desportos</a></th>
                        <th><a href="http://localhost:7777/top/10/profissao">Top 10 de profissoes</a></th>
                    </tr>
                    </table>
                </div>
                <footer class="w3-container w3-purple">
                    <h5>Generated in EngWeb2023 ${data}</h5>
                </footer>
            </div>
        </body>
    </html>
                `
    return pagHTML
}
exports.genMainPage = function(lista, data){
    var pagHTML = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8"/>
            <title>About People...</title>
            <link rel="stylesheet" type="text/css" href="w3.css"/>
        </head>
        <body>
            <div class="w3-card-4">
                <header class="w3-container w3-purple">
                    <h1>Lista de Pessoas</h1>
                    <h4 align="right"><a href="/">Home</a><h4>
                </header>
        
                <div class="w3-container">
                    <table class="w3-table-all">
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Idade</th>
                        <th>Sexo</th>
                        <th>Cidade</th>
                    </tr>
                `
    
    for(let i=0; i < lista.length; i++){
        pagHTML += `
        <tr>
            <td>${lista[i].id}</td>
            <td>
                <a href="/pessoas/${lista[i].id}">${lista[i].nome}</a>
            </td>
            <td>${lista[i].idade}</td>
            <td>${lista[i].sexo}</td>
            <td>${lista[i].morada.cidade}</td>
        </tr>
        `
    }

    pagHTML += `
                    </table>
                </div>
                <footer class="w3-container w3-purple">
                    <h5>Generated in EngWeb2023 ${data}</h5>
                </footer>
            </div>
        </body>
    </html>
    `
    return pagHTML
}

exports.genPersonPage = function(p, d){
    var pagHTML = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8"/>
            <title>Person Page</title>
            <link rel="stylesheet" type="text/css" href="w3.css"/>
        </head>
        <body>
            <div class="w3-card-4">
                <header class="w3-container w3-purple">
                    <h1>${p.nome}</h1>
                    <h4 align="right"><a href="/">Home</a><h4>
                </header>

                <div class="container">
                    <table class="w3-table-all">
    `
    chaves = Object.keys(p)
    for(let i = 0;i<chaves.length;i++){
        pagHTML+=`  <tr>
                        <td>${chaves[i]}</td>
        `
        let x = p[chaves[i]]
        if(typeof(x)=="string" ||typeof(x)=="number"){
            pagHTML+=`
                        <td>${x}</td>
                    </tr>`
        }else if(Array.isArray(x)){
            pagHTML+=`<td>`
            for (let j = 0; j < x.length-1; j++) {
                pagHTML+=` ${x[j]},`
            }
            pagHTML+=` ${x[x.length-1]}.</td>
            </tr>`
        }else{
            keys = Object.keys(x)
            for(let j = 0;j<keys.length;j++){
                pagHTML+=`<td>${keys[j]}:${x[keys[j]]}</td>`
            }
            pagHTML+=`</tr>`
        }

    }
    pagHTML+=
                `
                    </table>
                </div>
                
                <footer class="w3-container w3-purple">
                    <h5>Generated in EngWeb2023 ${d}</h5>
                </footer>
            </div>
        </body>
    </html>
                `
    return pagHTML
}

exports.genDistriPage = function(pessoas, data, tipo,n){
    var pagHTML = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8"/>
            <title>About People...</title>
            <link rel="stylesheet" type="text/css" href="w3.css"/>
        </head>
        <body>
            <div class="w3-card-4">
                <header class="w3-container w3-purple">
                    <h1>Lista de ${tipo}</h1>
                    <h4 align="right"><a href="/">Home</a><h4>
                </header>
        
                <div class="w3-container">
                    <table class="w3-table-all">
            `
    let lista = Object.entries(distribuicao(pessoas,tipo)).sort((a, b) => b[1] - a[1] || (a > b ? 1:-1));

    if(n==-1) n = lista.length
    
    for(let i=0; i < n; i++){
        pagHTML += `
        <tr>
            <td>${lista[i][0]}</td>
            <td>
                <a href="/distribuicao/${tipo}/${lista[i][0]}">${lista[i][1]}</a>
            </td>
        <tr>
        `
    }
    pagHTML+= `         </tr>
                    </table>
                </div>
                <footer class="w3-container w3-purple">
                    <h5>Generated in EngWeb2023 ${data}</h5>
                </footer>
            </div>
        </body>
    </html>
    `
    return pagHTML
}

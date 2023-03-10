/***********************************************************************************
 *Objetivo: Criar uma API para disponibilizar dados de estados e cidades
 *Autor: Anderson Reis
 *Versão: 1.0
 *Data 10/03/2023
 ************************************************************************************/
// Express - depedencia para realizar requisições de API pelo protocolo HTPP npm install express --save
// Cors - dependencia par gerenciar permissões de requisição da API npm install cors --save
// Body-Parser -dependecia que gerencia o corpo das requisições npm install body-parser --save
// quando enviar para o git remover o node_modules e depois caso você der um git clone precisa sar um npm --save

const express = require('express'); // dependecia para criar as aquisções da API
const cors = require('cors'); // dependecia para gerenciar as permissões
const bodyParser = require('body-parser'); // dependencia para gerenciar o corpo das requisições da API



const app = express(); // cria objeto com as características do express
app.use((request, response, next) => {
    //API pública, que todo mundo pode usar
    //API privada
    response.header('Access-Control-Allow-Origin', '*'); // * significa que fica publico ou seja todo mundo pode usar
    //response.header('Access-Control-Allow-Methods','ip do seu servidor'); // ip quando é privada só podera usar api a pessoa com o ip colocado
    response.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS'); // permite definir quais métodos poderão ser utlizados nas requisições da API


    app.use(cors()) // Envia para o cors() as regras de permissões

    next()
})

//EndPoints

// request = solicitar
// response = resposta
// next = próximo
//async - estabelece um status de aguarde, assim que eu preocessar te devolvo os dados
// Obs: se não usar o async a requisição é perdia por que o FRONT acha que não te API


// EndPoint para listar os estados
app.get('/estados',cors(), async function(request, response, next) {
response.status(200)
response.json(`{message: "Testando a API"}`)
}) 

app.listen(8080, function(){
    console.log(`Servidor aguardando requisições na porta 8080`);
    
})
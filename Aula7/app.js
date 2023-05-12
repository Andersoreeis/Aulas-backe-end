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
const estadosCidades = require('./modulo/main')



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


// EndPoint para primeira função getListaDeEstados
app.get('/v1/senai/estados', cors(), async function (request, response, next) {
    let estados = estadosCidades.getListaDeEstados()
    if (estados) // tratamento para validar o sucesso da requisição
    {
        response.status(200)
        response.json(estados)
    } else {
        response.status(500)
    }


})

// EndPoint para segunda função getDadosEstado, lista os dados do estado fiiltrando pela sigla
app.get('/v2/senai/estado/sigla/:uf', cors(), async function (request, response, next) {

    let statusCode
    let dadosEstados = {}
    let siglaEstado = request.params.uf // Recebe a sigla do estado que será enviada pela ULR da requisição
    if (siglaEstado == '' || siglaEstado == undefined || siglaEstado.length != 2 || !isNaN(siglaEstado)) {
        statusCode = 400
        dadosEstados.message = 'Não foi possivel processar pois os dados de entrada (uf) não corresponde ao exígido, confira o valor pois não pode ser vázio, e precisa ser caracteres e ter dois digitos.'
    } else {
        let estado = estadosCidades.getDadosEstado(siglaEstado)
        if (estado) {
            statusCode = 200
            dadosEstados = estado
        } else {
            statusCode = 404

        }

    }
    response.status(statusCode)
    response.json(dadosEstados)
})

app.get('/senai/capital/estado/sigla/:uf', cors(), async function (request, response, next) {

    let statusCode
    let dadosEstados = {}
    let siglaEstado = request.params.uf // Recebe a sigla do estado que será enviada pela ULR da requisição

    if (siglaEstado == '' || siglaEstado == undefined || siglaEstado.length != 2 || !isNaN(siglaEstado)) {
        statusCode = 400
        dadosEstados.message = 'Não foi possivel processar pois os dados de entrada (uf) não corresponde ao exígido, confira o valor pois não pode ser vázio, e precisa ser caracteres e ter dois digitos.'
    } else {
        let estado = estadosCidades.getCapitalEstado(siglaEstado)
        if (estado) {
            statusCode = 200
            dadosEstados = estado
        } else {
            statusCode = 404

        }

    }
    response.status(statusCode)
    response.json(dadosEstados)
})

app.get('/senai/regiao/sigla/:regiao', cors(), async function (request, response, next) {

    let statusCode
    let dadosEstados = {}
    let siglaEstado = request.params.regiao // Recebe a sigla do estado que será enviada pela ULR da requisição

    if (siglaEstado == '' || siglaEstado == undefined || !isNaN(siglaEstado)) {
        statusCode = 400
        dadosEstados.message = 'Não foi possivel processar pois os dados de entrada (uf) não corresponde ao exígido, confira o valor pois não pode ser vázio, e precisa ser caracteres e ter dois digitos.'
    } else {
        let estado = estadosCidades.getEstadosRegiao(siglaEstado)
        if (estado) {
            statusCode = 200
            dadosEstados = estado
        } else {
            statusCode = 404

        }

    }
    response.status(statusCode)
    response.json(dadosEstados)
})

app.get('/senai/pais/capital', cors(), async function (request, response, next) {
    let capital = estadosCidades.getCapitalPais()
    if (capital) // tratamento para validar o sucesso da requisição
    {
        response.status(200)
        response.json(capital)
    } else {
        response.status(500)
    }


})

app.get('/senai/estado/cidades/sigla/:cidade', cors(), async function (request, response, next) {

    let statusCode
    let dadosEstados = {}
    let siglaEstado = request.params.cidade // Recebe a sigla do estado que será enviada pela ULR da requisição

    if (siglaEstado == '' || siglaEstado == undefined || !isNaN(siglaEstado)) {
        statusCode = 400
        dadosEstados.message = 'Não foi possivel processar pois os dados de entrada (uf) não corresponde ao exígido, confira o valor pois não pode ser vázio, e precisa ser caracteres e ter dois digitos.'
    } else {
        let estado = estadosCidades.getCidades(siglaEstado)
        if (estado) {
            statusCode = 200
            dadosEstados = estado
        } else {
            statusCode = 404

        }

    }
    response.status(statusCode)
    response.json(dadosEstados)
})
app.get('/senai/cidades', cors(), async function (request, response, next) {
    let siglaEstado = request.query.uf // Recebe a sigla do estado que será enviada
    let siglaQuantidade = request.query.quantidade // Recebe a quantidade de cidades que será enviada
    console.log(siglaEstado);
    console.log(siglaEstado);
    
})

app.listen(8080, function () {
    console.log(`Servidor aguardando requisições na porta 8080`);

})
// npm i para instalar  o node_modules novamente
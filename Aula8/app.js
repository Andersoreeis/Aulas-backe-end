/****************************************************************************
 * Objetivo: API para integração entre Back e Banco de Dados (get, post, put, delete)
 * Data: 14/04/2023
 * Autor: Anderson Reis
 * versão: 1.0
 *****************************************************************************/
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const {
    response
} = require('express');

const app = express();
app.use((response, request, next) => {
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Methods', '*', 'GET, POST, PUT, DELETE, OPTIONS'); // pegar inseri atualiza e deleta
    app.use(cors());

    next();
})
/***********************************
 *Objetivo: API de controle de alunos
 *Data: 14/04/2023
 *Autor: Anderson Reis
 Versão:1.0
 ***********************************/
// Define que os dados que irão chegar no body da requisição será json
const bodyParseJSON = bodyParser.json()
let controllerAluno = require('./controller/controller_aluno.js');
// EndPoint Retorna os dados de alunos

var controllerMessage = require('./controller/modulo/config.js')
app.get('/v1/lion-school/aluno', cors(), async function (request, response) {

    let dadosAlunos = await controllerAluno.getTodosAlunos()

    response.status(dadosAlunos.status)
    console.log(dadosAlunos.status);

    response.json(dadosAlunos)
});
// EndPoint retorna o aluno filtrando pelo id
app.get('/v1/lion-school/idaluno/:id', cors(), async function (request, response) {
    let controllerAluno = require('./controller/controller_aluno.js');
    let idApi = request.params.id


    let dadosAlunos = await controllerAluno.getbuscarAlunoPorId(idApi)


    response.status(dadosAlunos.status)
    response.json(dadosAlunos)
    console.log(dadosAlunos);



});

// Endpoint que busca o aluno pelo nome
app.get('/v1/lion-school/nomealuno/:nome', cors(), async function (request, response) {
    let controllerAluno = require('./controller/controller_aluno.js');
    let nomeAPI = request.params.nome

    let statusCode
    let dadosAlunosAPI = {}

    if (nomeAPI == null || nomeAPI == undefined || !isNaN(nomeAPI) || nomeAPI == '') {
        dadosAlunosAPI.message = 'Erro você não inseriu os dados corretamente'
        statusCode = 400
    } else {
        let dadosAlunos = await controllerAluno.getAlunoPeloNome(nomeAPI)
        if (dadosAlunos) {
            dadosAlunosAPI = dadosAlunos
            statusCode = 200

        } else {
            statusCode = 400
        }
    }
    response.json(dadosAlunosAPI)
    response.status(statusCode)





});

// EndPoint Insere um dado novo
app.post('/v1/lion-school/aluno/', cors(), bodyParseJSON, async function (request, response) {

    // recebe os dados emcaminhados na resquisição
    let dadosBody = request.body


    let resultDadosAlunos = await controllerAluno.inserirAluno(dadosBody)

    response.status(resultDadosAlunos.status)
    response.json(resultDadosAlunos)

});
// EndPoint atualiza um dado existente filtrado pelo id
app.put('/v1/lion-school/aluno/:id', cors(), bodyParseJSON, async function (request, response) {

    let contentType = request.headers['content-type']


    if (String(contentType).toLowerCase() == 'application/json') {
        let idAluno = request.params.id
        let dadoBody = request.body
        let resultDadosAlunos = await controllerAluno.atualizarAluno(dadoBody, idAluno)
        response.status(resultDadosAlunos.status)
        response.json(resultDadosAlunos)


    } else {
        response.status(controllerMessage.ERROR_INVALID_CONSTANT_TYPE.status)
        response.json(controllerMessage.ERROR_INVALID_CONSTANT_TYPE.message)
    }
    // console.log(resultDadosAlunos);

});
// EndPoint deleta um dado existente filtrado pelo id
app.delete('/v1/lion-school/aluno/:id', cors(), async function (request, response) {
    let idAluno = request.params.id



    // console.log(resultDadosAlunos);

    let resultDadosAlunos = await controllerAluno.deletarAluno(idAluno)
    response.status(resultDadosAlunos.status)
    response.json(resultDadosAlunos)




});

app.listen(8080, function () {
    console.log('Rodando')
})
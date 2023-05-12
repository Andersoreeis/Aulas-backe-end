/****************************************************************************
 * Objetivo: Responsável pela regra de negócio referente ao CRUD de alunos
 * Data: 14/04/2023
 * Autor: Anderson Reis
 * versão: 1.0
 *****************************************************************************/
// Inporta o arquivo de configurações das variaves, constantes e funções globais
var message = require('./modulo/config.js')
var alunoDAO = require('../model/DAO/alunoDAO.js')

// Insere um novo aluno
const inserirAluno = async function (dadosAluno) {

    if (dadosAluno.nome == '' || dadosAluno.nome == undefined || dadosAluno.nome == null || dadosAluno.nome.length > 100 ||
        dadosAluno.rg == '' || dadosAluno.rg == undefined || dadosAluno.rg == null || dadosAluno.rg.length > 45 ||
        dadosAluno.cpf == '' || dadosAluno.cpf == undefined || dadosAluno.cpf == null || dadosAluno.cpf.length > 45 ||
        dadosAluno.data_nasc == '' || dadosAluno.data_nasc == undefined || dadosAluno.data_nasc == null || dadosAluno.data_nasc > 10 ||
        dadosAluno.email == '' || dadosAluno.email == undefined || dadosAluno.email == null || dadosAluno.email.length > 200) {
        return message.ERROR_REQUIRED_FIELDS
    } else {
        // Envia os dados para a model inserir nos banco de dados
        let resultDadosAlunos = await alunoDAO.insertAluno(dadosAluno)



        // valida se o BD inseriu corretamente os dados e chama a função que retorna o id gerado no insert
        if (resultDadosAlunos) {
            let novoAluno = await alunoDAO.selectLaastId()
            let dadosAlunoJSON = {}
            dadosAlunoJSON.status = message.SUCEESS_CREATED_ITEM.status
            dadosAlunoJSON.aluno = novoAluno

            return dadosAlunoJSON
        } else {
            return message.ERROR_INTERNAL_SERVER
        }
    }
}


// Atualizar um aluno existente
const atualizarAluno = async function (dadosAluno, idAluno) {
    if (dadosAluno.nome == '' || dadosAluno.nome == undefined || dadosAluno.nome == null || dadosAluno.nome.length > 100 || // validação dos dados inseridos se estiver corretos
        dadosAluno.rg == '' || dadosAluno.rg == undefined || dadosAluno.rg == null || dadosAluno.rg.length > 45 ||
        dadosAluno.cpf == '' || dadosAluno.cpf == undefined || dadosAluno.cpf == null || dadosAluno.cpf.length > 45 ||
        dadosAluno.data_nasc == '' || dadosAluno.data_nasc == undefined || dadosAluno.data_nasc == null || dadosAluno.data_nasc > 10 ||
        dadosAluno.email == '' || dadosAluno.email == undefined || dadosAluno.email == null || dadosAluno.email.length > 200) {
        return message.ERROR_REQUIRED_FIELDS

    } else if (idAluno == '' || idAluno == undefined || idAluno == null) { // Validação de id incorreto ou não informado
        return message.ERROR_INVALID_ID
    } else {
        dadosAluno.id = idAluno

        let resultadoAlunosDAO = await alunoDAO.updateAluno(dadosAluno)

        // console.log(resultadoAlunosDAO);
        let statusId = await alunoDAO.selectByIdAluno(idAluno)
        if (statusId) {

            if (resultadoAlunosDAO) {
                let dadosAlunoJSON = {}
                dadosAlunoJSON.status = message.SUCEESS_UPDATE_ITEM.status
                dadosAlunoJSON.aluno = dadosAluno

                return dadosAlunoJSON
            } else {
                return message.ERROR_INTERNAL_SERVER
            }
        } else {
            return message.ERROR_ID_NOT_FOUND
        }

    }



}


// Deletar um aluno existente
const deletarAluno = async function (idAluno) {

    if (idAluno == '' || idAluno == undefined || idAluno == null || isNaN(idAluno)) { // Validação de id incorreto ou não informado
        return message.ERROR_INVALID_ID
    } else {
        let statusId = await alunoDAO.selectByIdAluno(idAluno)
        if (statusId) {
            let resultadoAlunosDAO = await alunoDAO.deleteAluno(idAluno)
            if (resultadoAlunosDAO) {
                return message.SUCEESS_DELETE_ITEM
            } else {
                return message.ERROR_INTERNAL_SERVER
            }
        } else {
            return message.ERROR_ID_NOT_FOUND
        }



    }
}

// Retorna a lista de todos os alunos
const getTodosAlunos = async function () {
    let dadosAlunosJSON = {}
    // Import do arquivo DAO para acessar dados do aluno no BD

    // chama a função do arquivo DAO que retorna todos os registros do banco de dados
    let dadosAlunos = await alunoDAO.selectAllAlunos();
    // console.log(dadosAlunos);

    if (dadosAlunos) {
        // criando um JSON com o atributo alunos, para encaminhar um array de alunos
        dadosAlunosJSON.status = message.SUCESS_REQUEST.status
        dadosAlunosJSON.message = message.SUCESS_REQUEST.message
        dadosAlunosJSON.quantidade = dadosAlunos.length
        dadosAlunosJSON.alunos = dadosAlunos
        return dadosAlunosJSON
    } else {
        return message.ERROR_NOT_FOUND


    }
}


// Retorna o aluno filtrado pelo id
const getbuscarAlunoPorId = async function (dadosAluno) {
    let dadosAlunosJSON = {}
    // Import do arquivo DAO para acessar dados do aluno no BD
    let alunoDAO = require('../model/DAO/alunoDAO.js')
    // chama a função do arquivo DAO que retorna todos os registros do banco de dados

    // console.log(dadosAlunos);


    console.log(dadosAluno);

    if (dadosAluno == '' || dadosAluno == undefined || dadosAluno == isNaN(dadosAluno) || dadosAluno == null) {
        return message.ERROR_INVALID_ID
    } else {
        let dadosAlunos = await alunoDAO.selectByIdAluno(dadosAluno);
        if (dadosAlunos) {
            // criando um JSON com o atributo alunos, para encaminhar um array de alunos


            if (dadosAlunos.length > 0) {
                dadosAlunosJSON.status = message.SUCESS_REQUEST.status
                dadosAlunosJSON.message = message.SUCESS_REQUEST.message
                dadosAlunosJSON.alunos = dadosAlunos

                return dadosAlunosJSON
            } else {
                return message.ERROR_ID_NOT_FOUND
            }

        } else {
            return message.ERROR_NOT_FOUND

        }

    }


}
const getAlunoPeloNome = async function (dadosAluno) {
    let dadosAlunosJSON = {}
    // Import do arquivo DAO para acessar dados do aluno no BD
    let alunoDAO = require('../model/DAO/alunoDAO.js')
    // chama a função do arquivo DAO que retorna todos os registros do banco de dados
    let dadosAlunos = await alunoDAO.selectByNameAluno(dadosAluno);
    // console.log(dadosAlunos);

    if (dadosAlunos) {
        // criando um JSON com o atributo alunos, para encaminhar um array de alunos
        dadosAlunosJSON.quantidade = dadosAlunos.length
        dadosAlunosJSON.alunos = dadosAlunos
        return dadosAlunosJSON
    } else {
        return false


    }

}
module.exports = {
    getTodosAlunos,
    getbuscarAlunoPorId,
    getAlunoPeloNome,
    inserirAluno,
    atualizarAluno,
    deletarAluno
}
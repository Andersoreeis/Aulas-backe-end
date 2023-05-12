/****************************************************************************
 * Objetivo: Responsável pela manipulação de dados dos Alunos no Banco de Dados
 * Data: 14/04/2023
 * Autor: Anderson Reis
 * versão: 1.0
 *****************************************************************************/
let {
    PrismaClient
} = require('@prisma/client')
// Inseri os dados do aluno no Banco de Dados
let prisma = new PrismaClient()
const insertAluno = async function (dadosAlunos) {
    let sql = `insert into tbl_aluno 
        (
          nome,
          rg ,
          cpf ,
          data_nasc,
          email
        )
           values
         (
               '${dadosAlunos.nome}',
               '${dadosAlunos.rg}',
               '${dadosAlunos.cpf}',
               '${dadosAlunos.data_nasc}',
               '${dadosAlunos.email}'
        )`
    let resultStatus = await prisma.$executeRawUnsafe(sql)
    if (resultStatus) {
        return true
    } else {
        return false
    }
}
// atualiza os dados do aluno no Banco de Dados
const updateAluno = async function (dadosAlunos) {
    // console.log(dadosAlunos.id);

    let sql = `update tbl_aluno set 
    nome = '${dadosAlunos.nome}',
    rg = '${dadosAlunos.rg}',
    cpf ='${dadosAlunos.cpf}',
   data_nasc = '${dadosAlunos.data_nasc}',
    email ='${dadosAlunos.email}'
        where id = '${dadosAlunos.id}' `



    let resultStatus = await prisma.$executeRawUnsafe(sql)

    console.log(resultStatus);

    if (resultStatus) {
        return true
    } else {
        return false
    }
}
// deleta os dados do aluno no Banco de Dados
const deleteAluno = async function (idAluno) {

    let sql = `delete from tbl_aluno where id = '${idAluno}'`
    let resultStatus = await prisma.$executeRawUnsafe(sql)


    if (resultStatus) {
        return true
    } else {
        return false
    }
}
// Seleciona todos os alunos
const selectAllAlunos = async function () {
    // ScriptSql consegue buscar o todos os itens no banco de dados
    let sql = 'select * from tbl_aluno'
    // SqueryRawUnsafe() - consegue utilizar uma váriavel como sendo um scriptSQL
    // SqueryRaru('select * from tbl_aluno') só consegue interpretar por script direto no código
    prisma.$queryRawUnsafe
    let rsAlunos = await prisma.$queryRawUnsafe(sql);
    // valida se o banco de dados retornou algum registro
    // console.log(rsAlunos);

    if (rsAlunos.length > 0) {
        return rsAlunos
    } else {
        return false
    }
}


// Seleciona o aluno filtrado pelo id
const selectByIdAluno = async function (id) {

    // ScriptSql consegue buscar o todos os itens no banco de dados
    let sql = 'select * from tbl_aluno where id =' + id
    // SqueryRawUnsafe() - consegue utilizar uma váriavel como sendo um scriptSQL
    // SqueryRaru('select * from tbl_aluno') só consegue interpretar por script direto no código
    prisma.$queryRawUnsafe
    let rsAlunos = await prisma.$queryRawUnsafe(sql);
    // valida se o banco de dados retornou algum registro
    // console.log(rsAlunos);

    if (rsAlunos.length > 0) {
        return rsAlunos
    } else {
        return false
    }
}
const selectByNameAluno = async function (name) {

    // ScriptSql consegue buscar o todos os itens no banco de dados
    const sql = `SELECT * FROM tbl_aluno WHERE nome LIKE '%${name}%'`

    // SqueryRawUnsafe() - consegue utilizar uma váriavel como sendo um scriptSQL
    // SqueryRaru('select * from tbl_aluno') só consegue interpretar por script direto no código
    prisma.$queryRawUnsafe
    let rsAlunos = await prisma.$queryRawUnsafe(sql);
    // valida se o banco de dados retornou algum registro


    if (rsAlunos.length > 0) {
        return rsAlunos
    } else {
        return false
    }
}
// Retorna o ultimo id inserido no banco de dados
const selectLaastId = async function () {
    let sql = 'select * from tbl_aluno order by id desc limit 1;'
    let rsAluno = await prisma.$queryRawUnsafe(sql)

    if (rsAluno.length > 0) {
        return rsAluno
    } else {
        return false
    }
}

module.exports = {
    selectAllAlunos,
    selectByIdAluno,
    selectByNameAluno,
    insertAluno,
    updateAluno,
    deleteAluno,
    selectLaastId
}
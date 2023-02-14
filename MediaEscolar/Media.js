/************************************
 * Objetivo: criar um back end que serve para média escolar
 * Autor: Anderson Reis
 * Versão: 1.0
 ***************************************/
let status = true







function mediaEscolar(nota1, nota2, nota3, nota4, notadoExame) {

    let resultado
    let resultadoSomadoComExame
    let nota1DadosDoAluno = Number(nota1)
    let nota2DadosDoAluno = Number(nota2)
    let nota3DadosDoAluno = Number(nota3)
    let nota4DadosDoAluno = Number(nota4)
    let notaDoExameDados = Number(notadoExame)


    resultado = (nota1DadosDoAluno + nota2DadosDoAluno + nota3DadosDoAluno + nota4DadosDoAluno) / 4
    resultadoSomadoComExame = (nota1DadosDoAluno + nota2DadosDoAluno + nota3DadosDoAluno + nota4DadosDoAluno + exameEscolar(notaDoExameDados)) / 5


    if (resultado >= 70 && resultado <= 100) {
        return resultado
    } else if (resultado >= 50 && resultado <= 69) {
        return resultadoSomadoComExame
    } else {
        return resultado
    }



}




function exameEscolar(notaDoExame) {

    let resultadoDoExame = notaDoExame

    return resultadoDoExame


}



function escolherGeneroAluno(generoAluno) {
    let strAluno
    let generoDadosAluno = generoAluno


    if (generoDadosAluno == "feminino") {
        strAluno = "A Aluna "
        return strAluno

    } else if (generoDadosAluno == "masculino") {
        strAluno = "O Aluno "
        return strAluno
    } else {
        return status = false
    }

}



function escolherGeneroProfessor(generoProfessor) {
    let strProfessor
    let generoDadosProfessor = generoProfessor


    if (generoDadosProfessor == "feminino") {
        strProfessor = "A Professora "
        return strProfessor

    } else if (generoDadosProfessor == "masculino") {
        strProfessor = "O Professor "
        return strProfessor

    } else {
        return status = false
    }

}


module.exports = { // deixando a função pública
    escolherGeneroAluno,
    escolherGeneroProfessor,
    mediaEscolar,
    exameEscolar


}





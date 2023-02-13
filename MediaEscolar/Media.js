/************************************
 * Objetivo: criar um back end que serve para média escolar
 * Autor: Anderson Reis
 * Versão: 1.0
 ***************************************/
let status = true

function dadosPessoais(aluno, curso, professor, generoAluno, generoProfessor, disciplina) {

    var alunoDados = aluno
    var cursoDados = curso
    var professorDados = professor
    var generoDadosAluno = generoAluno
    var generoDadosProfessor = generoProfessor

    var disciplinaDados = disciplina

    var feminino = "feminino"
    var masculino = "masculino"



    if (!String(alunoDados) || !String(cursoDados) || !String(professorDados) || !String(generoDadosAluno) || !String(feminino) || !String(masculino) || !String(disciplinaDados) || !String(generoDadosProfessor)) {


        console.log('Você está digitando caracteres errado')

         status = false
    } else if (alunoDados == '' || cursoDados == '' || professorDados == '' || generoDadosAluno == '' || feminino == '' || masculino == '' || disciplinaDados == '' || generoDadosProfessor == '') {


        console.log('Você está digitando caracteres errado')
         status = false

    }else if(generoDadosAluno == feminino ||  generoDadosProfessor == feminino)  {
        generoAluno == "Aluna"
        generoDadosProfessor == "Aluna"
    }
    else{
       console.log("O aluno " + alunoDados + " foi " + mediaEscolar() + "na disciplina " +  disciplinaDados)
       
       
    }
    }




function exameEscolar(notaDoExame) {

    let resultadoDoExame = notaDoExame

    return resultadoDoExame



}

function mediaEscolar(nota1, nota2, nota3, nota4, notadoExame) {
    let resultado
    let resultadoSomadoComExame
    let nota1DadosDoAluno = Number(nota1)
    let nota2DadosDoAluno = Number(nota2)
    let nota3DadosDoAluno = Number(nota3)
    let nota4DadosDoAluno = Number(nota4)
    let notaDoExameDados = notadoExame




    if (isNaN(nota1DadosDoAluno) || isNaN(nota2DadosDoAluno) || isNaN(nota3DadosDoAluno) || isNaN(nota4DadosDoAluno || isNaN(notaDoExameDados))) {
        console.log('Erro: insiriu número')
        status = false
    } else if (nota1DadosDoAluno === '' || nota2DadosDoAluno === '' || nota3DadosDoAluno === '' || nota4DadosDoAluno === '' || notaDoExameDados === '') {
        console.log('Erro: insiriu vazio')
        status = false
    } else if (nota1DadosDoAluno < 0 || nota1DadosDoAluno > 100 || nota2DadosDoAluno < 0 || nota2DadosDoAluno > 100 || nota3DadosDoAluno < 0 || nota3DadosDoAluno > 100 || nota4DadosDoAluno < 0 || nota4DadosDoAluno > 100 || notaDoExameDados < 0 || notaDoExameDados > 100) {
        console.log('Erro: nota maior ou menor')
        status = false
    } else {
        resultado = (nota1DadosDoAluno + nota2DadosDoAluno + nota3DadosDoAluno + nota4DadosDoAluno) / 4



        if (resultado >= 70 && resultado <= 100) {

            console.log('Aprovado')
            return resultado
        } else if (resultado >= 50 && resultado <= 69) {
            console.log("você vai ter que fazer o exame")
            resultadoSomadoComExame = (resultado + exameEscolar(notaDoExameDados)) / 4
            if (resultadoSomadoComExame < 0 || resultadoSomadoComExame > 100) {
                status = false
            } else {
                return resultadoSomadoComExame
            }

        } else {
            console.log("Reprovado")
            return status
        }


    }

}

console.log(dadosPessoais('aluno', 'curso', 'professor', 'feminino', 'masculino', 'sdfsdf'))
console.log(mediaEscolar(100, 90, 80, 19, 20))


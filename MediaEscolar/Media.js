/************************************
 * Objetivo: criar um back end que serve para média escolar
 * Autor: Anderson Reis
 * Versão: 1.0
 ***************************************/
let status = true







function mediaEscolar(nota1, nota2, nota3, nota4) {

    let resultado
    let resultadoSomadoComExame
    let nota1DadosDoAluno = Number(nota1)
    let nota2DadosDoAluno = Number(nota2)
    let nota3DadosDoAluno = Number(nota3)
    let nota4DadosDoAluno = Number(nota4)
    let notaDoExameDados = notadoExame




    if (isNaN(nota1DadosDoAluno) || isNaN(nota2DadosDoAluno) || isNaN(nota3DadosDoAluno) || isNaN(nota4DadosDoAluno || isNaN(notaDoExameDados))) {
        console.log('Erro: insiriu número')
       return status = false
    } else if (nota1DadosDoAluno === '' || nota2DadosDoAluno === '' || nota3DadosDoAluno === '' || nota4DadosDoAluno === '' || notaDoExameDados === '') {
        console.log('Erro: insiriu vázio')
        return status = false
    } else if (nota1DadosDoAluno < 0 || nota1DadosDoAluno > 100 || nota2DadosDoAluno < 0 || nota2DadosDoAluno > 100 || nota3DadosDoAluno < 0 || nota3DadosDoAluno > 100 || nota4DadosDoAluno < 0 || nota4DadosDoAluno > 100 || notaDoExameDados < 0 || notaDoExameDados > 100) {
        console.log('Erro: nota maior ou menor do que o permitido')
        return status = false
    } else {
        resultado = (nota1DadosDoAluno + nota2DadosDoAluno + nota3DadosDoAluno + nota4DadosDoAluno) / 4
        resultadoSomadoComExame = (resultado + exameEscolar(notaDoExameDados)) / 5
        console.log(resultado)
        console.log(resultadoSomadoComExame)

        if (resultado >= 70 && resultado <= 100) {

            return 'Aprovado'
            
        } else if (resultado >= 50 && resultado <= 69) {
          
            
            if (resultadoSomadoComExame < 0 || resultadoSomadoComExame > 100) {
                return "Você digitou um número maior ou menor que o desejavel"
            }
             else if( resultadoSomadoComExame >= 70 && resultadoSomadoComExame <= 100) {
          
                return "Aprovado"
                
            }else if(resultadoSomadoComExame >= 50 && resultadoSomadoComExame <= 69){
                return "reprovado"
                
            }

        } else {
            return "Erro"
          
        }


    }

}











function exameEscolar(notaDoExame) {

    let resultadoDoExame = notaDoExame



    if (resultadoDoExame < 0 || resultadoDoExame > 100) {
        return "ERRO: Você digitou um número maior ou menor que o desejavel"
    }
    else{
        return resultadoDoExame
    }


    
       
        }
   





function escolherGeneroAluno(generoAluno){
    let strAluno 
    let generoDadosAluno = generoAluno
    
    
    if (  generoDadosAluno == "feminino") {
        strAluno = "A Aluna "
        return strAluno
        
    }  else if (generoDadosAluno == "masculino") {
         strAluno = "O Aluno "
         return strAluno
    }  else {
        console.log("Erro: de genero")
    }

}



function escolherGeneroProfessor(generoProfessor){
    let strProfessor 
    let generoDadosProfessor = generoProfessor
    
    if(!String(generoDadosProfessor) ){
    
        console.log("false")
    }
    else if (""){
    }
    else if (  generoDadosProfessor == "feminino") {
        strProfessor = "A Professora "
        return strProfessor
        
    }  else if (generoDadosProfessor == "masculino") {
        strProfessor = "O Professor "
        return strProfessor

    }  else {
      return   strProfessor
    }

}




function dadosPessoais(nomeAluno, curso, nomeProfessor, generoAluno, generoProfessor, disciplina) {

    let nomeAlunoDados = nomeAluno
    let cursoDados = curso
    let nomeProfessorDados = nomeProfessor
    let generoDadosAluno = generoAluno
    let generoDadosProfessor = generoProfessor
    let disciplinaDados = disciplina
   


    if (!String(nomeAlunoDados) || !String(cursoDados) || !String(nomeAlunoDados) || !String(generoDadosAluno)   || !String(disciplinaDados) || !String(generoDadosProfessor)) {


        console.log('Você está digitando caracteres errado')

        status = false
    } else if (nomeAlunoDados == '' || cursoDados == '' || nomeProfessorDados == '' || generoDadosAluno == ''  || disciplinaDados == '' || generoDadosProfessor == '') {


        console.log('Você está digitando caracteres errado')
        status = false

    } else {
        console.log(escolherGeneroAluno(generoDadosAluno) + " " + nomeAlunoDados + " teve o resultado: " + mediaEscolar(80,80,80,60,30) + " na disciplina " + disciplinaDados)
       


    }

}

module.exports = { // deixando a função pública
    dadosPessoais,
    escolherGeneroAluno,
    escolherGeneroProfessor,
    mediaEscolar,
    exameEscolar
    
}





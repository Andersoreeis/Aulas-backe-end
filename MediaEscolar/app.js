var media = require('./Media.js');
var readline = require('readline'); // importação
var entraDados = readline.createInterface({ // entrada de dados
    input: process.stdin,
    output: process.stdout

});
entraDados.question('Digite o nome do aluno: ', function (nome) {
let nomeALuno = nome

entraDados.question('Digite o nome do professor: ', function (nome) {
    let nomeProfessor = nome
    
    entraDados.question('Digite o sexo do aluno', function (sexo) {

        let generoAluno = sexo
        
        entraDados.question("Digite o sexo do professor", function (sexo) {

           let generoProfessor = sexo
           
           entraDados.question('Digite o nome do curso', function (curso) {

            let nomeCurso = curso
            
            entraDados.question("Digite o nome da disciplina", function (disciplina) {

                let nomeDisciplina = disciplina
                

                entraDados.question("Insira sua primeira nota", function(nota1){
                    nota1Dados = nota1

                    entraDados.question("Insira sua primeira nota", function(nota2){
                        nota2Dados = nota2

                        entraDados.question("Insira sua primeira nota", function(nota3){
                            nota3Dados = nota3

                            entraDados.question("Insira sua primeira nota", function(nota4){
                                nota4Dados = nota4

                             if(nomeALuno == '' || nomeProfessor == '' || generoAluno == '' || generoProfessor == ''){
                                console.log("Erro: você não colocou todos os dados")
                             }else if(nota1Dados == '' || nota2Dados == '' || nota3Dados == '' || nota4Dados ==  ''){
                                console.log("Erro: você não colocou todos os dados")
                             }else if(nota1Dados == isNaN || nota2Dados == isNaN || nota3Dados == isNaN || nota4Dados ==  isNaN){
                                console.log("Erro: não é um número")
                             }
                             else {

                              let resultadoFinal = media.mediaEscolar(nota1Dados, nota2Dados, nota3Dados, nota4Dados, 0)
                              if(resultadoFinal() >=50 || resultadoFinal()  <=69){
                                console.log("Você caiu na recuperação")
                                entraDados.question("Digite a nota do seu exame", function(exame){
                                    let resultadoFinalComExame = media.mediaEscolar(nota1Dados, nota2Dados, nota3Dados, nota4Dados, notaExame)
                                    if(resultadoFinalComExame >= 69 || resultadoFinalComExame<=100){
                                        console.log("Aprovado")
                                    }else {
                                        console.log("Reprovado")
                                    }
                                   
                                })
                              }else{
                                  if(resultadoFinal == false){
                                      entraDados.close
                                  }
                              }
                            }
                                

                            })
                        })
                    })
                })
            
        
            })
           })
        })
    })
})
})

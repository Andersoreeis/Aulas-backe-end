var media = require('./Media.js');
var readline = require('readline'); // importação
var entraDados = readline.createInterface({ // entrada de dados
    input: process.stdin,
    output: process.stdout

});
entraDados.question('Digite o nome do aluno: \n', function (nome) {
    let nomeALuno = nome

    entraDados.question('Digite o nome do professor: \n', function (nome) {
        let nomeProfessor = nome

        entraDados.question('Digite o sexo do aluno: \n', function (sexo) {

            let generoAluno = sexo

            entraDados.question("Digite o sexo do professor: \n", function (sexo) {

                let generoProfessor = sexo

                entraDados.question('Digite o nome do curso: \n', function (curso) {

                    let nomeCurso = curso

                    entraDados.question("Digite o nome da disciplina: \n", function (disciplina) {

                        let nomeDisciplina = disciplina


                        entraDados.question("Insira sua primeira nota: \n", function (nota1) {
                            let nota1Dados = nota1

                            entraDados.question("Insira sua segunda nota: \n", function (nota2) {
                                let nota2Dados = nota2

                                entraDados.question("Insira sua terceira nota: \n", function (nota3) {
                                    let nota3Dados = nota3

                                    entraDados.question("Insira sua quarta nota: \n", function (nota4) {
                                        let nota4Dados = nota4

                                        if (nomeALuno == '' || nomeProfessor == '' || generoAluno == '' || generoProfessor == '' || nomeCurso == '' || nomeDisciplina == '') {
                                            console.log("Erro: você não colocou todos os dados")
                                        } else if (nota1Dados == '' || nota2Dados == '' || nota3Dados == '' || nota4Dados == '') {
                                            console.log("Erro: você não colocou todos os dados")
                                        } else if (isNaN(nota1Dados) || isNaN(nota2Dados) || isNaN(nota3Dados) || isNaN(nota4Dados)) {
                                            console.log("Erro: não é um número")
                                        }
                                        else if (nota1Dados < 0 || nota1Dados > 100 || nota2Dados < 0 || nota2Dados > 100 || nota3Dados < 0 || nota3Dados > 100 || nota4Dados < 0 || nota4Dados > 100) {
                                            console.log("Erro número menor ou maior do que o permitido")
                                        }
                                        else {


                                            let resultadoFinal = media.mediaEscolar(nota1Dados, nota2Dados, nota3Dados, nota4Dados, 0)


                                            if (resultadoFinal >= 50 && resultadoFinal <= 69) {

                                                console.log("Você caiu na recuperação")
                                                console.log(resultadoFinal)

                                                entraDados.question("Digite a nota do seu exame: \n", function (exame) {
                                                    let notaExame = exame
                                                    let resultadoFinalComExame = media.mediaEscolar(nota1Dados, nota2Dados, nota3Dados, nota4Dados, notaExame)
                                                    console.log(resultadoFinalComExame)
                                                    if (notaExame = '') {
                                                        console.log("Erro: Algum dado fornecido está vázio")
                                                    }
                                                    else if (isNaN(notaExame)) {
                                                        console.log("Erro: você digitou caracteres errado")
                                                    }
                                                    else if (notaExame < 0 || notaExame > 100) {
                                                        console.log("Erro número menor ou maior do que o permitido")
                                                    } else {

                                                        if (resultadoFinalComExame >= 70 && resultadoFinalComExame <= 100) {
                                                            console.log(media.escolherGeneroAluno(generoAluno) + " " + nomeALuno + " foi " + "Aprovado" + " na disciplina " + nomeDisciplina)
                                                            console.log("Curso: " + nomeCurso);
                                                            console.log("Professor: " + nomeProfessor)
                                                            console.log("Nota do aluno: nota1: " + nota1Dados + " nota2: " + nota2Dados + "nota3: " + nota3Dados + " nota4: " + nota4Dados + "Exame: " + media.exameEscolar(notaExame))
                                                            console.log("Média final: " + resultadoFinal);
                                                            console.log("Média final do exame " + resultadoFinalComExame)
                                                        }
                                                        else if (resultadoFinalComExame >= 50 && resultadoFinalComExame <= 69) {
                                                            console.log(media.escolherGeneroAluno(generoAluno) + " " + nomeALuno + " foi " + "Aprovado" + " na disciplina " + nomeDisciplina)
                                                            console.log("Curso: " + nomeCurso);
                                                            console.log("Professor: " + nomeProfessor)
                                                            console.log("Nota do aluno: nota1: " + nota1Dados + " nota2: " + nota2Dados + "nota3: " + nota3Dados + " nota4: " + nota4Dados + "Exame: " + media.exameEscolar(notaExame))
                                                            console.log("Média final: " + resultadoFinal);
                                                            console.log("Média final do exame " + resultadoFinalComExame)
                                                        } else if (resultadoFinalComExame >= 0 && resultadoFinalComExame <= 49) {
                                                            console.log(media.escolherGeneroAluno(generoAluno) + " " + nomeALuno + " foi " + "Reprovado" + " na disciplina " + nomeDisciplina)
                                                            console.log("Curso: " + nomeCurso);
                                                            console.log("Professor: " + nomeProfessor)
                                                            console.log("Nota do aluno: nota1: " + nota1Dados + " nota2: " + nota2Dados + "nota3: " + nota3Dados + " nota4: " + nota4Dados + "Exame: " + media.exameEscolar(notaExame))
                                                            console.log("Média final: " + resultadoFinal);
                                                            console.log("Média final do exame " + resultadoFinalComExame)
                                                        } else {
                                                            if (resultadoFinalComExame == false) {
                                                                entraDados.close
                                                            }
                                                        }

                                                    }


                                                })
                                            }
                                            else if (resultadoFinal >= 70 && resultadoFinal <= 100) {
                                                console.log(media.escolherGeneroAluno(generoAluno) + " " + nomeALuno + " foi " + "Aprovado" + " na disciplina " + nomeDisciplina)
                                                console.log("Curso: " + nomeCurso);
                                                console.log("Professor: " + nomeProfessor)
                                                console.log("Nota do aluno: nota1: " + nota1Dados + " nota2: " + nota2Dados + "nota3: " + nota3Dados + " nota4: " + nota4Dados)
                                                console.log("Média final: " + resultadoFinal);

                                            }
                                            else if (resultadoFinal >= 0 && resultadoFinal <= 49) {
                                                console.log(media.escolherGeneroAluno(generoAluno) + " " + nomeALuno + " foi " + "Reprovado" + " na disciplina " + nomeDisciplina)
                                                console.log("Curso: " + nomeCurso);
                                                console.log("Professor: " + nomeProfessor)
                                                console.log("Nota do aluno: nota1: " + nota1Dados + " nota2: " + nota2Dados + " nota3: " + nota3Dados + " nota4: " + nota4Dados)
                                                console.log("Média final: " + resultadoFinal);

                                            }

                                            else {
                                                if (resultadoFinal == false) {
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


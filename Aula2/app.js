/***********************************************************************************************************
 * Objetivo calcular a média de quatro notas escolares
 * Autor: Anderson Reis Gonçalves
 * Data: 27/01/2023
 * Versão 1.0
 *************************************************************************************************************/

/* Criação de váriaveis 
var = escobo global
let = escobo local pode ser criadas em funções e só vai poder ser utilizada naquela função 
const = pode ser usada para valores fixos que nunca sofrerá alteração
*/
var readline = require('readline') //inport da biblioteca readline
var entradaDados = readline.createInterface({ // Cria o objeto que vai ser expecialista em entrada de dados
    input: process.stdin,
    output: process.stdout
})

var portugues
var matematica
var biologia
var quimica

entradaDados.question("Digite suas nota de Português \n", function (nota1) {
    portugues = nota1


    entradaDados.question("Digite sua nota de Matemática  \n", function (nota2) {
        matematica = nota2

        entradaDados.question("Digite sua nota de Biologia  \n", function (nota3) {
            biologia = nota3

            entradaDados.question("Digite sua nota de Quimica \n ", function (nota4) {
                quimica = nota4


                function calcularMedia() {
                    if ((isNaN(portugues)|| isNaN(matematica) || isNaN(quimica) || isNaN(biologia)) ) {
                        return "Erro:  não é um número"
                    } 

                    else if ( (parseFloat(portugues) || parseFloat(matematica) || parseFloat(quimica) || parseFloat(biologia)) > 10) {
                        return "Erro: número maior do que o permitido"
                    }

                     else if ( (parseFloat(portugues) || parseFloat(matematica) || parseFloat(quimica) || parseFloat(biologia)) == '') {
                        return "Erro: falta de caracteres"
                    }

                     else {
                        var calcular = ((parseFloat(portugues) + parseFloat(matematica) + parseFloat(quimica) + parseFloat(biologia)) / 4)
                        if (calcular >= 6) {
                            return calcular + " Você está aprovado"
                        } 

                        else {
                            return calcular + " Você está reprovado"
                        }

                    }

                }

                console.log(calcularMedia())
            })



        })
    })
})





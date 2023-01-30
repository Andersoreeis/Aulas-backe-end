/**************************************************************************8
 * Objetivo criar um app que tenha entrada de 02 valore e realize as quatro operações matemáticas
 * Autor: Anderson Reis
 * Versão: 1.0
 */


var readline = require('readline') //inport da biblioteca readline
var entradaDados = readline.createInterface({ // Cria o objeto que vai ser expecialista em entrada de dados
    input: process.stdin,
    output: process.stdout
})
var valor1
var valor2

entradaDados.question("***********CALCULADORA************\n Ensira o seu nome: \n ", function (nome) {
    entradaDados.question("Insira o primeiro valor: \n", function (primeiroValor) {

        entradaDados.question("Insira a operação que vai ser utilizada \n (1) Adição \n (2) Subtração \n (3) Divisão \n (4) Multiplicação \n", function (operador) {

            if(operador == "1"){
                console.log("***********ADIÇÃO************")
                operador = "+"

            }else if( operador == "2"){
                console.log("***********SUBTRAÇÃO************")
                operador = "-"

            }else if( operador == "3"){
                console.log("***********DIVISÃO************")
                operador = "/"

            }else if( operador == "4"){
                console.log("***********MULTIPLICAÇÃO************")
                operador = "x"
            }else{
                return "Erro"
            }
      
            entradaDados.question("Insira o segundo valor: \n", function (segundoValor) {
                valor1 = primeiroValor.replace(",", ".")
                valor2 = segundoValor.replace(",", ".")

            
                

                function calcular() {
                    if (valor1 == '' || operador == '' || valor2 == '') {
                        return "Erro: Algum dado que senhor forneceu está vázio"
                    }
                    else if (isNaN(valor1) || isNaN(valor2)) {
                        return "Erro: você não digitou o número que deseja"
                    }
                    else if (operador != '+' && operador != '-' && operador != '/' && operador != 'x') {
                        return "Erro: você não digitou o operador certo"
                    }
                    else if (operador == '/' && parseFloat(valor2) == 0) {
                        return "Erro: não dá para dividir por zero!"
                    }
                    else {
                        switch (operador) {
                            case '+':
                                return parseFloat(primeiroValor) + parseFloat(segundoValor)
                            case '-':
                                return parseFloat(primeiroValor) - parseFloat(segundoValor)
                            case '/':
                                return parseFloat(primeiroValor) / parseFloat(segundoValor)
                            case 'x':
                                return parseFloat(primeiroValor) * parseFloat(segundoValor)
                            default:
                                return " Operador não identificado"
                        }
                    }


                }
                console.log("***********RESULTADO************")
                console.log("         (" + primeiroValor + " " + operador + " " + segundoValor  + " = " +  calcular() +" )")
               
                

            })
        })
    })


})
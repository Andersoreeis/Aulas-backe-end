/****************************************************************************
 * Objetivo: Fazer uma versão de uma calculadora feita pelo professor
 * Autor: Anderson Reis
 * Versão: 1.1
 ****************************************************************************/

var matematica = require('./modulo/calculadora.js')

var readline = require('readline') // importa a bibliotéca
const {
    write
} = require('fs')
var entradaDados = readline.createInterface({ // cria um objeto para manipulação de dados
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Digite o valor1: \n', function (numero1) {
    let valor1 = numero1.replace('.', ',')

    entradaDados.question('Digite o valor2: \n', function (numero2) {
        let valor2 = numero2.replace('.', ',')

        entradaDados.question('Escolha uma operação: (SOMAR | SUBTRAIR | MULTIPLICAR | DIVIDIR) \n', function (tipoDeCalculo) {
            let operacao = tipoDeCalculo
            let resultado

            if (valor1 == '' || valor2 == '' || operacao == '') {
                console.log('Erro: Não é possivel calcular se algum dos dados inseridos estiver em branco.')
            } else if (isNaN(valor1) || isNaN(valor2)) {
                console.log('Não é possivel digitar se os dados inseridos não forem números.')
            } else {

                resultado = matematica.calculadora(valor1, valor2, operacao)


                if (resultado === false) {
                    entradaDados.close();

                } else {
                    console.log(resultado)
                }


            }







        })
    })
})
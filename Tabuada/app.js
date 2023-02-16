/**********************************************
 * Autor: Anderosn Reis
 * Objetivo fazer duas tabuadas 
 * version 1.0
 */
var tabuada = require('./modelo/tabuada.js')
var readline = require('readline'); // importação
var entradaDados = readline.createInterface({ // entrada de dados
    input: process.stdin,
    output: process.stdout

});

entradaDados.question("Insira o valor o multiplicando da primeira tabuada: \n", function (primeiroMultiplcando) {
    let primeirarRespostaMultiplicando = primeiroMultiplcando
    entradaDados.question("Insira o valor do multiplicando da segunda tabuada: \n", function (segundoMultiplicando) {
        let segundaRespostaMultiplicando = segundoMultiplicando
        entradaDados.question("Insira o valor do multiplicador das duas tabuada: \n", function (multiplicador) {
            let respostaMultiplicador = multiplicador

            if (isNaN(primeirarRespostaMultiplicando) || isNaN(segundaRespostaMultiplicando) || isNaN(respostaMultiplicador)) {
                console.log('Erro: o número que você digitou não é um número')
                entradaDados.close
            } else if (primeirarRespostaMultiplicando == '' || segundaRespostaMultiplicando == '' || respostaMultiplicador == '') {
                console.log('Erro algum dado fornecido está vázio')
                entradaDados.close
            } else if (primeirarRespostaMultiplicando <= 1 || primeirarRespostaMultiplicando >= 101 && segundaRespostaMultiplicando <= 1 || segundaRespostaMultiplicando >= 101) {
                console.log('Erro: algum dado fornecido atingiu o limite máximo permitido')
                entradaDados.close
            } else if (respostaMultiplicador <= 0 || respostaMultiplicador >= 50) {
                console.log('Erro: algum dado fornecido atingiu o limite máximo permitido')
                entradaDados.close
            } else {
                let calculo = tabuada.calcularTabuada(primeirarRespostaMultiplicando,segundaRespostaMultiplicando,respostaMultiplicador)
                if(calculo == false){
                    entradaDados.close
                }
            }
        })
    })
})

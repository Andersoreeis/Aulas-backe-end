var calculo = require('./modelo/imparOuPar.js')
var readline = require('readline')
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
entradaDados.question('Insira o número de onde irá começar: \n', function (numeroInicial) {
    let numeroInicialResposta = numeroInicial
    entradaDados.question('Insira o número final: \n', function (numeroFinal) {
        let numeroFinalResposta = numeroFinal



        if (numeroInicialResposta == '' || numeroFinalResposta == '') {
            console.log('Erro: algum dado fornecido está vázio');

        } else if (isNaN(numeroInicialResposta) || isNaN(numeroFinalResposta)) {
            console.log('Erro: não é um número');

        } else if (numeroInicialResposta <= -1 || numeroFinalResposta >= 501) {
            console.log('Erro: valor não permitido, digite um valor certo');
        }
        else if (numeroInicialResposta >= numeroFinalResposta) {
            console.log('Erro: Número inicial não pode ser maior que o número final');
        } else {
            let mostrarResultado = calculo.imparOuPar(numeroInicialResposta, numeroFinalResposta)
            if(mostrarResultado == false){
                entradaDados.close
            }
        }
    })
})

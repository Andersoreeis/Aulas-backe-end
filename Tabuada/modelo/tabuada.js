const { stat } = require("fs")

function calcularTabuada(primeiroMultiplicando, segundoMultiplicando, multiplicador) {
    let primeiroMultiplicandoDados = Number(String(primeiroMultiplicando).replace(',', '.'))
    let segundoMultiplicandoDados = Number(String(segundoMultiplicando).replace(',', '.'))
    let multiplicadorDados = Number(multiplicador)
    let status = true
    let resultadoPrimeiraTabuada
    let resultadoSegundaTabuada

    if (isNaN(primeiroMultiplicandoDados) || isNaN(segundoMultiplicandoDados)) {
        return status = false
    } else if (primeiroMultiplicando == 0 || segundoMultiplicando == 0) {
        return status = false
    } else {
        for (let contador = 0; contador < multiplicadorDados; contador++) {
            resultadoPrimeiraTabuada = primeiroMultiplicandoDados * contador

            console.log(primeiroMultiplicando + " X " + contador + " = " + resultadoPrimeiraTabuada)

        }
        console.log('                                ');
        for (let contador = 0; contador < multiplicadorDados; contador++) {

            resultadoSegundaTabuada = segundoMultiplicandoDados * contador

            console.log(segundoMultiplicandoDados + " X " + contador + " = " + resultadoSegundaTabuada)
        }
        return status
    }
}

module.exports = { // deixando a função pública
    calcularTabuada
}
/*********************************************************
 * Objetivo: Criar uma tabuada
 * Data: 09/02/2023
 * Autor: Anderson Reis
 * Versão:1.0
 * 
 *********************************************************/
const calcularTabuada = function (multiplicando, maxMultiplicador) { // função tabuada
    let valorInicial = Number(String(multiplicando).replace(',', '.')); // transformando em número e depois trocando o caractere ponto por virgula

    let valorMaximo = Number(String(maxMultiplicador).replace(',', '.')); // transformando em número e depois trocando o caractere ponto por virgula

    let status = true // status mostra se for true ou false



    let resultado

    if (isNaN(valorInicial) || isNaN(valorMaximo)) { // caso não seja número colocado na função
        status = false

    } else if (valorInicial == 0 || valorMaximo == 0) { // caso não seja 0 colocado na função
        status == false
    } else {

        for (let contador = 0; contador < valorMaximo; contador++) { // vai fazer um loop até o número que o usuário deseja


            resultado = valorInicial * contador //calculo


            console.log(valorInicial + ' X ' + contador + ' = ' + resultado) // imprimindo o resultado
            contador++

        }


    }
    return status


}



module.exports = { // deixando a função pública
    calcularTabuada
}
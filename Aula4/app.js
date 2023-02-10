var tabuada = require('./modulo/tabuada.js'); // importação
var readline = require('readline'); // importação
var entraDados = readline.createInterface({ // entrada de dados
    input: process.stdin,
    output: process.stdout

});
entraDados.question("Insira o multiplicando: \n", function (multiplicando) { // pergunta ao usuário
    let primeiraRespostaUsuario = multiplicando; // guardando o dado na váriavel
    entraDados.question("Insira o multiplicador: \n", function (multiplicador) { // pergunta ao usuário
        let segundaRespostaUsuario = multiplicador;// guardando o dado na váriavel
        


        if (isNaN(primeiraRespostaUsuario) || isNaN(segundaRespostaUsuario)) { // condição caso não seja número
            console.log( 'Erro: não é um número');
            

        } else if (primeiraRespostaUsuario == '' || segundaRespostaUsuario == '') { // condição caso  esteja vázio
            console.log( 'Erro: está vázio')
        } else if (primeiraRespostaUsuario == 0 || segundaRespostaUsuario == 0) { // condição caso o número seja zero
           console.log('Erro: tabuada de zero, desnecessário')
        } else {


            let resposta = tabuada.calcularTabuada(primeiraRespostaUsuario, segundaRespostaUsuario); // váriavel resposta recebendo o valor do import tabuada
            if(resposta == false){ // caso seja false vai fechar o programa
                entraDados.close()  
            }

        }





    })
})
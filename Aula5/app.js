/**********************************
 * Objetivo: Utilizar codigos e métodos de array
 * Data 24/02/2023
 * Autor: Marcel
 * Versão: 1.0
 
 ***********************************/
// [] Representa um objeto do tipo array
// Representa um objeto do tipo JSON

const listaNomes = ['Marcel', 'João', 'Pedro', 'Antonio', 'Carlos', 'Fernando'];
const listaProdutos = ['Teclado','Mouse','Monitor','gabinete','HD', 'Memória Ram']
const exibindoDados = function () {
    console.log(typeof (listaNomes)) // Verifica o tipo de dados do elemento listaNomes
    console.log(typeof (listaNomes[0])) // Verifica o tipo de dados do conteudo listaNomes
    console.log(listaNomes) // Exibe todo o array
    console.log(listaNomes[0]) //Exibe o conteudo de um indice de um array
    console.table(listaNomes) // console.table permite mostrar o array em forma de tabela
    console.log(`O nome da pessoa é ${listaNomes[2]}`);
    console.log(listaNomes.length);

    for (let contadorFor = 0; contadorFor < listaNomes.length; contadorFor++) {
        console.log(`O nome do Aluno é ${listaNomes[contadorFor]}`);

    }


    let contador = 0
    while (contador < listaNomes.length) {
        console.log(`O nome da pessoa é ${listaNomes[contador]}`);
        contador++

    }

    listaNomes.forEach(function (mostrarNome) { // forEach só funciona se for array
        console.log(mostrarNome);

    })
    for (nomes in listaNomes) {
        console.log(`O nome do aluno do for Each ${listaNomes[nomes]}`); // for sem precisar do valor inicial e valor final
    }
}

const manipulandoDados = function () {

    listaProdutos.push('Gabinete', 'Placa de Vídeo', 'Processador', 'Processador', 'Processador') // push acrescenta algo no final do Array
    listaProdutos.unshift('HD', 'SSD','Placa-Mãe') //  Acrescenta novos dados no início do Array reorganizando todoso os elementos
    listaProdutos.pop() // remove o ultimo elemento do Array
    listaProdutos.shift() // remove o primeiro elemento do Array
    console.table(listaProdutos)
    const novosProdutos = listaProdutos.slice() // para copiar o array
    console.log(novosProdutos);
   const encontrar = listaProdutos.indexOf('Processador') // para buscar algo que está dentro do array, se o retorno for -1 o dado não existe
    console.log(encontrar)
    if(listaProdutos.indexOf('Teclado') >= 0){
        console.log('Item encontrado')
    }else{
        console.log('Item não encontrado');
        
    }
}

const removerProdutos = function (nomeProduto) {
    let nome = nomeProduto
    let indice = listaProdutos.indexOf(nome)
    let status 
    if(indice >= 0){
        listaProdutos.splice(indice, 1) // splice permite remover o elemento do Array de acordo com seu indice, possui dois paramentros o indice e a quantidade de items removidos (indice, Número)
        status = true
    }else{
        return false
        status = false
    }

    return status
}

console.table(listaProdutos);
console.log(removerProdutos('Monitor'));
console.table(listaProdutos);

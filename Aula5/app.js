/**********************************
 * Objetivo: Utilizar codigos e métodos de array
 * Data 24/02/2023
 * Autor: Marcel
 * Versão: 1.0
 
 ***********************************/
// [] Representa um objeto do tipo array
// Representa um objeto do tipo JSON

const listaNomes = ['Marcel', 'João', 'Pedro', 'Antonio', 'Carlos', 'Fernando'];
const listaProdutos = ['Teclado', 'Mouse', 'Monitor', 'gabinete', 'HD', 'Memória Ram']
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
    listaProdutos.unshift('HD', 'SSD', 'Placa-Mãe') //  Acrescenta novos dados no início do Array reorganizando todoso os elementos
    listaProdutos.pop() // remove o ultimo elemento do Array
    listaProdutos.shift() // remove o primeiro elemento do Array
    console.table(listaProdutos)
    const novosProdutos = listaProdutos.slice() // para copiar o array
    console.log(novosProdutos);
    const encontrar = listaProdutos.indexOf('Processador') // para buscar algo que está dentro do array, se o retorno for -1 o dado não existe
    console.log(encontrar)
    if (listaProdutos.indexOf('Teclado') >= 0) {
        console.log('Item encontrado')
    } else {
        console.log('Item não encontrado');

    }
}

const removerProdutos = function (nomeProduto) {
    let nome = nomeProduto
    let indice = listaProdutos.indexOf(nome)
    let status
    if (indice >= 0) {
        listaProdutos.splice(indice, 1) // splice permite remover o elemento do Array de acordo com seu indice, possui dois paramentros o indice e a quantidade de items removidos (indice, Número)
        status = true
    } else {
        return false
        status = false
    }

    return status
}


/************************************************************************************************
 * JSON é composto : chave(atributo) e valor
 * Chave    Valor     Chave  Valor
 * {nome: 'Anderson', email:'email'}
 * 
 * 
 */


const listagemProdutos = function () {
    // let listProdutosJSON = {produtos: listaProdutos, clientes: listaNomes}
    let listProdutosJSON = {}
    listProdutosJSON.produtos = listaProdutos
    listProdutosJSON.clientes = listaNomes


    console.log(listProdutosJSON)
    console.log(listProdutosJSON.produtos)
    console.log(listProdutosJSON.clientes)
    console.log(listProdutosJSON.produtos[0])
    console.log(listProdutosJSON.clientes[4])

}



let listProdutosJSON = {}

let listProdutosArray = [{
        nome: 'Monitor',
        quantidade: 300,
        marca: 'DELL',
        valor: 1000,
        codigo: 1,

    },
    {
        nome: 'Monitor',
        quantidade: 240,
        marca: 'LG',
        valor: 1300,
        codigo: 2
    },
    {
        nome: 'Teclado',
        quantidade: 140,
        marca: 'DELL',
        valor: 300,
        codigo: 3
    },
    {
        nome: 'Teclado',
        quantidade: 190,
        marca: 'LG',
        valor: 360,
        codigo: 4
    },
    {
        nome: 'Teclado',
        quantidade: 340,
        marca: 'Logitech',
        valor: 600,
        codigo: 5
    },
    {
        nome: 'Teclado',
        quantidade: 890,
        marca: 'Razer',
        valor: 1360,
        codigo: 6
    },
    {
        nome: 'Mouse',
        quantidade: 749,
        marca: 'Razer',
        valor: 940,
        codigo: 7
    },
    {
        nome: 'Mouse',
        quantidade: 749,
        marca: 'Logitech',
        valor: 340,
        codigo: 8
    },

]
// Array de cores
let listCoresDELL = ["Preto", "Branco", "Cinza"]
let listCoresLG = ["Preto", "Cinza"]
let listCoresTecladoArray = ["Preto", "Branco", "Cinza", "Rosa", "Azul"]
let listCoresMouseArray = ["Preto", "Branco", "Cinza", "Rosa", "Azul", "Verde", "Amarelo", "Vermelho", "Roxo"]

//Array para modelos
let listModelosMonitor = ["LCD", "LED", "OLED", "4k", "IPS"]
let listModeloTeclado = ["Mecanico", "Semi-Mecanico", "Membrana", "Óptico"]
// Adiciona o array de produtos dentro de um JSON
listProdutosJSON.produtos = listProdutosArray

// Adicionar cores aos produtos
listProdutosJSON.produtos[0].cores = listCoresDELL // monitor
listProdutosJSON.produtos[1].cores = listCoresLG // monitor
listProdutosJSON.produtos[2].cores = listCoresDELL // teclado
listProdutosJSON.produtos[3].cores = listCoresTecladoArray // teclado
listProdutosJSON.produtos[4].cores = listCoresTecladoArray // teclado
listProdutosJSON.produtos[5].cores = listCoresTecladoArray // teclado
listProdutosJSON.produtos[6].cores = listCoresMouseArray // mouse
listProdutosJSON.produtos[7].cores = listCoresMouseArray // mouse

// Adicionar modelos aos monitores e teclados
listProdutosJSON.produtos[0].modelo = listModelosMonitor // monitor
listProdutosJSON.produtos[1].modelo = listModelosMonitor // monitor
listProdutosJSON.produtos[2].modelo = listModeloTeclado // teclado
listProdutosJSON.produtos[3].modelo = listModeloTeclado // teclado
listProdutosJSON.produtos[4].modelo = listModeloTeclado // teclado
listProdutosJSON.produtos[5].modelo = listModeloTeclado // teclado



listProdutosJSON.produtos.forEach(function (itemProduto) {
    console.log(`Nome: ${ itemProduto.nome }`);
    console.log(`Marca: ${ itemProduto.marca }`);
    console.log(`Valor: ${ itemProduto.valor }`);

    if(itemProduto.cores != undefined){
        itemProduto.cores.forEach(function (itemCores) {
            console.log(`***Cores: ${ itemCores }`);
        })
    }
 

    if (itemProduto.modelo != undefined) {
        itemProduto.modelo.forEach(function (itemModelo) {
            console.log(`***Modelo: ${ itemModelo }`);
        })

    }


console.log('--------------------------');





})
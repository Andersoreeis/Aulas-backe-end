const listaProdutos = ['Monitor', 'Teclado', 'Mouse', 'Gabinete'];

const removerProduto = function (lista, produto) {
    //entradas
    const removerProduto = produto
    const listaProdutos = lista
    const copiaProdutos = listaProdutos.slice();
    const indice = copiaProdutos.indexOf(removerProduto);
    let status

    //processamentos
    if (indice >= 0) {
        copiaProdutos.splice(indice, 1);
        console.log('Nova Tabela com produto selecionado removido');
        console.table(copiaProdutos);
        status = true

    } else {
        console.log("Erro: produto não encontrado")
        status = false
    }
    // saídas
    return status

}

removerProduto(listaProdutos, 'Monitor');
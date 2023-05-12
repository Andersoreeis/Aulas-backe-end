/**********************************
 * Objetivo: Criar funçoes que retorna só os estados do Brasil, 
 * Data 24/02/2023
 * Autor: Marcel
 * Versão: 1.0
 
 ***********************************/

const estadosBrasilJSON = require('./estados_cidades');

const getListaDeEstados = () => {
    const listaEstadosJSON = {}
    const listaEstadosArray = []

    estadosBrasilJSON.estados.forEach(function (estado) {
        listaEstadosArray.push(estado.sigla)

    })
    listaEstadosJSON.uf = listaEstadosArray
    listaEstadosJSON.quantidade = listaEstadosArray.length

    return listaEstadosJSON

}

const getDadosEstado = (estadoP) => {

    let listaEstadosJSON = {}
    const estadoRecebido = estadoP.toUpperCase()
    let status


    estadosBrasilJSON.estados.forEach(function (estado) {

        if (estado.sigla.toUpperCase() == estadoRecebido) {
            listaEstadosJSON.uf = estado.sigla
            listaEstadosJSON.descricao = estado.nome
            listaEstadosJSON.capital = estado.capital
            listaEstadosJSON.regiao = estado.regiao
            status = true

        }


    })

    if (status) {
        return listaEstadosJSON
    } else {
        return status = false
    }

}







const getCapitalEstado = (estadoP) => {

    let listaEstadosJSON = {}
    const estadoRecebido = estadoP.toUpperCase()
    let status



    estadosBrasilJSON.estados.forEach(function (estado) {

        if (estado.sigla.toUpperCase() == estadoRecebido) {
            listaEstadosJSON.uf = estado.sigla
            listaEstadosJSON.descricao = estado.nome
            listaEstadosJSON.capital = estado.capital
            status = true
        }

    })


    if (status) {
        return listaEstadosJSON
    } else {
        return status = false
    }
}











const getEstadosRegiao = (regiao) => {
    const regiaoRecebida = regiao.toUpperCase()
    let listaEstadosJSON = {}
    const listaEstadosArray = []
    let status

    estadosBrasilJSON.estados.forEach(function (estado) {
        if (estado.regiao.toUpperCase() == regiaoRecebida) {
            listaEstadosJSON.regiao = estado.regiao
            listaEstadosArray.push(`uf: ${estado.sigla}, descricao: ${estado.nome}`)
            listaEstadosJSON.estados = listaEstadosArray
            status = true
        }

    })

    if (status) {
        return listaEstadosJSON
    } else {
        return status = false
    }

}



const getCapitalPais = () => {

    let listaEstadosJSON = {}
    const listaEstadosArray = []
    let status

    estadosBrasilJSON.estados.forEach(function (estado) {

        if (estado.capital_pais != undefined) {

            const listaNova = {
                capital_atual: estado.capital_pais.capital,
                uf: estado.sigla,
                descricao: estado.sigla,
                capital: estado.capital,
                capital_pais_ano_inicio: estado.capital_pais.ano_inicio,
                capital_pais_ano_fim: estado.capital_pais.ano_fim
            }
            listaEstadosArray.push(listaNova)

            listaEstadosJSON.capitais = listaEstadosArray
            status = true

        }


    })
    if (status) {
        return listaEstadosJSON
    } else {
        return status = false
    }

}



const getCidades = (siglaEstado) => {
    let listaEstadosJSON = {}
    const listaEstadosArray = []
    siglaEstadoRecebido = siglaEstado.toUpperCase()
    let status
    estadosBrasilJSON.estados.forEach(function (estado) {
        if (estado.sigla.toUpperCase() == siglaEstadoRecebido) {
            listaEstadosJSON.uf = estado.sigla
            listaEstadosJSON.descricao = estado.nome
            listaEstadosJSON.quantidade_cidades = estado.cidades.length
            estado.cidades.forEach(function (pegarCidade) {
                listaEstadosArray.push(pegarCidade.nome)
            })
            status = true
            listaEstadosJSON.cidade = listaEstadosArray
        }
    })

    if (status) {
        return listaEstadosJSON
    } else {
        return status = false
    }

}



console.log(getCidades('AC'));




module.exports = {
    getListaDeEstados,
    getDadosEstado,
    getCapitalEstado,
    getEstadosRegiao,
    getCapitalPais,
    getCidades
}
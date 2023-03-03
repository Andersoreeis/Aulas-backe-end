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

    const listaEstadosJSON = {}
    const estadoRecebido = estadoP
    let status = true


    estadosBrasilJSON.estados.forEach(function (estado) {

        if (estado.sigla == estadoRecebido) {
            listaEstadosJSON.uf = estado.sigla
            listaEstadosJSON.descricao = estado.nome
            listaEstadosJSON.capital = estado.capital
            listaEstadosJSON.regiao = estado.regiao

        } else {
            status = false

        }

    })

    if (status = true) {
        return listaEstadosJSON
    } else {
        return status
    }


}


const getCapitalEstado = (estadoP) => {

    const listaEstadosJSON = {}
    const estadoRecebido = estadoP
    let status 


    estadosBrasilJSON.estados.forEach(function (estado) {

        if (estado.sigla == estadoRecebido) {
            listaEstadosJSON.uf = estado.sigla
            listaEstadosJSON.descricao = estado.nome
            listaEstadosJSON.capital = estado.capital


        } else {
            status = false

        }

    })

    if (status = false) {
        return status
    } else {
        return listaEstadosJSON
        
    }


}

const getEstadosRegiao = (regiao) => {
    const regiaoRecebida = regiao
    const listaEstadosJSON = {}
    const listaEstadosArray = []
    let status

    estadosBrasilJSON.estados.forEach(function (estado) {
        if (estado.regiao == regiaoRecebida) {
            listaEstadosJSON.regiao = estado.regiao
            listaEstadosArray.push(`uf: ${estado.sigla}, descricao: ${estado.nome}`)
            listaEstadosJSON.estados = listaEstadosArray
        } else {
            status = false
        }



    })

  if(status = false) {
     return listaEstadosJSON = false
  }else{
    return  listaEstadosJSON
}
  

}
const getCapitalPais(){

    const listaEstadosJSON = {}
    const listaEstadosArray = []
    
    estadosBrasilJSON.estados.forEach(function (estado) {
        listaEstadosJSON.capitais = listaEstadosArray
        
        listaEstadosArray.push(`capital atual  ${estado.capital_pais.capital}`, `uf: ${estado.sigla}`, `descricao: ${estado.nome}`, `capital: ${estado.capital}`)
        


    })
}


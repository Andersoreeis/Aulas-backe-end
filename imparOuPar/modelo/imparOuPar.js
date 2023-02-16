function imparOuPar(primeiroNumero, segundoNumero){
let numeroIncial = Number(primeiroNumero)
let numeroFinal = Number(segundoNumero)


for(let contadorPar = 0; contadorPar< numeroFinal ;  contadorPar++){
    if((contadorPar % 2) == 0){
        console.log( contadorPar +" Número par")
    }
}
    console.log(                    )
for(let contadorImpar = 0 ;  contadorImpar < numeroFinal ; contadorImpar++){
    if((contadorImpar % 2) != 0){
        console.log( contadorImpar +" Número Impar")
    }
}
return false
}

module.exports = {
    imparOuPar
}
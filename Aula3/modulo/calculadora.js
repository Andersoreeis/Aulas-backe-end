/**************************************************
 * Objetivo: Arquivo de funções para calculos matemáticos
 * Data : 03/02/2023
 * Autor: Anderson Reis
 * Versão: 1.0
 **************************************************/

const calculadora = function (numero1, numero2, tipoCalculo) {
   let valor1 = Number(numero1)
   let valor2 = Number(numero2)
   let operacao = tipoCalculo.toUpperCase()
   let resultado
   let status = true

   // if (operacao == 'SOMAR') {
   //    resultado = valor1 + valor2
   // } else if (operacao == 'SUBTRAIR') {
   //    resultado = valor1 - valor2
   // } else if (operacao == 'MULTIPLICAR') {
   //    resultado = valor1 * valor2
   // } else if (operacao == 'DIVIDIR') {

   //    if (valor2 == 0) {
   //       console.log('Erro: Não é possivel realizar a divisão por zero')
   //       status = false
   //    } else {
   //       resultado = valor1 / valor2

   //    }

   // } 
   // }

   switch (operacao) {
      case 'SOMAR':
         resultado = SOMAR(valor1, valor2)
         break
      case 'SUBTRAIR':
         resultado = SUBTRAIR(valor1, valor2)
         break
      case 'MULTIPLICAR':
         resultado = MULTIPLICAR(valor1, valor2)
         break
      case 'DIVIDIR':
         if (valor2 == 0) {
            console.log('Erro: Não é possivel realizar a divisão por zero')
            status = false
         } else {
            resultado = DIVIDIR(valor1, valor2)

         }
         break
      default:

         console.log("Erro: de operação")
         status = false

   }



   if (resultado == undefined && status == false) {
      return false;


   } else {
      return resultado
   }

}
// function calculadora(numero1, numero2, tipoCalculo) {

// }
// let calculadora = function (){

// }

const SOMAR = (valor1, valor2) => {
   valor1 + valor2
}
const SUBTRAIR = (valor1, valor2) => {
   valor1 - valor2

}
const MULTIPLICAR = (valor1, valor2) => {
   valor1 * valor2

}
const DIVIDIR = (valor1, valor2) => {
   valor1 / valor2

}
// Permite adicionar um function no escopo global (public)
// As function que não estiverem aqui serão tratadas como (private)
module.exports = {
   calculadora
}
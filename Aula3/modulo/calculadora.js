/**************************************************
 * Objetivo: Arquivo de funções para calculos matemáticos
 * Data : 03/02/2023
 * Autor: Anderson Reis
 * Versão: 1.0
 **************************************************/

   function calculadora(numero1, numero2, tipoCalculo) {
   let valor1 = Number(numero1) 
   let valor2 = Number(numero2)
   let operacao = tipoCalculo.toUpperCase() 
   let resultado

   if (operacao == 'SOMAR') {
      resultado = valor1 + valor2
   } else if (operacao == 'SUBTRAIR') {
      resultado = valor1 - valor2
   } else if (operacao == 'MULTIPLICAR') {
      resultado = valor1 * valor2
   } else if (operacao == 'DIVIDIR') {

      if (valor2 == 0) {
         console.log('Erro: Não é possivel realizar a divisão por zero')
      } else {
         resultado = valor1 / valor2

      }

   } else {
      console.log("Erro: de operação")
      entradaDados.close()
   }

   if (resultado == undefined) {
      return false;


   } else {
      return resultado
   }
   
}

// Permite adicionar um function no escopo global (public)
// As function que não estiverem aqui serão tratadas como (private)
module.exports = {
   calculadora
}
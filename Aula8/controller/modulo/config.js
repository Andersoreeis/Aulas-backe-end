/****************************************************************************
 * Objetivo: Arquivo responsavel por pradonizar as mensagens de erro, mensagens de sucesso, funções e váriaveis para o projeto
 * Data: 28/04/2023
 * Autor: Anderson Reis
 * versão: 1.0
 *****************************************************************************/  

 /*------------------MENSAGENS DE ERRO--------------------*/
const ERROR_REQUIRED_FIELDS = {status:400, message:'Campos obrigatórios não foram prenchidos'}

const ERROR_INTERNAL_SERVER = {status:500, message:'Devido a um erro interno do servidor não fois possivel processar a requisição'}

const ERROR_INVALID_ID = {status:400, message:'O ID informado na requisição não é valido ou não foi emcaminhado'}
const ERROR_ID_NOT_FOUND = {status:404, message:'O Item não existe ou foi apagado'}

const ERROR_NOT_FOUND = {status:404, message:'Nenhum item encontrado na requisição'}

const ERROR_INVALID_CONSTANT_TYPE = {status:415, message:'O tipo de mídia Content-type da solicitação não é compativel com o servidor. Tipo aceito:[aplication/json]'}

 /*------------------MENSAGENS DE ERRO--------------------*/
const SUCEESS_CREATED_ITEM = {status:201, message:'Item criado com sucesso'}

const SUCESS_REQUEST = {status:200, message:'Requisição bem sucedida'}

const SUCEESS_UPDATE_ITEM = {status:200, message:'Item atualizado com sucesso'}

const SUCEESS_DELETE_ITEM = {status:200, message:'Item deletado com sucesoo'}


 module.exports = {
    ERROR_REQUIRED_FIELDS,
    ERROR_INTERNAL_SERVER,
    ERROR_INVALID_ID,
    ERROR_INVALID_CONSTANT_TYPE,
    ERROR_ID_NOT_FOUND,
    ERROR_NOT_FOUND,
    SUCEESS_CREATED_ITEM,
    SUCEESS_UPDATE_ITEM,
    SUCEESS_DELETE_ITEM,
    SUCESS_REQUEST
    
    
 }
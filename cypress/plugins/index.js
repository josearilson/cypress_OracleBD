/// <reference types="cypress" />

const oracledb = require("oracledb");

/**
 * @type {Cypress.PluginConfig}
 */
//Tem que baixar arquivo instantclient_21_10 e colocar em uma pasta local na maquina
//https://www.oracle.com/br/database/technologies/instant-client/winx64-64-downloads.html

//Apos baixar o arquivo, devera inserir o caminho onde o salvou
//oracledb.initOracleClient({ libDir: "/Users/jose.ramalho/instantclient_21_10" }); 
oracledb.initOracleClient({ libDir: "../../instantclient_21_10" }); 


const LogaNoBanco = async(query, dbconfig) => {
  let  conectar;
  try{
     conectar = await oracledb.getConnection(dbconfig);
      console.log("Banco logado com sucesso")
      return result = await  conectar.execute(query)
    
  }catch(err){
      console.log("Falha na conexao" +err)
      return err
  } finally{
    if( conectar){
      try{
         conectar.close();
      }catch(err){
        console("Falha na conexao" +err);
      }
    }
  }
}

module.exports = (on, config) => {
  
  on("task", {
    ConectarNoBanco: query => {
      return LogaNoBanco(query, config.env.db);
    },
  });
  
};
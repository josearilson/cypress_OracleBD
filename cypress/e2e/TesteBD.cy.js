/// <reference types="cypress" />

const fs = require('fs'); 
 
describe("Consultar banco de dados Oracle", () => {
  const Select  = 
  //query a ser executada
  "SELECT  distinct ACCOUNT_ID from payment  where operator_id = 60001 and rownum <= 50"

  it("Testes de consulta no banco", () => {
    cy.task("ConectarNoBanco",Select)
    .then((result ) => {   
        //Validacao de retorno    
      expect(result.metaData).to.eql([ { name: 'ACCOUNT_ID' }] ) 
      //Gerar retorno para ser mostrado na tela do front_cypress
       var extractedUrlText = JSON.stringify((result).rows,'utf-8')
        console.log(  extractedUrlText);
        //Salva arquivo na pasta Log.csv
        cy.writeFile('LogDB/Log.csv',extractedUrlText,'utf-8')
      return cy.wrap(extractedUrlText);      
    })

})

})      
      
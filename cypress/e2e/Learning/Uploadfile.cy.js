/// <reference types = "cypress" />


describe('Methods to uplod the files',()=>{

    // before(()=>{
    //     cy.visit('https://www.lambdatest.com/selenium-playground/upload-file-demo')
    // })

    it.skip("Creata and upload and file",()=>{

        cy.writeFile('uploadfile.pdf','Hello this is the pdf file')   // Creating the file 
        cy.get('[id="file"]').selectFile('uploadfile.pdf')               // Uploading the file
        cy.get('#error').should('have.text','File Successfully Uploaded')    //asserting the success message      
 
        
    })

    it.skip('Upload the file through drag and drop',()=>{

        cy.visit('https://www.ilovepdf.com/pdf_to_word')
        cy.get('.uploader__droptxt').selectFile('uploadfile.pdf',{action:"drag-drop"})
        cy.get('.option__panel__title').should('be.visible')
    })

   

    // this method need to re-look
    it('upload the file through fixture', () => {
        cy.visit('https://www.ilovepdf.com/pdf_to_word');
        
        // Use cy.fixture without aliasing
        cy.writeFile("cypress/fixtures/test2.json", JSON.stringify({ test: 'data 1' })); // Convert object to JSON string
      
        cy.fixture('test2.json').then((fileContent) => {
          const blob = Cypress.Blob.base64StringToBlob(fileContent, 'application/json');
          const file = new File([blob], 'test2.json', { type: 'application/json' });
      
          cy.get('.uploader__input').attachFile(file);
        });
      });
      
      
      
 });
      


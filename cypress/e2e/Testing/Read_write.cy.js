/// <reference types = "cypress" />

// const { data } = require("cypress/types/jquery")

describe('Learn aboubt read and write',()=>{
    it('Write a file',()=>{
        cy.writeFile('test.txt', 'Hello this data is for testing \n')
        cy.writeFile('test.txt', 'Adding a new line', {flag:"a+"})   // if you want to add more details in same file
        cy.writeFile('test.json',{data:'1', data2:'2'})   // if you are creating the file fot json 
        cy.writeFile('cypress/downloads/test.json',{hi:'hey'})  // if you want to create  the file at particular space
    })

    it('Read the file', ()=>{
        cy.readFile('test.json').then((data)=>{
            cy.log("Print", data)
        })
    })
    it('Read the file from the path',()=>{
        cy.readFile('cypress/downloads/test.json').then((data)=>{
            cy.log('Print', data)
        // cy.readFile('cypress/downloads/test.json').should('exist')  // assertion if this file exist or not
        cy.readFile('cypress/downloads/test.json').should('exist').and('contain', {
            "hi": "hey"
          })
        })

    })
})

/// <reference types ="cypress" />


describe(" All assertions in chai libarary", ()=>{
    it('veriry the visible assertion', ()=>{
        cy.visit('https://docs.cypress.io/guides/overview/why-cypress') 
        cy.get('div>h1').contains('Why Cypress?').should('be.visible')  // verifying if the  'why cypress' is visible or not
    })

    it(' verify if user can go back', ()=>{
        cy.visit('https://naveenautomationlabs.com/')
        cy.get('[class^="tag-cloud-link"]').eq(0).click()
        cy.get('div>header>h1>span').contains('Agile').should('be.visible')
        cy.go('back')   // if user wants to go to back page
        cy.go('-1')     // anothoer way to go back
        cy.go('forward')
        cy.go('1')
    })

})
/// <reference types = "cypress" />

describe('Handling the dropdown', () => {
    it("Handle dropdown with 'select' function", ()=>{
        cy.visit('https://www.lambdatest.com/selenium-playground/select-dropdown-demo')
        cy.get('#select-demo').select('Monday').should('be.visible')
    })
    it("Handle dropdown with 'select (indexing)' function", ()=>{
        cy.visit('https://www.lambdatest.com/selenium-playground/select-dropdown-demo')
        // cy.get('#select-demo>option').eq('3').should('be.visible')
        cy.get('#select-demo').select(3).should('have.value', 'Tuesday')

    })
    it("Where alreadt any values is selected in dropdown and want to assert ", ()=>{
        cy.visit('https://www.lambdatest.com/selenium-playground/select-dropdown-demo')
        cy.get('#select-demo').select(3).should('have.value', 'Tuesday')
        cy.get('#select-demo option:selected').should('have.value', 'Tuesday')

    })

    it('Where we have to sleect multiple values from the dropdown', ()=>{
        cy.visit('https://www.lambdatest.com/selenium-playground/select-dropdown-demo')
        cy.get('[id="multi-select"]').select(['California', 'New York'])
    })

    it('Select dropdown value when its suggest', ()=>{
        cy.visit('https://www.amazon.ae/')
        cy.get('#twotabsearchtextbox').type('iphone')
        cy.get('.left-pane-results-container').find('>div').contains('iphone 15 pro max').click()
       
    })
})
/// <reference types = "cypress" />

describe("How will we handle the new tab",()=>{
    beforeEach(()=>{
        cy.visit('https://selectorshub.com/xpath-practice-page/')
    })

    it.skip('Handling the new tab',()=>{
        cy.get('.sgpb-popup-close-button-6').click()
        cy.contains('Username').invoke('removeAttr','target').click()
    })

    it('Handling the new tab -- Approach 2nd',()=>{
        cy.get('.sgpb-popup-close-button-6').click()
        cy.contains('Course Link').invoke('attr','target','_self').click()
    })
})
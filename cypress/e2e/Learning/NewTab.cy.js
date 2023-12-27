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
        cy.contains('Consider a small Donation and support this page.').invoke('attr','target','_self').click()
        cy.get('div>h4>a').should('contain','Checkout here the name of our Patrons')
    })
})  
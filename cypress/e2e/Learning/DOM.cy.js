/// <reference types = "cypress" />

describe(' Find the shadow DOM elements',()=>{
    it.skip('Find the shadow elements',()=>{
        cy.visit('https://selectorshub.com/xpath-practice-page/').wait(2000)
        cy.get('.sgpb-popup-close-button-6').click()
        cy.get('#userName').shadow().find('#kils').type('something')   // this method will be used if we have shadow elements
    })

    it.skip('Second way to handle DOM shadow elements',()=>{
        cy.visit('https://selectorshub.com/xpath-practice-page/').wait(2000)
        cy.get('.sgpb-popup-close-button-6').click()
        cy.get('#kils').type('something else')    // we have to add in config file 'includeShadowDom:'true'
    })

    it('Third way to handle DOM shadow elements',()=>{
        cy.visit('https://selectorshub.com/xpath-practice-page/').wait(2000)
        cy.get('.sgpb-popup-close-button-6').click()
        cy.get('#kils', {"includeShadowDom":true}).type('something else') 
    })
    
})
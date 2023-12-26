/// <reference types = "cypress" />

describe('Reload the page',()=>{
    it("Relaod the page",()=>{
        cy.visit("https://www.amazon.ae/")
        cy.contains('Best Sellers').should('be.visible')
        cy.reload().wait(1000)   // Normal refresh
        cy.contains('Best Sellers').should('be.visible')

        cy.reload(true)         // For hard refresh
        cy.contains('Best Sellers').should('be.visible')
        cy.log("--Hard Refresh Done--")

        cy.reload({timeout:5000})
        cy.contains('Best Sellers').should('be.visible')   // Need to check

        cy.window().then((data=>{
            data.location.reload()
        }))
        cy.contains('Best Sellers').should('be.visible')

    })
})
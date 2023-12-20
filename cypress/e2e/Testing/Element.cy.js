/// <reference types ="cypress" />

// const { filter } = require("bluebird")

describe('Learning about the elements',()=>{
    it('click on  first class',()=>{
        cy.visit('https://docs.cypress.io/guides/overview/why-cypress')
        cy.get('[class="navbar__item navbar__link"]').first().click()   // if there are multiple class and you want to click on first one
    })    

    it('create the path for nth element',()=>{
        cy.visit('https://docs.cypress.io/guides/overview/why-cypress')
        cy.get('div>a[href="/plugins"]').click()   // clicking on first class (Path made by me)
    })    

    it('click on any class through indexing',()=>{
        cy.visit('https://docs.cypress.io/guides/overview/why-cypress')
        cy.get('[class="navbar__item navbar__link"]').eq(3).click()     // if you want to click on the last element of the class
    }) 

    it('click on any class using the text',()=>{
        cy.visit('https://docs.cypress.io/guides/overview/why-cypress')
        cy.contains(" What you'll learn").click()     // if you want to click on the last element of the class
    }) 

    it('create the path using find function',()=>{
        cy.visit('https://docs.cypress.io/guides/overview/why-cypress')
        cy.get('div').find('>span.admonitionIcon_kALy').click({force: true})
    }) 

    it('create the path using find and filter function',()=>{
        cy.visit('https://docs.cypress.io/guides/overview/why-cypress')
        cy.get('div').find('>span').filter('.admonitionIcon_kALy').click({force: true})
    }) 


    it('click on last class',()=>{
        cy.visit('https://docs.cypress.io/guides/overview/why-cypress')
        cy.get('[class="navbar__item navbar__link"]').last().click()     // if you want to click on the last element of the class
    })  
    
})
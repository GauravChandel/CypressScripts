/// <reference types ="cypress" />

describe("Testing the Viewport", ()=>{

    it('Test 1 for 1920*1860', ()=>{
        // cy.viewport(1920, 1860);
        // cy.viewport('iphone-3', 'portrait')
        cy.viewport('iphone-3', 'landscape')

        cy.visit('https://www.flipkart.com')
    })
})


// if we want to set for all test cases  particual height and bandwidth
describe("Testing the Viewport",
// {
//     viewportHeight:700,
//     viewportWidth:900

// },
()=>{

    it('Test 1 for 1920*1860', ()=>{
        // cy.viewport(1920, 1860);
        // cy.viewport('iphone-3', 'portrait')
        // cy.viewport('iphone-3', 'landscape')

        cy.visit('https://www.flipkart.com')
    })

    it('Testing the view port for  iphone-3', ()=>{
        cy.viewport('iphone-3')
        cy.visit('https://www.flipkart.com')
    })
})
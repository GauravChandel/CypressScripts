/// <reference types ="cypress" />


// For global after each test case it will run
afterEach(function(){
    cy.log('--Globalal before Each--')
})

describe('What are the hooks?', ()=>{
    // it will before every test cases but only in this describe block
    beforeEach(function(){
        cy.log('--BeforeEach--')
    })

    it('Test1',()=>{
        cy.log('Test Sceanrio 1')
    })

    it('Test2',()=>{
        cy.log('Test Sceanrio 2')
    })
})

describe('What are the hooks? 2', ()=>{

    it('Test3',()=>{
        cy.log('Test Sceanrio 3')
    })

    it('Test4',()=>{
        cy.log('Test Sceanrio 4')
    })
})


describe('Befor hook is used only when i have to run only a one sceanrion only once', ()=>{
    // it will run only one time before the first test case
    before(function(){
        cy.log('--This only run one time')
    })

    it('Test 5', ()=>{
        cy.log('Test 1')
    })

    it('Test 5', ()=>{
        cy.log('Test 2')
    })
})

describe('Befor hook is used only when i have to run only a one sceanrion only once', ()=>{
     // it will run only one time after the last test case
    after(function(){
        cy.log('--This only run one time')
    })

    it('Test 5', ()=>{
        cy.log('Test 1')
    })

    it('Test 5', ()=>{
        cy.log('Test 2')
    })
})
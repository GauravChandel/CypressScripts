/// <reference types = 'cypress'  />


describe.skip('Data Driven testing', ()=>{
    before(()=>{
        cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=account/login')

    })

    it('Get the data from fix file', ()=>{
        cy.fixture('Login').then((value)=>{
            cy.get('input[name="email"]').type(value.email)
            cy.get('input[name="password"]').type(value.password)

        })
        cy.get('[value="Login"]').click()
    })
})


describe.skip('Data Driven through variable', ()=>{
    let data
    before(()=>{
        cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=account/login')
        cy.fixture('login.json').then((value)=>{
            data = value

        })
    })

   it('Use the login data through varibal in every test cases',()=>{
        cy.get('input[name="email"]').type(data.email)
        cy.get('input[name="password"]').type(data.password)
        })

})


// import testData from '../../fixtures/login.json';


describe.skip('Data Driven Testing',()=>{
    before(()=>{
        cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=account/login')
    })

    it('Data driven through import method',()=>{
        cy.get('input[name="email"]').type(testData.email)
        cy.get('input[name="password"]').type(testData.password)
        cy.get('[value="Login"]').click()
    })

})


// const testvalue = require('../../fixtures/login.json')
describe.skip('Data driven testing',()=>{
    before(()=>{
        cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=account/login')
    })

    it('Data driven from const method',()=>{
        cy.get('input[name="email"]').type(testvalue.email)
        cy.get('input[name="password"]').type(testvalue.password)
        cy.get('[value="Login"]').click()
    })
})



describe('Driven the data from', () => {
    let data;
  
    before(() => {
      cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
  
      // Use cy.fixture directly in the before hook to assign data
      cy.fixture('register.json').then((value) => {
        data = value;
      });
    });
  
    it('Get the data from fixture files', () => {
      // Make sure to use the correct property name from the fixture
      cy.get('input[name="firstname"]').type(data.name.firstname);
      cy.get('#input-lastname').type(data.name.lastname)
      cy.get('#input-email').type(data.email)
    });
  });
  
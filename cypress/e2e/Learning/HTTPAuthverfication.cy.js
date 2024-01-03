/// <reference types =  "cypress"  />


describe('Validate if the website has HTTP Auth method for login', () =>{

    it('1st approach of Login with Auth',()=>{
        cy.visit('https://authenticationtest.com/HTTPAuth/', { 
        auth: {
            username:'user',
            password: 'pass'
        }
     })
     cy.contains('Login Success').should('be.visible')

    })

    it('2nd approach of login with auth',()=>{

        cy.visit('https://user:pass@authenticationtest.com/HTTPAuth/')  // I have added ' user:pass@' in url which is username and password
        cy.contains('Login Success').should('be.visible')

    })
    
})
/// <reference types =  "cypress"  />


describe('Validate if the website has HTTP Auth method for login', () =>{

    it.skip('1st approach of Login with Auth',()=>{
        cy.visit('https://authenticationtest.com/HTTPAuth/', { 
        auth: {
            username:'user',
            password: 'pass'
        }
     })
     cy.contains('Login Success').should('be.visible')

    })

    it('2nd approach of login with auth',()=>{

        cy.visit('https://user:pass@authenticationtest.com/HTTPAuth/') // I have added 'user:pass@' in url which is username and password
        cy.contains('Login Success').should('be.visible')

    })

    it('3rd approach of login with  basic auth',()=>{
        cy.LoginwitBasicAuth()   // I have created the command to use basic auth, here i am calling the function from command.js file
        cy.contains('Login Success').should('be.visible')


    })
    
    
})
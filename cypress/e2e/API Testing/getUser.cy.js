/// <reference types="cypress" />

describe("Testing the Get User API", () => {

    it('Retrieve the details', () => {

        cy.request({
            method: 'GET',
            url: 'https://gorest.co.in/public/v2/users',
            headers: {
                Authorization: "Bearer 9a2736089285b1c3c6d013348030969bbb12809ae4288b9f4e55cab23fa0aaab",
            }
        }).then((response) => {
            cy.log(JSON.stringify(response));
            expect(response.status).to.equal(200);
        });

    });



    it(' Get only single user details' ,()=>{

        cy.request({
            method: 'GET',
            url:'https://gorest.co.in/public/v2/users/5899555',
            headers:{
                Authorization: "Bearer 9a2736089285b1c3c6d013348030969bbb12809ae4288b9f4e55cab23fa0aaab"
            }

        }).then((response)=>{
            cy.log(JSON.stringify(response));
            expect(response.status).to.equal(200);
        })
    })
});

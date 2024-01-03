/// <reference types = 'cypress' />

import { homePage } from '../../pages/homepage';
const homepageobj = new homePage
import testData from '../../fixtures/login.json'

describe('Check the flow of add to cart', () => {
    before(() => {
        cy.login(testData.login.email, testData.login.password);
    })

    it('Add the product into cart and verify', () => {
        homepageobj.SearchProduct(testData.product.productName)
        homepageobj.addToCart()
        homepageobj.verifSucessMessages().should('contain', testData.message.sucessmessage)
    })

})

/// <reference types = 'cypress' />


import { registerPage } from "../../pages/registerpage";
const regObj = new registerPage()

import registerData from '../../fixtures/register.json'

describe('Running the resiter flow',()=>{

    it(' Test the register flow',()=>{

        regObj.openURL()
        regObj.enterFirstName(registerData.name.firstname)
        regObj.enterLastName(registerData.name.lastname)
        regObj.enterEmail(registerData.email)
        regObj.enterTelephone(registerData.teleohone)
        regObj.enterPassword(registerData.passwords.password)   // here we are using only password from fixture beacause in pages folder i have created in call back function which takes same values for both pass and confirm pass
        regObj.SelectCheckbox()
        regObj.ClikonContinue()


    })

})
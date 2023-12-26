export class registerPage{

weblocaters = {

    firstName:'#input-firstname',
    lastName: '#input-lastname',
    email: '#input-email',
    telephone: '#input-telephone',
    password: '#input-password',
    passwordConfirm: '#input-confirm',
    policyCheckbox: '#input[type="checkbox"]',
    continue:'.btn.btn-primary'
}

openURL(){
    cy.visit(Cypress.env('URL'))   // we are getting the value here from config.js file
}

enterFirstName(FName){
    cy.get(this.weblocaters.firstName).type(FName)
}

enterLastName(LName){
    cy.get(this.weblocaters.lastName).type(LName)
}

enterEmail(Email){
    cy.get(this.weblocaters.email).type(Email)
}

enterTelephone(Tphone){
    cy.get(this.weblocaters.telephone).type(Tphone)
}

enterPassword(Password){
    cy.get(this.weblocaters.password).type(Password)
    cy.get(this.weblocaters.passwordConfirm).type(Password)
}

SelectCheckbox(){
    cy.get('[type="checkbox"]').check()
}

ClikonContinue(){
    cy.get(this.weblocaters.continue).click()
}

}
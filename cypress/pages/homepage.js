export class homePage{

weblocator = {

SearchInput:'.form-control.input-lg',
ClickonSearch:'.btn.btn-default.btn-lg',
Product:'img[title="MacBook"]',
addtocart:'Add to Cart',
SuccessMessages:'.alert.alert-success.alert-dismissible'
}


SearchProduct(productName){
    cy.get(this.weblocator.SearchInput).type(productName)
    cy.get(this.weblocator.ClickonSearch).click()

}

addToCart() {
    cy.contains(this.weblocator.addtocart).first().click()
}
verifSucessMessages(){
    return cy.get(this.weblocator.SuccessMessages)
}

}
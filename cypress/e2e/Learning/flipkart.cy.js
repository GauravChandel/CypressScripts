describe('Get and print values of aria-label attribute in a and div tags', () => {
    it('should get values of aria-label attribute in a and div tags', () => {
      // Visit your webpage or application
      cy.visit('https://www.flipkart.com/');
  
      // Select the parent div that contains both a and div tags with aria-label attribute
      cy.get('._3sdu8W.emupdz').within(() => {
        // Select all 'a' and 'div' tags with aria-label attribute and iterate over them
        cy.get('a[aria-label], div[aria-label]').each(($element) => {
          // Get the value of the aria-label attribute
          const ariaLabelValue = $element.attr('aria-label');
  
          // Log the value to the Cypress console
          cy.log(`Aria-label value: ${ariaLabelValue}`);
        });
      });
    });
  });
  
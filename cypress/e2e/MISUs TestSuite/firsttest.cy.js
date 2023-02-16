describe('My testSuite',function()
{

it('My first test/ Verifying title of the page positive',function()
{
 cy.visit('https://www.opencart.com/')
 cy.title().should('eq','OpenCart - Open Source Shopping Cart Solution')
})

/*it('My first test/ verifying title of the page Negative',function()
{
 cy.visit('https://www.opencart.com/')
 cy.title().should('eq', 'nopcommerce demo test')

})*/

})
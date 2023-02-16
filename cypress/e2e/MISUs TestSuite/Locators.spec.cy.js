describe("",function(){

it("",function(){

cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') // open the url 
cy.get(".oxd-input--active[name='username']").type("Admin")
cy.get(".oxd-input--active[name='password']").type("admin123") 
cy.get('.orangehrm-login-button').click()
})


})
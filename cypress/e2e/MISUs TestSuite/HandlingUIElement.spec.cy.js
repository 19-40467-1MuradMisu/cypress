describe("My UI handling test suite",function(){

    it("Validating Url", function(){
        cy.visit("https://demo.guru99.com/test/newtours/") // visit url
        cy.url().should('include','guru99') // should validate url include "guru99"
    })

    it("Validating(visible & clickable or typeable)", function(){
        cy.visit("https://demo.guru99.com/test/newtours/") // visit url
        cy.get("[name='userName']").should('be.visible').should('be.enabled').type("mercury") // validate the username field
        cy.get("[name='password']").should('be.visible').should('be.enabled').type("mercury") // validate the password field 

    })

    it("Get title of the page", function(){
        cy.visit("https://demo.guru99.com/test/newtours/") // visit url
        cy.title().should('eq','Welcome: Mercury Tours')   // will compare the page title

    })

    it("Interacting with radio buttons", function(){
        cy.visit("https://demo.guru99.com/test/newtours/reservation.php") // visit url
        cy.get("[value=roundtrip]").should('be.visible').should('be.checked')   // verifying the visibility and select or not  
        cy.get("[value=oneway]").should('be.visible').should('not.be.checked').click()  // verifying the visibility and select or not  
    
    })

 
    it("Interacting with check box & Drop Downs",function(){

        cy.visit("https://demo.automationtesting.in/Register.html") // visit url
        cy.get("#checkbox1").check().should('be.check').and('have.value','Cricket')

    })

})

 
 

describe("",function(){

it("Log in to the system & full functionality testing ",function(){

    Cypress.on('uncaught:exception', (err, runnable) => {
        //   returning false here prevents Cypress from
        //       failing the test
         return false
            })       

cy.visit ("https://dev.eporcha.gov.bd/admin/login")
//cy.get('input[name="username"]').click()
cy.get('input[name="username"]').type("nurul_survey")
cy.get('input[name="password"]').type("nurul_survey")
cy.get('button[class="btn btn-block login-button"]').click()
//cy.get('contains[text="খসড়া পর্চা"]').click()
// cy.get("").select('ম্যাপ থেকে খতিয়ান তৈরি').should('have.value','ম্যাপ থেকে খতিয়ান তৈরি')

//cy.get('.dropdown > :nth-child(1) > .title').click()
   // not solved yet 
       
cy.get('.title').contains('খসড়া পর্চা').click() // used (.) to specifying the class 
cy.get('.title').contains('ম্যাপ থেকে খতিয়ান তৈরি').click()  
cy.go('back') // for back to the prevois page from the current page
// cy.go('forward')  // for going forward to a page 
cy.get('.title').contains('খসড়া পর্চা').click()
cy.get('.title').contains('নতুন খতিয়ানসমূহ').click()
cy.get('a[class="btn btn-sm btn-warning view"]').contains('বিস্তারিত').click()
cy.go('back')
cy.get('a[class="btn btn-sm btn-warning view"]').contains('সংশোধন').click()
//cy.get('.form-check-input identity_type').contains("")
cy.get('input[class="form-check-input identity_type"]').contains('value','4').should('not.be.checked').click()  
//contains('নাই').
})

    
})
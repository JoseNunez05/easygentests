describe('signup spec', () => {

  it('create user "manually" ', () => {
    cy.visit('https://learn.easygenerator.com/#/signup');

    cy.fixture('userdata.json').then( userdata => {
      cy.get('#name').type(userdata.name)
      cy.get('#email').type(userdata.email)
      cy.get('#password').type(userdata.password)
    });

    cy.get('.check-icon').click()
    cy.get('.submit-button').click();
  })

  it.skip('create user with POST request', () => {
    cy.request({
      url: 'https://learn.easygenerator.com/#/signup',
      method: 'POST',
      body:
      {
        name: "Paul Marcs",
        email: "pmarcs@test.com",
        password: "iloveturtles"
      }
    })
    .its('status').should('eq', 201)

    // status code was 401
  })

})
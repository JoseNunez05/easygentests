describe('login spec', () => {
    it('logging in', () => {
        cy.visit('https://learn.easygenerator.com/#/login');

        cy.fixture('userdata.json').then( ud => {        
            cy.get('#email').type(ud.email)
            cy.get('#password').type(ud.password)
        });

        cy.get('.submit-button').click();

        // should be redirected to dashboard page
        cy.url().should('eq', 'https://learn.easygenerator.com/#/dashboard');
    })
})
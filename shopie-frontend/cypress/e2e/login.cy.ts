///<reference types="cypress"/>

describe('gives the authentication of login', ()=>{

     it('Checks the login authentication', () => {
       cy.visit('http://localhost:4200/login');
       cy.get('.login');
       cy.get('[data-cy="submit-btn"]').click();
       cy.get('[data-cy="email"]');
       cy.get('[data-cy="password"]');
     });
})

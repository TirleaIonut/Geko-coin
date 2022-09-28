describe('change theme functionality',() =>{
    it('change theme', () =>{
        cy.visit('http://localhost:3000/');
        cy.get('.switch').click();
        cy.get('.me-2').should('have.css', 'color', 'rgb(255, 255, 255)');
    });
})
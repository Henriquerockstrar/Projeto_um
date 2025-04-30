describe('template spec', () => {
  it('passes', () => {
    cy.visit('index.html')
    
    cy.get('#day').type('2')
    cy.get('#day').should('have.value', '2')
    cy.get('#month').type('3')
    cy.get('#month').should('have.value', '3')
    cy.get('#year').type('2000')
    cy.get('#year').should('have.value', '2000')
    cy.get('button').click()
    
    
  
  })
})

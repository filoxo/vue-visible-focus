describe('VisibleFocus', () => {

  beforeEach(() => {
    cy.visit("/");
  })
  
  describe('hides focus ring when clicking', () => {
    const none = /none/i
    
    it('on a focusable element (button)', () => {
      cy.findByText('A button').should('exist').click()
      cy.focused().should('have.css', 'outline').and('match', none)
    })
    
    it('on a div with tabindex', () => {
      cy.findByText(/focusable subheader/i).should('exist').click()
      cy.focused().should('have.css', 'outline').and('match', none)
    })
  })

  describe('shows focus ring when', () => {
    const notNone = /^((?!none).)*$/i

    it('clicking on an input element', () => {
      cy.findByPlaceholderText('An input').should('exist').click()
      cy.focused().should('have.css', 'outline').and('match', notNone)
    })
    
    it('pressing Tab', () => {
      cy.get("body").tab()
      cy.focused().should('have.css', 'outline').and('match', notNone)
      cy.focused().tab()
      cy.focused().should('have.css', 'outline').and('match', notNone)
      cy.focused().tab()
      cy.focused().should('have.css', 'outline').and('match', notNone)
    })
    
    it('pressing arrow keys', () => {
      cy.findByText('A button').focus()
      cy.focused().type('{uparrow}')
      cy.focused().should('have.css', 'outline').and('match', notNone)
      cy.focused().type('{downarrow}')
      cy.focused().should('have.css', 'outline').and('match', notNone)
      cy.focused().type('{rightarrow}')
      cy.focused().should('have.css', 'outline').and('match', notNone)
      cy.focused().type('{leftarrow}')
      cy.focused().should('have.css', 'outline').and('match', notNone)
    })
  })
} )
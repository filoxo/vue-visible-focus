describe('VisibleFocus', () => {
  const none = /none/i
  const notNone = /^((?!none).)*$/i

  beforeEach(() => {
    cy.visit("/");
  })
  
  describe('hides focus ring when clicking', () => {
    
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

    it('switching from mouse to keyboard modality', () => {
      cy.findByText(/focusable subheader/i).focus ()
      cy.focused().should('have.css', 'outline').and('match', notNone)
      cy.focused().click()
      cy.focused().should('have.css', 'outline').and('match', none)
    })
  })
} )
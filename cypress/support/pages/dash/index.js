

class DashPage {

    userLoggedIn(userName) {
        cy.get('header a strong')
        .should('be.visible')
        .should('have.text', userName)
    }     
}

export default new DashPage()
import { el } from './elements'

class Header {

    userLoggedIn(userName) {
        cy.get(el.fullName)
            .should('be.visible')
            .should('have.text', userName)
    }

}

export default new Header()
import { el } from './elements'

class Header {

    new_userLoggedIn(new_user) {
        cy.get(el.fullName)
            .should('be.visible')
            .should('have.text', new_user)
    }

}

export default new Header()
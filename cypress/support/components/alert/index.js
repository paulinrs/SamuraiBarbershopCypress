
import { el } from './elements'

class Alert{
    haveText(expectText) {
        cy.contains(el.error, expectText)
            .should('be.visible')
    }
}

export default new Alert()

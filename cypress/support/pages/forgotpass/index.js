
import { el } from './elements'
import toast from '../../components/toast'

class ForgotPassPage{

    constructor(){
        this.tost = toast
    }

    go(){
        cy.visit('/forgot-password')

        cy.contains(el.title)
            .should('be.visible')
    }

    form(email){
        cy.get(el.email)
            .clear()
            .type(email)
    }

    submit() {
        cy.contains('button[type=submit]', 'Recuperar')
            .click()
    }
}

export default new ForgotPassPage()
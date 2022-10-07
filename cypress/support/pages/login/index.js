
import { el } from './elements'
import toast from '../../components/toast'
import alert from '../../components/alert'

class LoginPage {

    constructor(){
        this.toast = toast
        this.alert = alert
    }

    go() {
        cy.visit('/')

        cy.contains(el.title)
            .should('be.visible')
    }

    form(user) {
         cy.get(el.email)
            .clear()
            .type(user.email)
        cy.get(el.password)
            .clear()
            .type(user.password)
    }

    submit() {
        cy.get(el.signIn).click()
        
    }

    should(){
        cy.get(el.name)
    }
}

export default new LoginPage()
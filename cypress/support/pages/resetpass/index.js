
import { el } from './elements'
import toast from '../../components/toast'

class ResetPassPage{

    constructor(){
        this.toast = toast
    }

    go(token){
        cy.visit('/reset-password?token=' + token)
    }

    form(pass, pass2){
        cy.get(el.newPass)
        .clear()
        .type(pass)

        cy.get(el.ConfirmPass)
        .clear()
        .type(pass2)
    }

    submit() {
        cy.contains(el.changePassButton). click()
    }

}

export default new ResetPassPage()
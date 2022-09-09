
import loginPage from '../support/pages/login'
import dashPage from '../support/pages/dash'


describe('login', function () {

    context('quando o usuário é muito bom', function () {

        const user = {
            name: 'Paulo Roberto',
            email: 'paulo.roberto@bugmail.com',
            password: '002287',
            is_provider: true
        }

        before(function () {
            cy.postUser(user)
        })


         it('Deve logar com sucesso', function () {

            loginPage.go()
            loginPage.form(user)
            loginPage.submit()

            dashPage.header.userLoggedIn(user.name)
        })
    })
})

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

    context('quando o usuário é bom mas a senha está incorreta', function () {

        let user = {
            name: 'Sofia Iris',
            email: 'sofia.iris@bugmail.com',
            password: '002287',
            is_provider: true
        }

        before(function () {
            cy.postUser(user).then(function () {
                user.password = '002288'

            })

        })

        it('deve notificar erro de credenciais', function () {
            loginPage.go()
            loginPage.form(user)
            loginPage.submit()

            loginPage.toast.sholdHaveText('Ocorreu um erro ao fazer login, verifique suas credenciais.')
        })
    })

    context('quando o formato do email e inválido', function () {

        const emails = [
            'paulo#bugmail.com.br',
            'hotmail.com',
            '@gmail.com',
            '@',
            'paulin@',
            '111',
            '$&*^&',
            'crf1985'
        ]

        before(function () {
            loginPage.go()
        })

        emails.forEach(function (email) {
            it('não deve logar com email: ' + email, function () {
                const user = { email: email, password: '002287' }

                loginPage.form(user)
                loginPage.submit()
                loginPage.alert.haveText('Informe um email válido')
            })
        })
    })

    context('quando não prencho nenhum dos campos', function () {

        const alertMessages = [
            'E-mail é obrigatório',
            'Senha é obrigatória'
        ]

        before(function () {
            loginPage.go()
            loginPage.submit()
        })

        alertMessages.forEach(function (alert) {
            it('deve exibir ' + alert.toLowerCase(), function () {
                loginPage.alert.haveText(alert)
            })
        })
    })
})  

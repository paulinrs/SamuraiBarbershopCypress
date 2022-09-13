
import signupPage from '../support/pages/signup'

describe('cadastro', function () {

    before(function () {
        cy.fixture('signup').then(function (signup) {
            this.success = signup.success
            this.email_dup = signup.email_dup
            this.email_inv = signup.email_inv
            this.short_password = signup.short_password
        })
    })

    context('quando o usuário é novato', function () {
        before(function () {
            cy.task('removeUser', this.success.email)
                .then(function (result) {
                    console.log(result)
                })
        })

        it('deve cadastrar com sucesso', function () {

            signupPage.go()
            signupPage.form(this.success)
            signupPage.submit()
            signupPage.toast.sholdHaveText('Agora você se tornou um(a) Samurai, faça seu login para ver seus agendamentos!')
        })
    })

    context('quando o email já existe', function () {

        before(function () {
            cy.postUser(this.email_dup)
        })

        it('não deve cadastrar o usuário', function () {
            signupPage.go()
            signupPage.form(this.email_dup)
            signupPage.submit()
            signupPage.toast.sholdHaveText('Email já cadastrado para outro usuário.')
        })
    })

    context('quando o email é incorreto', function () {
        it('deve exibir mensagem de alerta', function () {
            signupPage.go()
            signupPage.form(this.email_inv)
            signupPage.submit()
            signupPage.alert.haveText('Informe um email válido')
        })
    })

    context('quando a senha tem é muito curta', function () {

        const passwords = ['1', '22', '333', '4444', '55555']

        beforeEach(function () {
            signupPage.go()
        })

        passwords.forEach(function (p) {
            it('não deve cadastrar o usuário com a senha: ' + p, function () {
                
                this.short_password.password = p
                signupPage.form(this.short_password)
                signupPage.submit()
            })
        })

        afterEach(function () {
            signupPage.alert.haveText('Pelo menos 6 caracteres')
        })
    })

    context('quando não prencho nenhum dos campos', function () {

        const alertMessages = [
            'Nome é obrigatório',
            'E-mail é obrigatório',
            'Senha é obrigatória'
        ]

        before(function () {
            signupPage.go()
            signupPage.submit()
        })

        alertMessages.forEach(function (alert) {
            it('deve exibir ' + alert.toLowerCase(), function () {
                signupPage.alert.haveText(alert)
            })
        })
    })
})


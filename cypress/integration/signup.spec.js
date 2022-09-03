
import signupPage from '../support/pages/signup'

describe('cadastro', function () {

    context('quando o usuário é novato', function () {

        const user = {
            name: 'Arthur Ribeiro',
            email: 'arthur.ribeiro@gmail.com',
            password: '002287'
        }

        before(function () {
            cy.task('removeUser', user.email)
                .then(function (result) {
                    console.log(result)
                })
        })

        it('deve cadastrar com sucesso', function () {

            signupPage.go()
            signupPage.form(user)
            signupPage.submit()
            signupPage.toast.sholdHaveTest('Agora você se tornou um(a) Samurai, faça seu login para ver seus agendamentos!')
        })
    })

    context('quando o email já existe', function () {
        const user = {
            name: 'Paulo Roberto',
            email: 'paulo.roberto@bugmail.com',
            password: '002287',
            is_provider: true
        }

        before(function () {
            cy.task('removeUser', user.email)
                .then(function (result) {
                    console.log(result)
                })

            cy.request(
                'POST',
                'http://localhost:3333/users',
                user
            ).then(function (response) {
                expect(response.status).to.eq(200)
            })
        })

        it('não deve cadastrar o usuário', function () {
            signupPage.go()
            signupPage.form(user)
            signupPage.submit()
            signupPage.toast.sholdHaveTest('Email já cadastrado para outro usuário.')
        })
    })

    context('quando o email é incorreto', function () {
        const user = {
            name: 'Angela Ribeiro',
            email: 'angela.ribeiro$gmail.com',
            password: '002287'
        }

        it('deve exibir mensagem de alerta', function () {
            signupPage.go()
            signupPage.form(user)
            signupPage.submit()
            signupPage.alertHaveText('Informe um email válido')
        })
    })

    context('quando a senha tem é muito curta', function () {

        const passwords = ['1', '22', '333', '4444', '55555']

        beforeEach(function () {
            signupPage.go()
        })

        passwords.forEach(function (p) {
            it('não deve cadastrar o usuário com a senha: ' + p, function () {
                const user = { name: 'Josilda Santos', email: 'josilda@gmail.com', password: p }
                signupPage.form(user)
                signupPage.submit()
            })
        })

        afterEach(function () {
            signupPage.alertHaveText('Pelo menos 6 caracteres')
        })
    })

        context('quando não prencho nemhum dos campos', function(){

            const alertMessages = [
                'Nome é obrigatório',
                'E-mail é obrigatório',
                'Senha é obrigatória'
            ]

            before(function(){
                signupPage.go()
                signupPage.submit()
            })

            alertMessages.forEach(function(alert){
                it('deve exibir ' + alert.toLowerCase(), function(){
                    signupPage.alertHaveText(alert)
                })
            })
        })
})


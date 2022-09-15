

describe('dashboard', function(){
    context('quando o cliente faz um agendamento no app mobile', function(){

        const data = {
            customer:{
                name: 'Lucas Clark',
                email:'lucas.clark@gmail.com',
                password: '002287',
                is_provider: false
            },
            samurai:{
                name: 'Claytom Amorim',
                email: 'claytom.amorim@bugmail.com',
                password: '002287',
                is_provider: true
            }
        }  
        
        before(function (){
            cy.postUser(data.customer)
            cy.postUser(data.samurai)

            cy.apiLogin(data.customer)
            cy.log('Conseguimos pegar o token ' + Cypress.env('apiToken') )
        })

        it('o mesmo deve ser exibido no dashboard', function(){
            console.log(data)

        })
    })
})

Cypress.Commands.add('apiLogin', function(user){

    const payload = {
        email: user.email, 
        password: user.password
    }

    cy.request({
        method: 'POST',
        url:'http://localhost:3333/sessions',
        body: payload
    }).then(function (response){
        expect(response.status).to.eq(200)
        Cypress.env('apiToken', response.body.token)
    })
    
})
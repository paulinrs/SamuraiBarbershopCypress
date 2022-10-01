import dashPage from '../support/pages/dash'

import { customer, provider, appointment } from '../fixtures/factories/dash'

describe('dashboard', function(){
    context('quando o cliente faz um agendamento no app mobile', function(){
        
        

        before(function (){
            cy.postUser(provider)
            cy.postUser(customer)
            
            cy.apiLogin(customer)
            cy.setProviderId(provider.email)
            cy.createAppointment(appointment.hour)
        })

        it('o mesmo deve ser exibido no dashboard', function(){
            const date = Cypress.env('appointmentDate')
           
            cy.apiLogin(provider, true)
            dashPage.calendarShouldBeVisible()
            dashPage.selectDay(date)
            dashPage.appointmentShouldBe(customer, appointment.hour)

        })
    })
})


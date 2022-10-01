
import { el } from './elements'
import header from "../../components/header"

class DashPage {

    constructor() {
        this.header = header
    }

    calendarShouldBeVisible(){
        cy.get(el.calendar, {timeout: 7000})
            .should('be.visible')
    }

    selectDay(appointmentDate){

        let today = new Date()
        let lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0)

        if(today.getDate() === lastDayOfMonth.getDate()){
            cy.log('Hoje é o último dia do mês')
            cy.get(el.nextMonthButton)
                .should('be.visible')
                .click()

            // Isso é um checkpoint para garantir que houve a troca do calendário
            let monthName
            switch (appointmentDate.getMonth()) {
                case 0:
                    monthName = 'Janeiro'
                    break
                case 1:
                    monthName = 'Ferveiro'
                    break
                case 2:
                    monthName = 'Março'
                    break
                case 3:
                    monthName = 'Abril'
                    break
                case 4:
                    monthName = 'Maio'
                    break
                case 5:
                    monthName = 'Junho'
                    break
                case 6:
                    monthName = 'Julho'
                    break
                case 7:
                    monthName = 'Agosto'
                    break
                case 8:
                    monthName = 'Setembro'
                    break
                case 9:
                    monthName = 'Outubro'
                    break
                case 10:
                    monthName = 'Novembro'
                    break
                case 11:
                    monthName = 'Dezembro'
                    break
            }
            
            cy.contains(el.monthYearName, monthName)
                .should('be.visible')
        } else{
            cy.log('Hoje não é o último dia dos mês')
        }

        cy.log(today.toString())
        cy.log(lastDayOfMonth.toString())


        const target = new RegExp('^' + appointmentDate.getDate() + '$', 'g')
        cy.contains(el.boxDay, target)
            .click({ force: true })
    }

    appointmentShouldBe(customer, hour){
        cy.contains('div', customer.name)
            .should('be.visible')
            .parent()
            .contains(el.boxHour, hour)
            .should('be.visible')
    }
}

export default new DashPage()
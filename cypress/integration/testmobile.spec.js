
describe('mobile-tests', ()=> {
    beforeEach(()=> {
        cy.viewport('iphone-5')
    })
    
    it('app deve estar online', function(){
        cy.visit('/')
    })
})

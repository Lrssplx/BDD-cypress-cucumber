/// <reference types = "Cypress" /> 

const url = Cypress.config("baseUrl")

class ErroCriacaoContaPage {

    acessasite(){
        cy.visit(url)
    }

    preenche(){
        
        cy.get('[data-test=email]').type('lrssplx@email')

        cy.get('[data-test=passwd]').type('larissa')
        cy.get('.btn').click()



    }

    acessapagcontas(){

        cy.get('[data-test=menu-settings] > .fas').click()
        cy.get('[href="/contas"]').click()


    }
    preenchedados(){
        cy.get('[data-test=nome]').type('conta para teste')
        cy.get('.btn').click()

    }

    contaexistente(){
        cy.get('.toast-error > .toast-message').should('contain','status code 400')
    }


}
export default ErroCriacaoContaPage;
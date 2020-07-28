/// <reference types = "Cypress" />

const url = Cypress.config("baseUrl")

class LoginPage {
    acessasite() {

        cy.visit(url)

    }

    preenche() {
        cy.get('[data-test=email]').type('lrssplx@email')
        cy.get('[data-test=passwd]').type('larissa')

    }

    loga() {
        cy.get('.btn').click()
    }


    entrapagcontas() {
        cy.get('[data-test=menu-settings] > .fas').click()
        cy.get('[href="/contas"]').click()
    }

    criaconta() {
        cy.get('[data-test=nome]').type('conta para teste')

    }

    contacriada() {

        cy.get('.btn').click()
    }
}

export default LoginPage;
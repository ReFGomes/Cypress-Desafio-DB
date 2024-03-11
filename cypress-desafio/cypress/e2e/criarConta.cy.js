describe('Criar contas e fazer transação entre elas', () => {
    it.only('deve registrar uma conta com saldo', () => {

        cy.createNewUser1('')
        cy.clearUser('')
        cy.createNewUser2('')
        cy.login2('')

    })


})
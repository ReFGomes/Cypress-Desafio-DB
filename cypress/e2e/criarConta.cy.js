    //beforeEach(()=> {
    //    cy.visit('https://bugbank.netlify.app')
    //})

describe('Criar contas e fazer transação entre elas', () => {
    it.only('deve registrar uma conta com saldo', () => {

        const cadastroUm = 'teste123@teste.com'

        cy.createNewUser1('')
        cy.createNewUser2('')
        cy.login2('')


        cy.get('#btn-TRANSFERÊNCIA')
            .click()
        cy.get('input[placeholder="Informe o número da conta"]')
        .type(        
            cy.readFile('cypress/fixtures/conta.json')
            .invoke('number')
            .then((number) => {
                .invoke
                cy.contains(number != '000')
            }))


    })


})


  //> input[placeholder="Informe seu e-mail"]


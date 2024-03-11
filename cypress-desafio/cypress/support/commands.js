import usuario from '../fixtures/users.js'
import loc from '../support/locators.js'

Cypress.Commands.add('createNewUser1', (createUser = '') => {

    cy.visit('/')

    cy.get(loc.CADASTRO.BTN_REGISTRAR).click()
    cy.get(loc.CADASTRO.EMAIL).type(usuario.email_um,{force:true})
    cy.get(loc.CADASTRO.NOME).type(usuario.nome_um, {force:true})
    cy.get(loc.CADASTRO.SENHA).type(usuario.senha_um, {force:true})
    cy.get(loc.CADASTRO.CONFSENHA).type(usuario.senha_um, {force:true})
    cy.get(loc.CADASTRO.BTN_SALDO).click({force:true})
    cy.get(loc.CADASTRO.BTN_CADASTRAR).click({force:true})
    cy.get('#modalText')
        .invoke('text')
        .then((text) => {
            var fullText = text;
            var pattern = /[0-9]+/g;
            var number = fullText.match(pattern);
            cy.writeFile('cypress/fixtures/conta.js', number)
        })
    cy.get(loc.CADASTRO.BTN_FECHARMODAL).click()
})

Cypress.Commands.add('clearUser', (clearUser = '') => {

    cy.get(loc.CADASTRO.BTN_REGISTRAR).click()
    cy.get(loc.CADASTRO.EMAIL).clear({force:true})
    cy.get(loc.CADASTRO.NOME).clear({force:true})
    cy.get(loc.CADASTRO.SENHA).clear({force:true})
    cy.get(loc.CADASTRO.CONFSENHA).clear({force:true})
    cy.get(loc.CADASTRO.BTN_VOLTAR).click({force:true})

})


Cypress.Commands.add('createNewUser2', (createUser = '') => {

    cy.get(loc.CADASTRO.BTN_REGISTRAR).click()
    cy.get(loc.CADASTRO.EMAIL).type(usuario.email_dois,{force:true})
    cy.get(loc.CADASTRO.NOME).type(usuario.nome_dois, {force:true})
    cy.get(loc.CADASTRO.SENHA).type(usuario.senha_dois, {force:true})
    cy.get(loc.CADASTRO.CONFSENHA).type(usuario.senha_dois, {force:true})
    cy.get(loc.CADASTRO.BTN_SALDO).click({force:true})
    cy.get(loc.CADASTRO.BTN_CADASTRAR).click({force:true})
    cy.get(loc.CADASTRO.BTN_FECHARMODAL).click()
})

Cypress.Commands.add('login2', (loginDois = '') => {
    cy.get(loc.LOGIN.EMAIL).type(usuario.email_dois,{force:true})
    cy.get(loc.LOGIN.SENHA).type(usuario.senha_dois, {force:true})    
    cy.get(loc.LOGIN.BTN_ACESSAR).click()
   
})

Cypress.Commands.add('transfer', (transfer1 = '') => {


    cy.get('#btn-TRANSFERÊNCIA')
        .click()
    cy.get('input[placeholder="Informe o número da conta"]')
        .type(acc)
    cy.get('input[placeholder="Informe o dígito da conta"]')
        .type(5)
    cy.get('input[placeholder="Informe o valor da transferência"]')
        .type('100')
    cy.get('input[placeholder="Informe uma descrição"]')
        .type('Testando')
    cy.get('.style__ContainerButton-sc-1wsixal-0')
        .click()
})
import usuario from '../fixtures/users.js'

Cypress.Commands.add('createNewUser1', (createUser = '') => {

    cy.visit('/')

    cy.contains('button', 'Registrar')
        .click()
    cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > :nth-child(2) > input[placeholder="Informe seu e-mail"]')
        .type(usuario.email_um,{force:true})
    cy.get('input[placeholder="Informe seu Nome"]')
        .type(usuario.nome_um, {force:true})
    cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > input[placeholder="Informe sua senha"]')
        .type(usuario.senha_um, {force:true})
    cy.get('input[name="passwordConfirmation"]')
        .type(usuario.senha_um, {force:true})
    cy.get('#toggleAddBalance')
        .click({force:true})
    cy.contains('button', 'Cadastrar')
        .click({force:true})
    cy.get('#modalText')
        .invoke('text')
        .then((text) => {
            var fullText = text;
            var pattern = /[0-9]+/g;
            var number = fullText.match(pattern);
            cy.writeFile('cypress/fixtures/conta.js', number)
        })
    cy.get('#btnCloseModal').click()
})


Cypress.Commands.add('createNewUser2', (createUser = '') => {

    cy.contains('button', 'Registrar')
        .click()
    cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > :nth-child(2) > input[placeholder="Informe seu e-mail"]')
        .clear({force:true})
    cy.get('input[placeholder="Informe seu Nome"]')
        .clear({force:true})
    cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > input[placeholder="Informe sua senha"]')
        .clear({force:true})
    cy.get('input[name="passwordConfirmation"]')
        .clear({force:true})


    cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > :nth-child(2) > input[placeholder="Informe seu e-mail"]')
        .type(usuario.email_dois,{force:true})
    cy.get('input[placeholder="Informe seu Nome"]')
        .type(usuario.nome_dois, {force:true})
    cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > input[placeholder="Informe sua senha"]')
        .type(usuario.senha_dois, {force:true})
    cy.get('input[name="passwordConfirmation"]')
        .type(usuario.senha_dois, {force:true})
    cy.get('#toggleAddBalance')
        .click({force:true})
    cy.contains('button', 'Cadastrar')
        .click({force:true})
    cy.get('#btnCloseModal').click()
})

Cypress.Commands.add('login2', (loginDois = '') => {
    cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > :nth-child(1) > input[placeholder="Informe seu e-mail"]')
        .type(usuario.email_dois,{force:true})
    cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > input[placeholder="Informe sua senha"]')        
        .type(usuario.senha_dois, {force:true})    
    cy.contains('button', 'Acessar')
        .click()


    //cy.get('#textAccountNumber > span')
    //.then($element => {
    //    const code = $element [0].innerText
    //})    
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









Cypress.Commands.add('createTask', (taskName = '') => {
    cy.visit('/')

    //Paremetro para usar em outros commands chamado de alias
    cy.get('input[placeholder="Add a new Task"]').as('inputTask')   

    if (taskName !== '') {
        cy.get('@inputTask')
            .type(taskName)
    }
    
    cy.contains('button', 'Create').click()
})

Cypress.Commands.add('isRequired', (targetMessage)=> {
    cy.get('@inputTask')
    .invoke('prop', 'validationMessage')
    .should((text) => {
        expect(targetMessage).to.eq(text)
    })
})

Cypress.Commands.add('removeTaskByName', (taskName)=> {
    cy.request({
        url: 'http://localhost:3333/helper/tasks',
        method: 'DELETE',
        body: { name: taskName }
    }).then(response => {
        expect(response.status).to.eq(204)
    })
})

Cypress.Commands.add('postTask', (task)=> {
    cy.request({
        url: 'http://localhost:3333/tasks',
        method: 'POST',
        body: task
    }).then(response => {
        expect(response.status).to.eq(201)
    })
})
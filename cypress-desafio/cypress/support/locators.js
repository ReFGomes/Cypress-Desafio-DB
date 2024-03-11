const locators = {

    CADASTRO: {
        BTN_REGISTRAR: '.ihdmxA',
        EMAIL: '.styles__ContainerFormRegister-sc-7fhc7g-0 > :nth-child(2) > input[placeholder="Informe seu e-mail"]',
        NOME: 'input[placeholder="Informe seu Nome"]',
        SENHA: ':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > input[placeholder="Informe sua senha"]',
        CONFSENHA: 'input[name="passwordConfirmation"]',
        BTN_SALDO: '#toggleAddBalance',
        BTN_CADASTRAR: '.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0',
        BTN_FECHARMODAL: '#btnCloseModal',
        BTN_VOLTAR: '#btnBackButton'
    },

    LOGIN: {
        EMAIL: '.style__ContainerFormLogin-sc-1wbjw6k-0 > :nth-child(1) > input[placeholder="Informe seu e-mail"]',
        SENHA: '.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > input[placeholder="Informe sua senha"]',
        BTN_ACESSAR: '.otUnI',
    }
}

export default locators;
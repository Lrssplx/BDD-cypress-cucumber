import LoginPage from '../pageobjects/LoginPage'
const test = new LoginPage


Given("acessa o site", ()=> {
    test.acessasite();
})

When("acessa a pagina", ()=> {
    test.preenche();
})

Then("faço login", ()=> {
    test.loga();
})

When("entra na pagina de contas", ()=> {
    test.entrapagcontas();
})

When("cria conta", ()=> {
    test.criaconta();
})

Then("nova conta criada", ()=> {
    test.contacriada();
})
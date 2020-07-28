import ErroCriacaoContaPage from '../pageobjects/ErroCriacaoContaPage'
const test = new ErroCriacaoContaPage

Given("acessa o site", ()=> {
    test.acessasite();
})
When("preenche", ()=> {
    test.preenche();

})

When("acessa pagina de contas", ()=> {
    test.acessapagcontas();
    
})

When("preenche dados da conta", ()=> {
    test.preenchedados();
})

Then("conta já existe", ()=> {
    test.contaexistente();
})
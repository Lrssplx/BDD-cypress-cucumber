Feature: Login site Real World

    Scenario: Efetuar Login
        Given acessa o site  
        When acessa a pagina
        Then faço login

    Scenario: Criar uma nova conta
        Given entra na pagina de contas
        When cria conta
        Then nova conta criada
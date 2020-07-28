Feature: Erro ao criar uma nova conta
        Scenario: Conta já existente
         Given acessa o site
          When preenche
          When acessa pagina de contas
          When preenche dados da conta
          Then conta já existe
         
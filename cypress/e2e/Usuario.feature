
Feature: Cadastro de usuário

  Scenario: Cadastrar usuário
    Given Acessar página inicial
    When  Verificar componentes presentes 
    And   Salvar usuário sem preencher nenhum campo
    Then Deverá exibir mensagem de campos obrigatórios 
    

    When Realizar cadastro do usuário com dados válidos 
    Then Exibirá mensagem de usuário cadastro com sucesso

    When Verificar usuário cadastrado no grid
    Then Acessar e editar usuário com nome inválido
    And  Ao salvar irá exibir mensagem de dados inválidos
    And  Inserir nome válido na edição e salvar
    Then Dados serão alterados e salvos com sucesso
    

    When Selecionar usuário cadastrado e apagar o cadastro
    Then Usuário será excluído com sucesso
    

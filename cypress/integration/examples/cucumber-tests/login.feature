Feature: Validação de login

Scenario: Login VÁLIDO
    Given que o usuário esta na página de login do Swag Labs
    When ele insire as suas credenciais login|senha VÁLIDOS
    Then deve logar com sucesso na plataforma
        And após ele clica Logout
        Then ele deve ser redirecionado para a tela inicial

Scenario: Login INVÁLIDO
    Given que o usuário esta na página de login do Swag Labs
    When ele insire as suas credenciais login|senha INVÁLIDOS
    Then deve receber uma mensagem de ERRO
        And deve permanacer na tela de login
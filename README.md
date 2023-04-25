# Q.A. Ticto
### Automação 

- Cadastro de usuário
    -- Página carregada
    -- Campos para cadastro de usuário
    -- Campos obrigatórios
    -- Cadastro de usuário
    -- Checagem de cadastro do usuário
    -- Edição com dados inválidos do usuário
    -- Edição com dados válidos do usuário
    -- Exclusão do usuário
    -- Checagem de exclusão do usuário

## Antes de começar
 
 ### Instalação
- Faça o clone ou download do projeto.
- Acesse o diretório "QA-TICTO e rode o comando:
  > npm install
- Ao terminar a instalação, rode o comando para iniciar o projeto:
  > npm run cypress

Automaticamente será exibida a feature desenvolvidas no caminho: "cypress/e2e", onde exibira a tela automatizada .feature, sendo possível rodar em diversos navegadores 1 a 1 ou rodar todos atráves da opção Run all test.

### Estrutura
##### Elementos mapeados

Na pasta support/elements está centralizada todos os elementos utilizados na automação, podendo ser por página ou funcionalidade. Tal organização permite que elementos sejam reutilizados e facilitam na manutenção do código.

Na pasta support/elements/pages está centralizada arquivos de uso recorrente no caso do teste específico da página home do Desafio.


Dentro do projeto e2e, temos também arquivos .feature onde são os testes em BDD para estruturação e organização dos testes em sua execução. 
Há também pasta da telas que foi automatizadas "Usuario", nela encontra-se o processo da tela de usuário e toda sua validação, desde a criação, edição e exclusão.

> 

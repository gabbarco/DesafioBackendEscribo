# Desafio Backend - API de Autenticação

## Visão Geral

Este projeto consiste em uma API RESTful para autenticação de usuários, que permite operações de cadastro, autenticação e recuperação de informações do usuário.

## Requisitos

Certifique-se de ter o Node.js e o npm instalados em sua máquina.

## Configuração do Projeto

1. Clone o repositório para a sua máquina:

   ```bash
   git clone https://github.com/seu-usuario/seu-projeto.git
    ```
2. Navegue até o diretório do projeto:

    ```bash
   cd seu-projeto
    ```

3. Instale as dependencias

    ```bash
   npm install
    ```

## Configuração das Variáveis de Ambiente

1. Crie um arquivo .env na raiz do projeto.

2. Adicione a seguinte variável de ambiente:

    ```bash
   TOKEN_SECRET=<<sua-chave-secreta>>
    ```

## Executando a Aplicação

1. Inicie a aplicação:

   ```bash
   npm start
    ```
    A aplicação estará disponível em http://localhost:3000.

## Endpoints

1. Sign Up (Criação de Cadastro)
    Endpoint: POST /signup

    Input:

   ```bash
   {
    "nome": "Seu Nome",
    "email": "seu@email.com",
    "senha": "suaSenha123",
    "telefones": [{"numero": "123456789", "ddd": "11"]}
   }
    ```

2. Sign In (Autenticação)
    Endpoint: POST /signin

    Input:
   ```bash
   {
    "email": "seu@email.com",
    "senha": "suaSenha123",
   }
    ```

3. Buscar Usuário
    Endpoint: GET /user

    Requisição:

    Header Authentication com valor "Bearer {token}"

## Testes Unitários

1. Execute os testes unitários usando o comando:
   
   ```bash
   npm test
    ```

    Além disso adicione os testes necessários no arquivo authController.test.js

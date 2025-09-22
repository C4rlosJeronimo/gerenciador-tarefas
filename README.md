# Projeto Gerenciador de Tarefas

Este é um sistema web completo para controle de tarefas, desenvolvido como parte dos requisitos de avaliação da disciplina. A aplicação segue o padrão CRUD (Create, Read, Update, Delete) e foi construída utilizando as tecnologias mais modernas do ecossistema JavaScript.

O sistema permite que o usuário crie, visualize, atualize o status e exclua tarefas, tudo através de uma interface intuitiva e reativa.

## ✒️ Autor

  * **Nome:** **CARLOS JERONIMO**

## ✨ Funcionalidades

  * **Criação de Tarefas:** Adicionar novas tarefas com título, descrição e status.
  * **Listagem de Tarefas:** Visualizar todas as tarefas cadastradas em um layout de cards.
  * **Atualização de Tarefas:** Editar as informações de uma tarefa existente ou alterar seu status (Pendente, Em Andamento, Concluída).
  * **Exclusão de Tarefas:** Remover tarefas que não são mais necessárias.

## 🚀 Tecnologias Utilizadas

Este projeto foi construído com uma arquitetura de pastas organizada, separando claramente as responsabilidades do frontend e do backend.

#### **Frontend**

  * **React:** Biblioteca para construção da interface de usuário.
  * **Axios:** Cliente HTTP para comunicação com a API do backend.
  * **React Icons:** Biblioteca de ícones para melhorar a usabilidade da interface.

#### **Backend**

  * **Node.js:** Ambiente de execução para o JavaScript no servidor.
  * **Express:** Framework para a construção da API RESTful.
  * **CORS:** Middleware para permitir requisições do frontend.
  * **MySQL2:** Driver para a conexão com o banco de dados MySQL.

#### **Banco de Dados**

  * **MySQL:** Sistema de gerenciamento de banco de dados para armazenamento das tarefas.

## 📋 Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

  * [Node.js](https://nodejs.org/en/)
  * [NPM](https://www.google.com/search?q=https://www.npmjs.com/) (geralmente vem com o Node.js)
  * Um gerenciador de banco de dados MySQL, como o [MySQL Workbench](https://www.mysql.com/products/workbench/).

## ⚙️ Como Rodar o Projeto

Siga os passos abaixo para executar a aplicação localmente. O sistema deve funcionar corretamente após seguir estas instruções.

**1. Clone o repositório:**

```bash
git clone [URL_DO_SEU_REPOSITORIO_GIT]
cd nome-da-pasta-do-projeto
```

**2. Configure o Banco de Dados:**

  * Abra seu cliente MySQL e crie um novo banco de dados.
  * [cite\_start]Importe o arquivo `.sql` fornecido para criar a tabela e inserir os dados iniciais[cite: 31, 43].

**3. Configure e inicie o Backend:**

  * Navegue até a pasta do backend e instale as dependências:
    ```bash
    cd backend
    npm install
    ```
  * **Importante:** Abra o arquivo `backend/db/db.js` e altere as credenciais de conexão (`user` e `password`) para as do seu banco de dados MySQL.
  * Inicie o servidor backend:
    ```bash
    npm start
    ```
  * O servidor estará rodando em `http://localhost:3001`.

**4. Configure e inicie o Frontend:**

  * Abra **um novo terminal**.
  * Navegue até a pasta do frontend e instale as dependências:
    ```bash
    cd frontend
    npm install
    ```
  * Inicie a aplicação React:
    ```bash
    npm start
    ```
  * O frontend iniciará automaticamente em seu navegador no endereço `http://localhost:3000`.

[cite\_start]**Pronto\!** A aplicação deve estar totalmente funcional[cite: 35].

(Termine de copiar aqui)

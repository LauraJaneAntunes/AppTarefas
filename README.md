# Projeto: App de Tarefas

## Descrição
Este projeto é um aplicativo mobile desenvolvido em React Native para o curso de DSM - Desenvolvimento de Software Multiplataforma da Fatec de Votorantim.

O app permite aos usuários gerenciar suas tarefas, incluindo a criação, edição, listagem e exclusão de tarefas. A comunicação com a API backend permite o armazenamento e a manipulação dos dados.

## Tecnologias Utilizadas
* **React Native:** Framework para desenvolvimento de aplicativos mobile nativos (iOS e Android) utilizando JavaScript e React.
* **Expo:** Plataforma que simplifica o desenvovimento de aplicativos React Native, oferecendo ferramentas e serviços para agilizar o processo, como hot reload e distribuição rápida.
* **Dotenv:**  Biblioteca que facilita o gerenciamento de variáveis de ambiente permitindo que informações sensíveis, como chaves de API e configurações, fiquem armazenadas separadamente do código, melhorando a segurança e a organização.
* **Babel:** Ferramenta que permite a compatibilidade para navegadores antigos.
* **Banco de dados:** Não será usado.


Estrutura da API de Tarefas
A API de Tarefas oferece as funcionalidades básicas de CRUD (Create, Read, Update, Delete) para a gestão de tarefas. A API está estruturada com os seguintes endpoints:

Endpoints da API
Criar Tarefa

Rota: POST /api/tarefas
Descrição: Cria uma nova tarefa com descrição e status.
Resposta: Retorna a tarefa criada com status 201 (Criado).
Listar Tarefas

Rota: GET /api/tarefas
Descrição: Retorna todas as tarefas cadastradas.
Resposta: Retorna uma lista de tarefas com status 200 (OK).
Atualizar Tarefa

Rota: PUT /api/tarefas/:id
Descrição: Atualiza a descrição e/ou status de uma tarefa existente.
Resposta: Retorna a tarefa atualizada com status 200 (OK).
Erro: Retorna status 404 (Não Encontrado) se a tarefa não for encontrada.
Excluir Tarefa

Rota: DELETE /api/tarefas/:id
Descrição: Deleta uma tarefa específica pelo ID.
Resposta: Retorna uma mensagem de sucesso com status 200 (OK).
Erro: Retorna status 404 (Não Encontrado) se a tarefa não for encontrada.
Estrutura de Dados da Tarefa
Cada tarefa é representada por um objeto contendo:

id: Número único identificador da tarefa.
descricao: Texto descrevendo a tarefa.
status: Status da tarefa (pode ser "pendente" ou "completa")

## Instalação
1. **Clone o repositório:**

   git clone (https://github.com/LauraJaneAntunes/AppTarefas)

 2. **Instale as dependências:**
     * Em cada pasta: App e Api
    npm i

 3. **Configure variáveis de ambiente:**
      * Renomeie o arquivo **exeploenv** para: .env
      * No arquivo .env, substitua **seu-servidor-aqui** por seu endereço Endereço IPv4;
      - Para conseguir seu IPv4 siga os passos:
      * Abra seu promtp de comando ou digite cmd no explorer ou executar (windows + r);
      * Digite ipconfig e pressione enter;
      * Verifque se esta conectado a internet pelo wi-fi ou pelo ethernet e busque seu IPv4 correspondente.
         ex.:
            Adaptador de Rede sem Fio Wi-Fi:
            Endereço IPv4. . . . . . . .  . . . . . . . : 123.456.7.890

 4. **Execute o projeto:**
     * Primeiro a Api: de um cd Api no terminal
    node index.js

     * Em seguida App: abra outra janela do terminal, de um cd App
    npx expo start

 5. Acessar a Aplicação:
    * É necessário usar o celular e escanear o QRCode com o aplicativo expo go (https://expo.dev/go)

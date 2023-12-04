# Backend - Pipoca Ágil

## 🛠️🖥️ Pré-requisitos do Ambiente em sua máquina.
- Certifique-se de ter o Node.js instalado: [Node.js](https://nodejs.org/).
- Intale o Yarn a partir da versão: [Yarn 1.22](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable).
- Garanta que possua um cliente de banco de dados: [MySQL Workbench](https://dev.mysql.com/downloads/) ou qualquer outro.
- Garanta que tenha o Docker instalado: [Docker Descktop](https://www.docker.com/products/docker-desktop/) .
- Para testar a utilização da API, utilize um cliente de API REST: [Insomnia](https://insomnia.rest/download) ou outro cliente que desejar.

### ⚙️🖥️ Configurando o Projeto em sua máquina

1. Clone este repositório em sua máquina localmente:
   ```text
   
   git clone https://github.com/SquadLuzRosa/pipoca-agil-back.git
   
   ```
     
2. Crie um arquivo .env em seu projeto com as seguintes variáveis de ambiente:
    ```text
   
    DATABASE_URL="mysql://<usuario>:<senha>@localhost:3306/<nome_schema>"
    PORT=<porta_do_servidor>
    MYSQL_HOST=<localhost>
    MYSQL_USER=<usuario>
    MYSQL_PASSWORD=<senha>
    MYSQL_DB=<nome_schema>
    JWT_SECRET=<chave_secreta>
     
   ```

## Configurando o Docker
1. Baixe a imagem do MYSQL
   ```bash
   # Intall iamge of mySQL
   
   docker pull mysql
   ```
2. Inicie o container do banco de dados MYSQL
```bash
# to run docker iamge of mySQL
   docker run -p 3306:3306 --name name_of_database -e MYSQL_ROOT_PASSWORD=my-secret-pw -d mysql
```


### 🚩 Iniciando o Servidor local
1. No terminal do projeto execute o comando para baixar todas as dependências do projeto:
   ```text
   
   yarn install
   
   ```
2. Inicie a aplicação executando o comando:
   ```text
   
   yarn dev
   
   ```
  O servidor estará acessível em: http://localhost:3001  ou  `http://localhost:<porta_do_servidor>`

### 📍 Iniciando o teste de Rotas
Usando o Insomnia você poderá acessar/testar todas as rotas do servidor. Mas lembre-se de utilizar a URL base `http://localhost:3001  ou  http://localhost:<porta_do_servidor>` para todas as requisições.

#### Testes
   ```bash
   # Testes unitários

   yarn test
   
   ```


## 📚 Documentação do projeto
Abaixo está a documentação da API/Endpoints do site

## 🙎🔒 Auth/Register

| Método | Funcionalidade                             | URL                                    |
| ------ | -------------------------------------------| ---------------------------------------|
| `POST` | Realiza o cadastro do usuário na aplicação | <https://localhost:3001/auth/register> |

<details>
  <summary>A estrutura do <code>body</code> da requisição deverá seguir o padrão abaixo:</summary>

- **Request Body**:
  - `name` (string, Obrigatório): Nome completo do Usuário.
  - `email` (string, Obrigatório): Email.
  - `phone` (string, Obrigatório): Número de celular.
  - `dateOfBirth` (string, Obrigatório): Data de nascimento.
  - `password` (string, Obrigatório): Senha.
  - `confirmPassword` (string, Obrigatório): Confirmação de Senha.
  - `role` (string, Opcional): Acesso do Usuário (default: 'user').

```http
Content-Type: application/json

{
  "name": "Pipoca Rosa",
  "email": "pipoca@example.com",
  "phone": "11981997967",
  "dateOfBirth": "2000/06/29",
  "password": "Password123",
  "confirmPassword": "Password123"
}
```

</details>

<details>
  <summary>A resposta da requisição em caso de sucesso será:</summary>

```http
HTTP/1.1 201 Created
Content-Type: application/json

{
  "token": "<generated-token>"
}
```

</details>

<details>
  <summary>A requisição irá falhar nos seguintes casos:</summary>

- A rota retorna o código <code>400</code>, com a mensagem <code>O nome é obrigatório</code> caso o campo name não seja informado no body da requisição;

- A rota retorna o código <code>400</code>, com a mensagem <code>Email é obrigatório</code> caso o campo email não seja informado no body da requisição;

- A rota retorna o código <code>400</code>, com a mensagem <code>Número de telefone é obrigatório</code> caso o campo phone não seja informado no body da requisição;

- A rota retorna o código <code>400</code>, com a mensagem <code>Data de nascimento é obrigatório</code> caso o campo dateOfBirth não seja informada no body da requisição;

- A rota retorna o código <code>400</code>, com a mensagem <code>Senha é obrigatório</code> caso o campo password não seja informado no body da requisição;

- A rota retorna o código <code>400</code>, com a mensagem <code>O nome deve ter no mínimo 5 caracteres ou passar de 255 </code> caso o campo name tenha menos de 5 caracteres ou passar de 255;
  
- A rota retorna o código <code>400</code>, com a mensagem <code>Endereço de Email inválido</code> caso o campo email seja inválido;

- A rota retorna o código <code>400</code>, com a mensagem <code>Email já está em uso. Por favor, escolha outro.</code> caso o usuário tente criar uma conta com email existente;

- A rota retorna o código <code>400</code>, com a mensagem <code>Número de telefone inválido</code> caso o campo phone seja inválido;

- A rota retorna o código <code>400</code>, com a mensagem <code>Data de Nascimento inválida</code> caso o campo dateOfBirth seja inválida;

- A rota retorna o código <code>400</code>, com a mensagem <code>Senha deve ter 8 caracteres ou mais</code> caso o usuário tente criar uma senha com menos de 8 caracteres;

- A rota retorna o código <code>400</code>, com a mensagem <code>A senha deve conter pelo menos uma letra maiúscula</code> caso o usuário tente criar uma senha sem letra maiúscula;

- A rota retorna o código <code>400</code>, com a mensagem <code>A senha deve conter pelo menos uma letra minúscula</code> caso o usuário tente criar uma senha sem letra minúscula;

- A rota retorna o código <code>400</code>, com a mensagem <code>A senha deve conter pelo menos um número</code> caso o usuário tente criar uma senha sem números;

- A rota retorna o código <code>400</code>, com a mensagem <code>A senha deve conter pelo menos um caractere especial </code> caso o usuário tente criar uma senha sem caracteres especiais;
  
</details>

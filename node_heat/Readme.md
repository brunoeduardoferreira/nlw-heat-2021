


## Ferramentas e Bibliotecas

- [VSCode]()
- [Express]()
- [TypeScript]()
- [JavaScript]()
- [TS Node Dev]()
- [Prisma]()
- [DotEnv]()
- [Axios]()
- []()
- []()
- []()
- []()
- []()
- []()
- []()
- []()
- [SQLite]()


## - Configurações

### Configurar GitHub para aceitar autenticação OAuth

 - 1 - Caso não tenha uma conta no GitHub crie uma.
 - 2 - Ao logar no Github acesse seu avatar e clique em ***SETTINGS***
 - 3 - Agora acesse no menu disponível a opção ***DEVELOPER SETTINGS***
 - 4 - Acesse a Opção ***OAUTH APPS***
 - 5 - Clique no botão ***REGISTER A NEW APPLICATION***
    - 5.1 - Preeencha os campos abaixo e clique no Botão ***Register application*** : 
    <div>
      <img src="https://github.com/brunoeduardoferreira/nlw-heat-2021/blob/main/Assets/RegisterGitHubOauth.png"/>
    </div>
 - 6 - Após clicar no botão será necessário copiar a chave Client ID e gerar a Chave Client Secrets que deveram ser copiadas para o arquivo ***.env*** seguindo o seguinte formato : 

  ```env
  GITHUB_CLIENT_SECRET=colocar_a_client_secret_aqui
  GITHUB_CLIENT_ID=colocar_aqui_a_client_id
  ```

### Stack Utilizada

A stack escolhida para o desenvolvimento foi o `express.js` , juntamente com `typescript`.

> Instanando dependências

```sh
npm run install
```

> Rodando as migração, criando as tabelas na base de dados

```sh
npm run typeorm migration:run
```

> Rodando a aplicação

```sh
npm run dev
```

### Endereço da aplicação

A aplicação está hospedada no [heroku](https://vibbra-app.herokuapp.com/), para o deploys ser automatizado no no mesmo, em vez de fazer uso do gitlab fornecido pela Vibbra, fiz uso do meu github foi facilita a integração, sendo assim, o endereço do código do front-end é o este [gustavodsf/vibbra-front](https://github.com/gustavodsf/vibbra-front) já do back-end é [gustavodsf/vibbra-back](https://github.com/gustavodsf/vibbra-back)

### Estrutua de diretórios

```shell
  .
  ├── src/
  │   ├── controller/   # armazena os controller que recebem as requisiões
  │   ├── database/     # armaze os arquivos do sqllite
  │   ├── entities/     # as entidades do projeto
  │   ├── repositories/ # realiza as consultas no banco de dados
  │   ├── service/      # fazem a ponte entre os controller e os repositories
  │   ├── routes.ts     # armazena as rotas do projeto
  │   └── server.ts     # arquivo de configuração do servidor do projeto
  ├── ormconfig.json    #arquivo de cofiguração do orm, especificando aonde fica o sqllite
  ├── README.md # arquivo descrevendo o projeto
  └── Procfile  # arquivo utilizado pelo heroku, para deploy da applicaçãp
```

#### Rotas

- /config/app (Post) Criação da configuração do aplicativo
- /config/email (Post) Criação da configuração do email
- /config/sms (Post) Criação da configuração do sms
- /config/webpush (Post) Criação da configuração do web push

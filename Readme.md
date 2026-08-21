## API WITH SEQUELIZE(ORM) AND SQLITE(DATABASE)

### Command install librarys:

` npm i sequelize@6.32.1 sequelize-cli@6.6.1 sqlite3@5.1.6 --save-exact `

### Comand init:

` npx sequelize-cli init `

### Comand for generate model:

` npx sequelize-cli model:generate --name Pessoa --attributes nome:string,email:string,cpf:string,ativo:boolean,role:string `

### Command for execute migration:

` npx sequelize-cli db:migrate `

### Command for generate seed:

` npx sequelize-cli seed:generate --name demo-pessoa `

### Command for execute seed:

` npx sequelize-cli db:seed:all `

## More Commands:

| Command | Description |
| :--- | :--- |
| `npx sequelize-cli db:migrate` | Executa todas as migrações pendentes para atualizar o banco de dados |
| `npx sequelize-cli db:migrate:schema:timestamps:add` | Atualiza uma tabela de migração para ter marcação de data/hora |
| `npx sequelize-cli db:migrate:status` | Exibe o status de todas as migrações |
| `npx sequelize-cli db:migrate:undo` | Reverte a migração mais recente do banco de dados |
| `npx sequelize-cli db:migrate:undo:all` | Reverte todas as migrações executadas |
| `npx sequelize-cli db:seed` | Executa um seeder específico |
| `npx sequelize-cli db:seed:undo` | Deleta os últimos dados inseridos via seeds do banco de dados |
| `npx sequelize-cli db:seed:all` | Executa todos os seeders |
| `npx sequelize-cli db:seed:undo:all` | Deleta todos os dados inseridos via seeds do banco de dados |
| `npx sequelize-cli db:create` | Cria um banco com uma configuração específica |
| `npx sequelize-cli db:drop` | Exclui o banco de dados especificado na configuração |
| `npx sequelize-cli init` | Inicia um projeto |
| `npx sequelize-cli init:config` | Inicia as configurações |
| `npx sequelize-cli init:migrations` | Inicia as migrações |
| `npx sequelize-cli init:models` | Inicia os modelos |
| `npx sequelize-cli init:seeders` | Inicia os seeders |
| `npx sequelize-cli migration:generate` | Gera um novo arquivo de migração |
| `npx sequelize-cli model:generate` | Gera uma model e sua migração [alias: model:create] |
| `npx sequelize-cli seed:generate` | Gera um novo arquivo de seed |

### Documentation Sequelize

[Doc Sequelize](https://sequelize.org/docs/v6/)
[Types Sequelize](https://sequelize.org/docs/v6/core-concepts/model-basics/#data-types)
[Specif Types Sequelize](https://sequelize.org/docs/v6/other-topics/other-data-types/)
[Migration Sequelize](https://sequelize.org/docs/v6/other-topics/migrations/#running-migrations)
[Seed Sequelize](https://sequelize.org/docs/v6/other-topics/migrations/#creating-the-first-seed)
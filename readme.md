# Country API

Este projeto é uma API simples para fornecer informações sobre países. Ele foi desenvolvido para fins educacionais e pode ser usado como base para projetos mais complexos.

## Funcionalidades

- Listar todos os países disponíveis.
- Obter informações detalhadas sobre um país específico.
- Pesquisar países por nome, código ou região.
- Criar, atualizar e deletar informações de países.

## Tecnologias Utilizadas

- **Linguagem**: JavaScript
- **Framework**: Fastify
- **Banco de Dados**: PostgreSQL

## Instalação

1. Clone este repositório:
    ```bash
    git clone https://github.com/emanuelbatixta/country_api.git
    ```
2. Navegue até o diretório do projeto:
    ```bash
    cd country_api
    ```
3. Instale as dependências:
    ```bash
    npm install
    ```

## Uso

1. Configure as variáveis de ambiente no arquivo `.env`:
    ```env
    PORT=3333
    PGHOST='seu-host'
    PGDATABASE='seu-banco'
    PGUSER='seu-usuario'
    PGPASSWORD='sua-senha'
    ENDPOINT_ID='seu-endpoint-id'
    ```
2. Inicie o servidor:
    ```bash
    npm run dev
    ```
3. Acesse a API em `http://localhost:3333` (ou outra porta configurada).

## Endpoints

- `GET /paises`: Retorna a lista de todos os países.
- `GET /paises?search={nome}`: Pesquisa países pelo nome.
- `POST /paises`: Cria um novo país.
- `PUT /paises/{id}`: Atualiza as informações de um país.
- `DELETE /paises/{id}`: Deleta um país.

## Contribuição

Contribuições são bem-vindas! Siga os passos abaixo:

1. Faça um fork do repositório.
2. Crie uma branch para sua feature:
    ```bash
    git checkout -b minha-feature
    ```
3. Faça commit das suas alterações:
    ```bash
    git commit -m "Adiciona minha feature"
    ```
4. Envie para o repositório remoto:
    ```bash
    git push origin minha-feature
    ```
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).

## Contato

Para dúvidas ou sugestões, entre em contato pelo e-mail: emanuelbatixta@gmail.com.
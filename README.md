# Projeto Infobio UFCSPA - Nova Arquitetura

Este é o repositório do projeto Infobio UFCSPA, reestruturado com uma arquitetura MVC (Model-View-Controller) em PHP.

## Visão Geral da Arquitetura

A estrutura do projeto foi desenhada para ser simples, escalável e de fácil manutenção, separando as responsabilidades da aplicação.

```
/
├── app/
│   ├── controllers/  # Controla o fluxo, recebe requisições e envia respostas
│   ├── models/       # Representa os dados e a lógica de negócio
│   └── views/        # Camada de apresentação (HTML)
│       ├── layouts/  # Templates principais
│       └── partials/ # Componentes de view reutilizáveis
├── config/           # Arquivos de configuração (ex: banco de dados)
├── core/             # Núcleo da aplicação (ex: classe de conexão com BD)
├── public/           # Raiz do servidor web, único ponto de entrada
│   ├── assets/       # Arquivos públicos (CSS, JS, imagens)
│   └── index.php     # Front-Controller, recebe todas as requisições
├── router/           # Definição das rotas da aplicação
├── vendor/           # Dependências do Composer
├── .env.example      # Arquivo de exemplo para variáveis de ambiente
├── composer.json     # Gerenciador de dependências PHP
└── README.md         # Este arquivo
```

## Requisitos

- PHP >= 8.1
- Composer ([https://getcomposer.org/](https://getcomposer.org/))
- Um servidor de banco de dados (ex: MySQL, MariaDB)

## Como Iniciar (Setup)

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/seu-usuario/infobio.com.br.git
    cd infobio.com.br
    ```

2.  **Instale as dependências:**
    (Assumindo que você já tem o Composer instalado)
    ```bash
    composer install
    ```

3.  **Configure as variáveis de ambiente:**
    Copie o arquivo de exemplo `.env.example` para um novo arquivo chamado `.env`.
    ```bash
    cp .env.example .env
    ```
    Abra o arquivo `.env` e ajuste as variáveis, principalmente as de conexão com o banco de dados (`DB_DATABASE`, `DB_USERNAME`, `DB_PASSWORD`).

4.  **Crie o banco de dados:**
    Crie um banco de dados com o nome que você especificou em `DB_DATABASE`. Você pode precisar importar um arquivo `.sql` ou criar tabelas manualmente.

5.  **Inicie o servidor local:**
    Use o servidor embutido do PHP para um desenvolvimento rápido.
    ```bash
    php -S localhost:8000 -t public
    ```
    - O comando inicia um servidor na porta 8000.
    - A flag `-t public` define o diretório `public/` como a raiz, o que é uma prática de segurança importante.

6.  **Acesse a aplicação:**
    Abra seu navegador e acesse [http://localhost:8000](http://localhost:8000).

## Como Contribuir

- **Controllers:** Crie novos arquivos em `app/controllers/`.
- **Models:** Crie novos arquivos em `app/models/` para interagir com o banco de dados.
- **Views:** Crie os arquivos `.php` correspondentes em `app/views/`.
- **Rotas:** Adicione a nova rota no arquivo `router/web.php` para ligar a URL ao seu novo controller.
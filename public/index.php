<?php

// Exibe todos os erros (ótimo para desenvolvimento)
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Carrega o autoloader do Composer
require __DIR__ . '/../vendor/autoload.php';

// Carrega as variáveis de ambiente do arquivo .env
// O Dotenv procurará por um arquivo .env no diretório raiz do projeto
try {
    $dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '/../');
    $dotenv->load();
} catch (\Dotenv\Exception\InvalidPathException $e) {
    die('Não foi possível encontrar o arquivo .env. Copie .env.example para .env e configure suas variáveis.');
}


// Define a URI da requisição para o roteador
$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$requestMethod = $_SERVER['REQUEST_METHOD'];

// Carrega e processa as rotas
require_once __DIR__ . '/../router/web.php';

<?php

use App\Controllers\HomeController;

// O roteador é um simples array que mapeia URIs e métodos HTTP para controllers
$routes = [
    'GET' => [
        '/' => [HomeController::class, 'index'],
        // Exemplo de outra rota:
        // '/posts' => [PostController::class, 'index'],
    ],
    'POST' => [
        // Exemplo de rota POST:
        // '/posts' => [PostController::class, 'store'],
    ]
];

/**
 * Função simples para despachar a rota.
 *
 * @param array $routes O array de rotas
 * @param string $method O método HTTP da requisição
 * @param string $uri A URI da requisição
 */
function dispatch(array $routes, string $method, string $uri)
{
    // Verifica se a rota para o método e URI existe
    if (isset($routes[$method][$uri])) {
        [$controller, $action] = $routes[$method][$uri];

        // Cria a instância do controller e chama a ação
        try {
            $instance = new $controller();
            $instance->$action();
        } catch (\Throwable $e) {
            // Em caso de erro, exibe uma mensagem genérica
            // Em produção, você logaria o erro e mostraria uma página de erro 500
            http_response_code(500);
            echo "<h1>Erro 500 - Erro Interno do Servidor</h1>";
            // Para debug, você pode descomentar a linha abaixo:
            // echo "<pre>" . $e->getMessage() . "</pre>";
        }

    } else {
        // Se a rota não for encontrada, exibe uma página de erro 404
        http_response_code(404);
        echo "<h1>Erro 404 - Página Não Encontrada</h1>";
    }
}

// Despacha a rota com base na URI e método da requisição atual
// Essas variáveis foram definidas em `public/index.php`
dispatch($routes, $requestMethod, $uri);

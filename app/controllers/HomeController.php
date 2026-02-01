<?php

namespace App\Controllers;

class HomeController
{
    /**
     * Exibe a página inicial.
     */
    public function index()
    {
        // Define o título da página
        $pageTitle = 'Página Inicial';
        
        // Define o conteúdo da página
        $welcomeMessage = 'Bem-vindo(a) à nova estrutura do Infobio!';

        // Carrega a view principal, passando os dados
        $this->view('home', [
            'pageTitle' => $pageTitle,
            'welcomeMessage' => $welcomeMessage
        ]);
    }

    /**
     * Carrega uma view com um layout.
     *
     * @param string $viewName O nome do arquivo da view (sem .php)
     * @param array $data Dados a serem extraídos para a view
     */
    protected function view(string $viewName, array $data = [])
    {
        // Transforma as chaves do array em variáveis
        extract($data);

        // Inicia o buffer de saída para capturar o conteúdo da view
        ob_start();
        
        // Inclui o arquivo da view
        $viewPath = __DIR__ . "/../views/{$viewName}.php";
        if (file_exists($viewPath)) {
            require $viewPath;
        } else {
            // Se a view não existe, exibe um erro
            echo "View não encontrada: {$viewName}";
        }
        
        // Captura o conteúdo da view que foi processado
        $content = ob_get_clean();

        // Inclui o layout principal, que terá acesso à variável $content
        require __DIR__ . '/../views/layouts/main.php';
    }
}

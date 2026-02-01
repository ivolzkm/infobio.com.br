<?php

namespace App\Models;

use App\Core\Database;
use PDO;

class Post
{
    /**
     * Busca todos os posts no banco de dados.
     * Este é um método de exemplo.
     *
     * @return array
     */
    public static function findAll(): array
    {
        try {
            // Obtém a instância da conexão PDO
            $pdo = Database::getInstance();

            // Prepara e executa a query
            $stmt = $pdo->query('SELECT id, title, content, created_at FROM posts ORDER BY created_at DESC');
            
            // Retorna todos os resultados
            return $stmt->fetchAll();

        } catch (\PDOException $e) {
            // Em um cenário real, você deveria logar o erro em vez de "morrer"
            // Por simplicidade, estamos apenas exibindo a mensagem.
            // Retornar um array vazio também é uma opção para a UI não quebrar.
            error_log('Erro ao buscar posts: ' . $e->getMessage());
            return [];
        }
    }
}

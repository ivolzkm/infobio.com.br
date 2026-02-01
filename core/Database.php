<?php

namespace App\Core;

use PDO;
use PDOException;

class Database
{
    /** @var PDO|null A instância de conexão PDO (Singleton) */
    private static ?PDO $instance = null;

    /**
     * O construtor é privado para prevenir a criação de instâncias diretas.
     */
    private function __construct() {}

    /**
     * O método clone é privado para prevenir a clonagem da instância.
     */
    private function __clone() {}

    /**
     * Retorna a instância única da conexão PDO.
     * Se a conexão ainda não existir, ela é criada.
     *
     * @return PDO
     */
    public static function getInstance(): PDO
    {
        if (self::$instance === null) {
            // Carrega a configuração do banco de dados
            $config = require __DIR__ . '/../config/database.php';

            // String de Conexão (DSN)
            $dsn = "{$config['driver']}:host={$config['host']};port={$config['port']};dbname={$config['database']};charset={$config['charset']}";

            try {
                // Cria a instância do PDO
                self::$instance = new PDO($dsn, $config['username'], $config['password'], $config['options']);
            } catch (PDOException $e) {
                // Em caso de falha, exibe uma mensagem de erro genérica
                // Em um ambiente de produção, você deveria logar este erro em vez de exibi-lo
                die('Erro de conexão com o banco de dados: ' . $e->getMessage());
            }
        }

        return self::$instance;
    }
}

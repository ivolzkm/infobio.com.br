<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= htmlspecialchars($pageTitle ?? 'Infobio UFCSPA') ?></title>
    <link rel="stylesheet" href="/assets/css/app.css">
</head>
<body>

    <header class="container">
        <nav>
            <a href="/" style="color: var(--primary-color); font-weight: bold; text-decoration: none;">InfoBio UFCSPA</a>
            <!-- Outros links de navegação podem ser adicionados aqui -->
        </nav>
    </header>

    <main class="container">
        <?php
        // A variável $content será injetada aqui pelo controller
        // Ela contém o HTML da view específica da página
        echo $content ?? '';
        ?>
    </main>

    <footer class="container" style="text-align: center; margin-top: 20px; font-size: 0.9em;">
        <p>&copy; <?= date('Y') ?> Infobio UFCSPA. Todos os direitos reservados.</p>
    </footer>

    <!-- Scripts JS podem ser adicionados aqui -->
    <!-- <script src="/assets/js/app.js"></script> -->
</body>
</html>

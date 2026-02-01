<?php
// A variável $pageTitle é definida no controller e usada no layout.
// A variável $welcomeMessage é definida e usada aqui.
?>

<h1><?= htmlspecialchars($welcomeMessage ?? 'Bem-vindo!') ?></h1>
<p>Esta é a página inicial da aplicação, renderizada através do HomeController e da view `home.php`.</p>
<p>A estrutura MVC está funcionando!</p>

<p>Próximos passos sugeridos:</p>
<ul>
    <li>Explorar o roteador em <code>router/web.php</code> para adicionar novas rotas.</li>
    <li>Criar novos métodos no <code>HomeController</code> ou criar novos controllers.</li>
    <li>Conectar ao banco de dados e usar um Model como o <code>Post.php</code> para buscar dados reais.</li>
</ul>

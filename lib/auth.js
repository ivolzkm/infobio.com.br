/**
 * @file Este arquivo centraliza a lógica de autenticação da aplicação.
 * Atualmente, as funções são simulações e não interagem com um banco de dados real.
 * No futuro, este será o "Model" para todas as operações relacionadas a usuários.
 */

/**
 * Simula o processo de login de um usuário.
 * Em uma implementação futura, esta função se conectará a um backend ou banco de dados
 * para validar as credenciais do usuário.
 *
 * @param {string} email - O email fornecido pelo usuário.
 * @param {string} senha - A senha fornecida pelo usuário.
 * @returns {Promise<object|null>} Um objeto contendo os dados do usuário se a autenticação for bem-sucedida,
 * ou `null` se as credenciais forem inválidas.
 */
export async function realizarLogin(email, senha) {
  console.log(`Tentativa de login para o email: ${email}`);

  // Lógica de autenticação com banco de dados a ser implementada aqui.
  // Por enquanto, apenas simulamos um usuário e senha válidos para demonstração.
  if (email === "usuario@infobio.com.br" && senha === "senha123") {
    return {
      nome: "Usuário InfoBio",
      email: "usuario@infobio.com.br",
      token: "jwt-token-simulado-aqui", // Em um caso real, o token seria gerado pelo backend.
    };
  }

  return null;
}

/**
 * Simula a criação de uma nova conta de usuário.
 * No futuro, esta função irá registrar um novo usuário no banco de dados.
 *
 * @param {object} dadosUsuario - Os dados do novo usuário (ex: nome, email, senha).
 * @returns {Promise<object>} Um objeto representando o usuário recém-criado.
 */
export async function criarConta(dadosUsuario) {
  console.log("Criando nova conta com os dados:", dadosUsuario);

  // Lógica de inserção no banco de dados a ser implementada aqui.
  // Por enquanto, apenas retornamos os dados do usuário com um ID simulado.
  return {
    id: "user_" + Date.now(),
    ...dadosUsuario,
  };
}

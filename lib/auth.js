// lib/auth.js
// Este arquivo servirá como a camada de "Model" para a lógica de autenticação.

/**
 * Simula a função de login de um usuário.
 * No futuro, esta função irá se conectar a um banco de dados para verificar as credenciais.
 * @param {string} email - O email do usuário.
 * @param {string} password - A senha do usuário.
 * @returns {Promise<object|null>} Um objeto de usuário se o login for bem-sucedido, ou null se falhar.
 */
export async function login(email, password) {
  console.log(`Tentativa de login para o email: ${email}`);

  // Lógica de banco de dados virá aqui.
  // Por enquanto, vamos simular um usuário válido.
  if (email === "usuario@infobio.com.br" && password === "senha123") {
    return {
      name: "Usuário InfoBio",
      email: "usuario@infobio.com.br",
      token: "jwt-token-simulado-aqui",
    };
  }

  return null;
}

/**
 * Simula a criação de uma nova conta de usuário.
 * No futuro, esta função irá inserir um novo usuário no banco de dados.
 * @param {object} userData - Os dados do novo usuário (ex: nome, email, senha).
 * @returns {Promise<object>} O objeto do usuário recém-criado.
 */
export async function signup(userData) {
  console.log("Criando nova conta com os dados:", userData);

  // Lógica de inserção no banco de dados virá aqui.
  // Por enquanto, apenas retornamos o usuário com um ID simulado.
  return {
    id: "user_" + Date.now(),
    ...userData,
  };
}

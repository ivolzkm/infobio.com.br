// hooks/useTheme.js

import { useState, useEffect } from 'react';

/**
 * @file Este hook gerencia o tema da aplicação (claro ou escuro).
 * Ele lê a preferência do usuário do `localStorage` ou do sistema,
 * aplica o tema na tag `<html>` e fornece uma função para alterná-lo.
 */

/**
 * Hook customizado para gerenciar o tema da aplicação.
 * 
 * @returns {{
 *   theme: 'light' | 'dark',
 *   toggleTheme: () => void
 * }} Um objeto contendo o tema atual e uma função para alternar o tema.
 */
export function useTheme() {
  /**
   * @state theme - Armazena o tema atual da aplicação ('light' or 'dark').
   */
  const [theme, setTheme] = useState('light');

  // Efeito que é executado uma única vez no lado do cliente para definir o tema inicial.
  useEffect(() => {
    // 1. Verifica se há um tema salvo no localStorage.
    const storedTheme = window.localStorage.getItem('theme');
    
    // 2. Verifica a preferência de tema do sistema operacional do usuário.
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (storedTheme) {
      setTheme(storedTheme);
    } else if (prefersDark) {
      setTheme('dark');
    }
    // Se não houver preferência, o tema padrão 'light' é mantido.
  }, []);

  // Efeito que aplica as mudanças de tema sempre que o estado `theme` é alterado.
  useEffect(() => {
    if (theme === 'dark') {
      // Adiciona a classe 'dark' ao elemento `<html>` para aplicar os estilos de tema escuro.
      document.documentElement.classList.add('dark');
      window.localStorage.setItem('theme', 'dark');
    } else {
      // Remove a classe 'dark' para reverter para os estilos de tema claro.
      document.documentElement.classList.remove('dark');
      window.localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  /**
   * Função para alternar o tema entre 'light' e 'dark'.
   */
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return { theme, toggleTheme };
}

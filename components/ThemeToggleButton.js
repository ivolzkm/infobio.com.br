/**
 * @file Contém o componente do botão que permite ao usuário alternar entre o tema claro e escuro.
 */

import React, { useState, useEffect } from 'react';
import { useTheme } from '../hooks/useTheme';

/**
 * Componente SVG para o ícone do sol (usado no tema escuro).
 * @returns {JSX.Element}
 */
const IconeSol = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

/**
 * Componente SVG para o ícone da lua (usado no tema claro).
 * @returns {JSX.Element}
 */
const IconeLua = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
);

/**
 * Botão que permite ao usuário alternar o tema da aplicação entre claro e escuro.
 * @returns {JSX.Element | null} O componente do botão ou nulo se ainda não estiver montado no cliente.
 */
function BotaoAlternarTema() {
  const { theme, toggleTheme } = useTheme();

  /**
   * @state isMounted - Garante que o botão só seja renderizado no lado do cliente.
   * Isso evita problemas de "hydration mismatch" no Next.js, já que o tema
   * depende de `localStorage` e `window`, que não existem no servidor.
   */
  const [isMounted, setIsMounted] = useState(false);

  // Efeito que define `isMounted` como true após a montagem inicial do componente.
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Se o componente ainda não foi montado, não renderiza nada para evitar inconsistências.
  if (!isMounted) {
    return null;
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none transition-colors"
      aria-label="Alternar Tema"
    >
      {theme === 'light' ? <IconeLua /> : <IconeSol />}
    </button>
  );
}

export default BotaoAlternarTema;

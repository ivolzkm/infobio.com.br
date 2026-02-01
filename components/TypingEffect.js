/**
 * @file Componente que simula um efeito de digitação para um texto.
 */

import { useState, useEffect } from 'react';

/**
 * Renderiza um texto com um efeito de digitação.
 *
 * @param {{text: string, speed?: number, onCompleted?: () => void}} props
 * @returns {JSX.Element}
 */
function TypingEffect({ text, speed = 50, onCompleted }) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    if (!text) return;

    setDisplayedText('');
    let i = 0;
    const intervalId = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(i));
      i++;
      if (i >= text.length) {
        clearInterval(intervalId);
        if (onCompleted) {
          onCompleted();
        }
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed, onCompleted]);

  return <span>{displayedText}</span>;
}

export default TypingEffect;

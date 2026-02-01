/**
 * @file Componente que renderiza uma interface de terminal para navegação.
 */

import { useState } from 'react';
import Link from 'next/link';
import TypingEffect from './TypingEffect';

/**
 * Componente para a linha de comando do terminal.
 * @param {{
 *   command: string,
 *   path?: string,
 *   showCursor?: boolean
 * }} props
 * @returns {JSX.Element}
 */
const CommandLine = ({ command, path = '~', showCursor = false }) => (
  <div className="flex items-center">
    <span className="text-green-400">{path}$</span>
    <span className="ml-2 flex-1">
      <TypingEffect text={command} onCompleted={() => showCursor && <span className="blinking-cursor"></span>} />
    </span>
    {showCursor && <span className="blinking-cursor"></span>}
  </div>
);

/**
 * Componente principal do terminal.
 * @param {{
 *   data: Array<{title: string, description: string, href: string, status: 'active' | 'soon'}>
 * }} props
 * @returns {JSX.Element}
 */
function Terminal({ data }) {
  const [showCommands, setShowCommands] = useState(false);

  return (
    <div className="w-full max-w-4xl mx-auto p-4 md:p-8 bg-black/80 rounded-lg shadow-2xl font-mono text-sm md:text-base">
      <div className="flex items-center pb-2 mb-4 border-b border-gray-700">
        <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
      </div>

      <CommandLine command="cat boas_vindas.txt" showCursor={!showCommands} />

      <div className="mt-2">
        <p className="text-gray-300">
          Olá! Bem-vindo ao InfoBio, a comunidade para quem ama saúde e tecnologia.
        </p>
        <p className="text-gray-300 mb-4">
          Para começar, execute um dos comandos abaixo:
        </p>
      </div>

      <div className="space-y-3">
        {data.map((item) => {
          const isSoon = item.status === 'soon';
          const command = `./navegar --secao ${item.title.toLowerCase().replace(' ', '-')}`;

          const content = (
            <div className={`flex flex-col md:flex-row md:items-center ${isSoon ? 'cursor-not-allowed' : 'cursor-pointer transform hover:translate-x-1 transition-transform'}`}>
              <span className="text-blue-400 w-full md:w-1/2">{command}</span>
              <span className={`text-gray-400 ${isSoon ? 'italic' : ''}`}>
                {item.description}
                {isSoon && <span className="text-purple-400 ml-2">(em breve)</span>}
              </span>
            </div>
          );

          if (isSoon) {
            return <div key={item.title}>{content}</div>;
          }

          return (
            <Link href={item.href} key={item.title} legacyBehavior>
              <a>{content}</a>
            </Link>
          );
        })}
      </div>

      <div className="mt-6 flex items-center">
        <span className="text-green-400">~/inicio$</span>
        <span className="blinking-cursor ml-2"></span>
      </div>
    </div>
  );
}

export default Terminal;

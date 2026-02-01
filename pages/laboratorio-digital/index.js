import Head from "next/head";
import Link from "next/link";
import ThemeToggleButton from "../../components/ThemeToggleButton";

function LaboratorioDigitalPage() {
  return (
    <>
      <Head>
        <title>Laboratório Digital - InfoBio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center justify-center p-4 transition-colors duration-500">
        <div className="absolute top-4 right-4">
          <ThemeToggleButton />
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            Laboratório Digital
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Este espaço está em construção. Volte em breve para experiências interativas!
          </p>
          <Link href="/ivolzkm" legacyBehavior>
            <a className="text-blue-600 dark:text-blue-400 hover:underline">
              &larr; Voltar ao portfólio de Ivo Lozekam
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}

export default LaboratorioDigitalPage;

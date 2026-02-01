import Head from "next/head";
import Link from "next/link";
import ThemeToggleButton from "../components/ThemeToggleButton";
import { getPortalData } from "../lib/portalData";

function PortalCard({ card }) {
  const isSoon = card.status === 'soon';
  const cardClasses = `block p-8 rounded-2xl shadow-lg transition-all duration-300 ${
    isSoon
      ? 'bg-gray-200 dark:bg-gray-800/50 relative'
      : 'bg-white dark:bg-gray-800 hover:shadow-2xl transform hover:-translate-y-1'
  }`;
  const titleClasses = `text-2xl font-bold mb-2 ${isSoon ? 'text-gray-500 dark:text-gray-400' : ''}`;
  const descriptionClasses = `text-gray-600 ${isSoon ? 'dark:text-gray-500' : 'dark:text-gray-400'}`;

  const cardContent = (
    <div className={cardClasses}>
      {isSoon && <div className="absolute top-2 right-2 bg-purple-500 text-white text-xs font-bold px-2 py-1 rounded-full">EM BREVE</div>}
      <h2 className={titleClasses}>{card.title}</h2>
      <p className={descriptionClasses}>{card.description}</p>
    </div>
  );

  return isSoon ? cardContent : (
    <Link href={card.href} legacyBehavior>
      <a>{cardContent}</a>
    </Link>
  );
}

function PortalInfoBio({ data }) {
  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-500">
        <div className="absolute top-4 right-4">
          <ThemeToggleButton />
        </div>

        <header className="text-center py-16 sm:py-24">
          <h1 className="text-5xl sm:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
            {data.header.title}
          </h1>
          <p className="text-xl sm:text-2xl mt-4 text-gray-600 dark:text-gray-300">
            {data.header.subtitle}
          </p>
        </header>

        <main className="max-w-4xl mx-auto px-4 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
            {data.cards.map((card) => (
              <PortalCard key={card.title} card={card} />
            ))}
          </div>
        </main>

        <footer className="text-center py-8 text-gray-500 dark:text-gray-400">
          <p>&copy; 2024 InfoBio. Todos os direitos reservados.</p>
        </footer>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const data = getPortalData();
  return {
    props: {
      data,
    },
  };
}

export default PortalInfoBio;
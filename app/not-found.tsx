import Link from "next/link";

export default function NotFound() {
  return (
    <div className="site-container grid min-h-[60vh] place-items-center py-20 text-center">
      <div>
        <p className="font-mono text-sm text-teal-600 dark:text-teal-300">HTTP 404</p>
        <h1 className="mt-4 text-4xl font-semibold text-slate-950 dark:text-white">Rota não encontrada.</h1>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          O recurso solicitado não existe ou foi movido.
        </p>
        <Link href="/" className="button-primary mt-7">Voltar ao início</Link>
      </div>
    </div>
  );
}

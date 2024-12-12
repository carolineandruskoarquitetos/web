import Link from "next/link";
import { Suspense } from "react";

export default function NotFound() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center gap-6 px-4 pt-24 text-center">
        <h1 className="text-6xl font-bold">404</h1>
        <h2 className="text-xl">Página não encontrada</h2>
        <p className="text-foreground/60 max-w-[460px]">
          Desculpe, não conseguimos encontrar a página que você está procurando.
        </p>
        <Link
          href="/"
          className="mt-4 px-6 py-2 border border-foreground/20 hover:bg-foreground/5 transition-colors"
        >
          Voltar para início
        </Link>
      </div>
    </Suspense>
  );
}

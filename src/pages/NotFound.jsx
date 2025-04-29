import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800 text-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="mt-4 text-2xl">Página não encontrada</p>
        <p className="mt-2 text-lg">
          Desculpe, a página que você está procurando não existe.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block px-6 py-2 text-lg font-semibold bg-purple-500 rounded-full hover:bg-purple-600 transition-colors"
        >
          Voltar para a página inicial
        </Link>
      </div>
    </div>
  );
}

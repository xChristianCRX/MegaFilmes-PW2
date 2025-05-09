export default function Footer() {
    return (
      <footer className="bg-gray-900 text-gray-400 py-6">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} <span className="text-purple-400 font-semibold">MegaFilmes</span>. Todos os direitos reservados.
          </p>
          <p className="text-xs mt-1">Feito por Christian Ricci usando React + Tailwind + MockAPI</p>
        </div>
      </footer>
    );
  }
  
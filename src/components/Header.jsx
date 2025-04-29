import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const active = location.pathname;

  return (
    <>
      <header className="bg-gray-900 p-6">
        <div className="flex items-center justify-between relative">
          {/* Nome do site no canto esquerdo */}
          <div className="text-4xl font-bold text-purple-500">
            Mega<span className="text-white">Filmes</span>
          </div>

          {/* Links no centro */}
          <nav className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <ul className="flex gap-8">
              {[
                { name: "Home", path: "/" },
                { name: "Register", path: "/register" },
                { name: "Trending", path: "/trending" },
                { name: "New Releases", path: "/new-releases" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className={`text-xl font-semibold transition-colors duration-300 ${
                      active === item.path
                        ? "text-purple-400"
                        : "text-white hover:text-purple-400"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Campo de busca na direita */}
          <div className="relative flex items-center">
            <span className="absolute left-3 text-gray-400">
              {/* Ícone da lupa (Heroicons) */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
                />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Buscar filmes..."
              className="bg-gray-800 text-white pl-10 pr-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400"
            />
          </div>
        </div>
      </header>
    </>
  );
}

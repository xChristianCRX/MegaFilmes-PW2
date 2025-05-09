import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const active = location.pathname;

  function handleKeyDown(e) {
    if (e.key === "Enter" && search.trim() !== "") {
      navigate(`/all-movies?search=${encodeURIComponent(search.trim())}`);
    }
  }

  return (
    <>
      <header className="bg-gray-900 p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 relative">
          {/* Logo centralizado no mobile e central absoluto em telas maiores */}
          <div className="text-3xl md:text-4xl font-bold text-purple-500 md:absolute md:left-1/2 md:transform md:-translate-x-1/2 text-center">
            Mega<span className="text-white">Filmes</span>
          </div>

          {/* Navegação */}
          <nav className="order-2 md:order-1">
            <ul className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
              {[
                { name: "Início", path: "/" },
                { name: "Adicionar", path: "/register" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className={`text-lg md:text-xl font-semibold transition-colors duration-300 ${
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

          {/* Campo de busca */}
          <div className="relative order-3 md:order-2">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
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
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={handleKeyDown}
              className="bg-gray-800 text-white pl-10 pr-4 py-2 w-full md:w-64 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400"
            />
          </div>
        </div>
      </header>
    </>
  );
}

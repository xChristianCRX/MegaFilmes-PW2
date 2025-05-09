import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const active = location.pathname;

  return (
    <>
      <header className="bg-gray-900 p-6">
        <div className="flex items-center justify-between">
          <nav>
            <ul className="flex gap-8">
              {[
                { name: "Início", path: "/" },
                { name: "Adicionar", path: "/register" },
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

          <div className="text-4xl font-bold text-purple-500 absolute left-1/2 transform -translate-x-1/2">
            Mega<span className="text-white">Filmes</span>
          </div>
        </div>
      </header>
    </>
  );
}

import { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";

export default function AllMovies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://680fbd0f27f2fdac240f39c0.mockapi.io/movies")
      .then((res) => {
        setMovies(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao buscar filmes:", err);
        setLoading(false);
      });
  }, []);

  return (
      <section className="text-white">
        <h1 className="text-4xl font-extrabold text-purple-500 mb-6 text-center">
          Todos os Filmes
        </h1>

        {loading ? (
          <div className="flex justify-center items-center h-40">
            <p className="text-gray-400 text-lg">Carregando filmes...</p>
          </div>
        ) : movies.length === 0 ? (
          <div className="text-center text-gray-400 mt-10">
            Nenhum filme registrado ainda.
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {movies.map((movie) => (
              <Link
                to={`/movie/${movie.id}`}
                key={movie.id}
                className="group relative bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
              >
                <img
                  src={movie.imageUrl}
                  alt={movie.title}
                  className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-black/20 px-3 py-4">
                  <h2 className="text-white text-lg font-semibold truncate">{movie.title}</h2>
                  <p className="text-sm text-purple-400">{movie.genre}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
  );
}

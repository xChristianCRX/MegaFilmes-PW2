import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import MoviesCarousel from "../components/MoviesCarousel";
import { MovieContext } from "../contexts/MovieContext";
import { showCustomToast } from "../components/CustomToast";

export default function Home() {
  const { movies, setMovies } = useContext(MovieContext);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://680fbd0f27f2fdac240f39c0.mockapi.io/movies")
      .then((res) => setMovies(res.data))
      .catch(() => {
        showCustomToast({
          title: "Erro!",
          message: "Não foi possível renderizar os filmes.",
          type: "error",
        });
      });
  }, [setMovies]);

  const getRandomMovies = (list, count) => {
    const shuffled = [...list].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <section className="p-6">
        <MoviesCarousel movies={getRandomMovies(movies, 6)} />
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Destaques da Semana</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {getRandomMovies(movies, 5).map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              onClick={() => navigate(`/all-movies`)}
              className="inline-block hover:text-purple-300 font-medium text-lg transition hover:cursor-pointer"
            >
              Ver todos os filmes &rarr;
            </a>
          </div>
        </section>
      </section>
    </div>
  );
}

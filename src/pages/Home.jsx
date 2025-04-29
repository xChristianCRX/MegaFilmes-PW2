import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import MovieCard from "../components/MovieCard";
import MoviesCarousel from "../components/MoviesCarousel";

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("https://680fbd0f27f2fdac240f39c0.mockapi.io/movies")
      .then((res) => setMovies(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header active={ "Home" }/>

      <section className="p-6">
        <MoviesCarousel movies={movies} />
        <div className="mt-15 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </div>
  );
}

import { useState } from "react";
import {MovieContext} from "./MovieContext"

export default function MovieProvider({ children }) {
  const [movies, setMovies] = useState([]);

  return (
    <MovieContext.Provider value={{ movies, setMovies }}>
      {children}
    </MovieContext.Provider>
  );
}

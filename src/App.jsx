import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
import NotFound from "./pages/NotFound";
import CreateMovie from "./pages/CreateMovie";
import Movie from "./pages/Movie";
import Layout from "./components/Layout";
import AllMovies from "./pages/AllMovies";
import MovieProvider from "./contexts/MovieProvider";

export default function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <MovieProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<CreateMovie />} />
            <Route path="/register/:id" element={<CreateMovie />} />
            <Route path="/movie/:id" element={<Movie />} />
            <Route path="/all-movies" element={<AllMovies />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MovieProvider>
    </BrowserRouter>
  );
}

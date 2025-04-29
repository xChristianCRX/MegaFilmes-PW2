import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
import NotFound from "./pages/NotFound";
import CreateMovie from "./pages/CreateMovie";
import Movie from "./pages/Movie";

export default function App() {
  return (
    <BrowserRouter>
    <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<CreateMovie />} />
        <Route path="/movie:id" element={<Movie />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

import { useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { showCustomToast } from "../components/CustomToast";
import axios from "axios";
import Swal from "sweetalert2";
import { MovieContext } from "../contexts/MovieContext";

export default function Movie() {
  const { id } = useParams();
  const { setMovies } = useContext(MovieContext);
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://680fbd0f27f2fdac240f39c0.mockapi.io/movies/${id}`)
      .then((res) => {
        setMovie(res.data);
        setLoading(false);
      })
      .catch(() => {
        showCustomToast({
          title: "Erro!",
          message: "Não foi possível localizar o filme.",
          type: "error",
        });
        setLoading(false);
      });
  }, [id]);

  async function deleteMovie(id) {
    const result = await Swal.fire({
      title: "Tem certeza?",
      text: "Essa ação irá excluir o filme permanentemente.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Sim, excluir!",
      cancelButtonText: "Cancelar",
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(
          `https://680fbd0f27f2fdac240f39c0.mockapi.io/movies/${id}`
        );
        setMovies((prev) => prev.filter((movie) => movie.id !== id));

        showCustomToast({
          title: "Sucesso!",
          message: "Filme excluído com sucesso!",
          type: "success",
        });

        navigate("/");
      } catch {
        showCustomToast({
          title: "Erro!",
          message: "Não foi possível excluir o filme.",
          type: "error",
        });
      }
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p className="text-lg">Carregando...</p>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p className="text-lg">Filme não encontrado.</p>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-black text-white">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30 blur-sm"
        style={{ backgroundImage: `url(${movie.imageUrl})` }}
      ></div>

      <div className="absolute inset-0 bg-red bg-opacity-70"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center px-6 py-20 max-w-7xl mx-auto">
        <div className="w-full md:w-1/3 mb-10 md:mb-0 md:mr-12 max-w-sm">
          <img
            src={movie.imageUrl}
            alt={movie.title}
            className="w-full rounded-xl shadow-xl"
          />
        </div>

        <div className="w-full md:w-2/3 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-purple-400 mb-4">
            {movie.title}
          </h1>
          <p className="text-lg text-gray-300 mb-6">{movie.genre}</p>

          <p className="text-gray-400 mb-8 max-w-xl">
            Prepare-se para uma jornada emocionante com este filme imperdível.
            Clique abaixo para assistir agora!
          </p>

          <div className="flex flex-wrap gap-4 mt-6">
            <button className="hover:cursor-pointer px-8 py-3 bg-purple-600 hover:bg-purple-700 transition text-white text-lg font-semibold rounded-full shadow-lg">
              Assistir Agora
            </button>

            <button
              className="hover:cursor-pointer px-8 py-3 bg-purple-800 hover:bg-purple-900 transition text-white text-lg font-semibold rounded-full shadow-lg"
              onClick={() => navigate(`/register/${movie.id}`)}
            >
              Editar Informações
            </button>

            <button
              className="hover:cursor-pointer px-8 py-3 bg-red-600 hover:bg-red-700 transition text-white text-lg font-semibold rounded-full shadow-lg flex items-center gap-2"
              onClick={() => deleteMovie(movie.id)}
            >
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
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3m5 0H6"
                />
              </svg>
              Excluir Filme
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useState, useEffect } from "react";
import axios from "axios";
import { showCustomToast } from "../components/CustomToast";
import { useNavigate, useParams } from "react-router-dom";

export default function CreateMovie() {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditMode = Boolean(id);

  const [form, setForm] = useState({
    title: "",
    genre: "",
    releaseDate: "",
    imageUrl: "",
  });

  useEffect(() => {
    if (isEditMode) {
      axios
        .get(`https://680fbd0f27f2fdac240f39c0.mockapi.io/movies/${id}`)
        .then((res) => setForm(res.data))
        .catch(() => {
          showCustomToast({
            title: "Erro!",
            message: "Erro ao carregar os dados do filme.",
            type: "error",
          });
        });
    }
  }, [id, isEditMode]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isEditMode) {
        await axios.put(`https://680fbd0f27f2fdac240f39c0.mockapi.io/movies/${id}`, form);
        showCustomToast({
          title: "Atualizado!",
          message: "Filme atualizado com sucesso!",
          type: "success",
        });
      } else {
        await axios.post(`https://680fbd0f27f2fdac240f39c0.mockapi.io/movies`, form);
        showCustomToast({
          title: "Sucesso!",
          message: "Filme cadastrado com sucesso!",
          type: "success",
        });
      }

      navigate("/");
    } catch {
      showCustomToast({
        title: "Erro!",
        message: "Não foi possível salvar o filme.",
        type: "error",
      });
    }
  };

  return (
    <div className="min-h-screen text-white">
      <div className="max-w-xl mx-auto bg-gray-800 shadow-lg rounded-xl p-8 mt-10">
        <h2 className="text-3xl font-bold mb-6">{isEditMode ? "Editar Filme" : "Cadastrar Novo Filme"}</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-1">Título</label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              className="w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Digite o título do filme"
              required
            />
          </div>
          <div>
            <label className="block mb-1">Gênero</label>
            <input
              type="text"
              name="genre"
              value={form.genre}
              onChange={handleChange}
              className="w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Ex: Ação, Comédia..."
              required
            />
          </div>
          <div>
            <label className="block mb-1">Data de Lançamento</label>
            <input
              type="date"
              name="releaseDate"
              value={form.releaseDate}
              onChange={handleChange}
              className="w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          <div>
            <label className="block mb-1">URL da Imagem</label>
            <input
              type="url"
              name="imageUrl"
              value={form.imageUrl}
              onChange={handleChange}
              className="w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="https://example.com/imagem.jpg"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 text-white font-semibold px-6 py-2 rounded-md transition duration-300 hover:cursor-pointer"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

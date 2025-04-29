export default function Movie({ movie }) {
  return (
    <div>
      <div className="min-h-screen bg-gray-900 flex flex-col items-center p-8">
        {/* Imagem do filme */}
        <div className="w-full max-w-3xl overflow-hidden rounded-lg shadow-lg">
          <img
            src={movie.imageUrl}
            alt={movie.title}
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Informações do filme */}
        <div className="mt-8 text-center">
          <h1 className="text-4xl font-bold text-white">{movie.title}</h1>
          <p className="text-purple-400 text-xl mt-4">{movie.genre}</p>

          {/* Botões ou outras ações futuras */}
          <div className="mt-6">
            <button className="px-6 py-2 bg-purple-600 text-white text-lg rounded-full hover:bg-purple-700 transition">
              Assistir Agora
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

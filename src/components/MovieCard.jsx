import { useNavigate } from "react-router-dom";

export default function MovieCard({ movie }) {
  const navigate = useNavigate();

  return (
    <>
      <div
        key={movie.id}
        className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:cursor-pointer"
        onClick={() => navigate(`/movie/${movie.id}`)}
      >
        <img
          src={movie.imageUrl}
          alt={movie.title}
          className="w-full h-72 object-cover object-top"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold truncate">{movie.title}</h3>
        </div>
      </div>
    </>
  );
}

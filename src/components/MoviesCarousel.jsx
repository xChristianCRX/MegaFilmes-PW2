import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";

export default function MoviesCarousel({ movies }) {
  const navigate = useNavigate();

  return (
    <div className="relative p-4">
      {/* Botão PREVIOUS */}
      <div className="swiper-button-prev-custom absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full cursor-pointer z-20">
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </div>

      {/* Botão NEXT */}
      <div className="swiper-button-next-custom absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full cursor-pointer z-20">
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>

      {/* Carousel */}
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        spaceBetween={20}
        slidesPerView={4}
        loop={true}
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div className="aspect-[3/4] overflow-hidden rounded-lg shadow-lg hover:cursor-pointer" onClick={() => navigate(`/movie/${movie.id}`)}>
              <img
                src={movie.imageUrl}
                alt={movie.title}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-white text-center mt-2 font-semibold">
              {movie.title}
            </h3>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

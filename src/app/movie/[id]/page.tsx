import { fetchMovieById } from "../../../lib/omdb";
import Image from "next/image";
import { MovieDetail } from "../../../types/movieDetail";
import Link from "next/link";

export default async function MovieDetailPage({ params }: { params: { id: string } }) {
  const movie: MovieDetail | null = await fetchMovieById(params.id);

  if (!movie) {
    return (
      <p className="text-center mt-20 text-red-500 text-lg">
        Movie not found 😢
      </p>
    );
  }

  return (
    <div className="min-h-screen px-6 py-10 md:px-12 bg-gradient-to-b from-gray-950 to-black text-gray-100">
      <div className="flex flex-col md:flex-row gap-10 items-start">
        {/* Poster */}
        <div className="relative w-full md:w-[350px] h-[500px] flex-shrink-0 rounded-lg overflow-hidden shadow-lg">
          <Image
            src={movie.Poster !== "N/A" ? movie.Poster : "/fallback.jpg"}
            alt={movie.Title || "Movie poster"}
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>

        {/* Movie Info */}
        <div className="flex-1 space-y-5">
          <h1 className="text-3xl md:text-5xl font-bold text-white">{movie.Title}</h1>
          <p className="text-gray-400">
            {movie.Year} • {movie.Rated || "N/A"} • {movie.Runtime || "N/A"}
          </p>

          {/* Genre tags */}
          <div className="flex flex-wrap gap-2">
            {movie.Genre?.split(", ").map((genre: string) => (
              <span
                key={genre}
                className="bg-red-600/80 text-white px-3 py-1 rounded-full text-xs font-semibold"
              >
                {genre}
              </span>
            ))}
          </div>

          {/* Plot */}
          <p className="text-gray-200 leading-relaxed">{movie.Plot}</p>

          {/* Additional Details */}
          <div className="space-y-1 text-sm text-gray-400">
            <p>
              <span className="font-semibold text-gray-300">Director:</span> {movie.Director || "N/A"}
            </p>
            <p>
              <span className="font-semibold text-gray-300">Actors:</span> {movie.Actors || "N/A"}
            </p>
            <p>
              <span className="font-semibold text-gray-300">Language:</span> {movie.Language || "N/A"}
            </p>
            <p>
              <span className="font-semibold text-gray-300">IMDB Rating:</span> ⭐ {movie.imdbRating || "N/A"}
            </p>
          </div>

          {/* Back button */}
          <Link
            href="/"
            className="inline-block mt-4 bg-gray-700 hover:bg-gray-600 px-5 py-2 rounded-lg text-white font-semibold transition"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

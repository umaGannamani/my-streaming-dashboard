"use client";
import { Movie } from "../../types/movie";
import MovieCard from "./MovieCard";

export default function MovieRow({
  categoryTitle,
  movies,
}: {
  categoryTitle: string;
  movies: Movie[];
}) {
  if (!movies || movies.length === 0) {
    return (
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3 px-6">{categoryTitle}</h2>
        <p className="text-gray-400 text-sm px-6">No movies found.</p>
      </section>
    );
  }

  return (
    <section className="mb-10">
      <h2 className="text-xl font-semibold mb-3 px-6">{categoryTitle}</h2>

      <div className="flex space-x-4 overflow-x-auto scrollbar-thin scrollbar-thumb-red-600 scrollbar-track-gray-900 px-6 pb-3 scroll-smooth">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </section>
  );
}

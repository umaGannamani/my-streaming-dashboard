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
      <section className="mb-10 px-6">
        <h2 className="text-xl font-semibold mb-3">{categoryTitle}</h2>
        <p className="text-gray-400 text-sm">No movies found for this category.</p>
      </section>
    );
  }

  return (
    <section className="mb-10">
      <h2 className="text-xl font-semibold mb-3 px-6">{categoryTitle}</h2>

      {/* Horizontal scroll row */}
      <div
        className="flex space-x-4 overflow-x-auto pb-3 px-6 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900"
        style={{ scrollBehavior: "smooth" }}
      >
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </section>
  );
}

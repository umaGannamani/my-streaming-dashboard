import { fetchPopular } from "../lib/omdb";
import HeroBanner from "./components/HeroBanner";
import MovieRow from "./components/MovieRow";

export default async function HomePage() {
  const movies = await fetchPopular();

  // Empty state
  if (!movies || movies.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] text-center text-gray-400">
        <p className="text-lg">No movies available at the moment.</p>
        <p className="text-sm mt-2">Please try again later.</p>
      </div>
    );
  }

  const firstMovie = movies[0];

  return (
    <div className="space-y-12 mt-16">
      {/* -----------------------------
           HERO BANNER
      -------------------------------- */}
      {firstMovie && <HeroBanner movie={firstMovie} />}

      {/* -----------------------------
           MOVIE ROW SECTIONS
      -------------------------------- */}
      <MovieRow
        categoryTitle="Popular Batman Movies"
        movies={movies}
      />

      <MovieRow
        categoryTitle="More Action Picks"
        movies={movies.slice(1, Math.min(6, movies.length))}
      />

      <MovieRow
        categoryTitle="Classics Collection"
        movies={movies.slice(6, Math.min(12, movies.length))}
      />
    </div>
  );
}

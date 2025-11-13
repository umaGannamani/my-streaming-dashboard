"use client";

import Image from "next/image";
import Link from "next/link";
import { Movie } from "../../types/movie";

export default function HeroBanner({ movie }: { movie: Movie }) {
  if (!movie) return null;

  const poster =
    movie.Poster && movie.Poster !== "N/A" ? movie.Poster : "/fallback.jpg";

  return (
    <section className="relative w-full h-[80vh] overflow-hidden mb-10">
      {/* Background Image */}
      <Image
        src={poster}
        alt={movie.Title || "Movie poster"}
        fill
        className="object-cover brightness-[0.6]"
        priority
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent"></div>

      {/* Bottom-left text + buttons */}
      <div className="absolute bottom-10 left-8 sm:left-16 max-w-xl z-20">
        <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 leading-tight drop-shadow-lg">
          {movie.Title}
        </h1>

        {movie.Year && (
          <p className="text-gray-300 text-base sm:text-lg mb-5">
            Released: {movie.Year}
          </p>
        )}

        <div className="flex flex-wrap gap-4">
          <Link
            href={`/movie/${movie.imdbID}`}
            className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg text-lg font-semibold transition"
          >
            Watch Now
          </Link>

          <button className="border border-gray-300 hover:bg-gray-300 hover:text-black text-white px-6 py-3 rounded-lg text-lg font-semibold transition">
            + Add to List
          </button>
        </div>
      </div>
    </section>
  );
}

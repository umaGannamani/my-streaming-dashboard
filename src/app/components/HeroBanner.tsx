"use client";
import Image from "next/image";
import Link from "next/link";
import { Movie } from "@/types/movie";


export default function HeroBanner({ movie }: { movie: Movie }) {
  if (!movie) return null;

  const poster = movie.Poster && movie.Poster !== "N/A" ? movie.Poster : "/fallback.jpg";

  return (
    <section className="relative w-full h-[70vh] mb-10">
      <Image
        src={poster}
        alt={movie.Title || "Movie poster"}
        fill
        className="object-cover brightness-[0.6]"
        priority
      />

      <div className="absolute bottom-10 left-8 max-w-lg z-20 text-white">
        <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 drop-shadow-lg">
          {movie.Title}
        </h1>

        <p className="text-gray-300 text-sm sm:text-base mb-4">Released: {movie.Year}</p>

        <div className="flex gap-4">
          <Link
            href={`/movie/${movie.imdbID}`}
            className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-semibold transition"
          >
            Watch Now
          </Link>

          <button className="border border-gray-300 hover:bg-gray-300 hover:text-black px-6 py-3 rounded-lg font-semibold transition">
            + Add to List
          </button>
        </div>
      </div>
    </section>
  );
}

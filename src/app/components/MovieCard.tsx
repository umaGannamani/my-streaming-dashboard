"use client";
import Image from "next/image";
import Link from "next/link";
import { Movie } from "../../types/movie";

export default function MovieCard({ movie }: { movie: Movie }) {
  const poster =
    movie.Poster && movie.Poster !== "N/A"
      ? movie.Poster
      : "/fallback.jpg";

  return (
    <Link
      href={`/movie/${movie.imdbID}`}
      className="min-w-[160px] relative group flex flex-col items-center"
    >
      <div className="w-[160px] h-[240px] overflow-hidden rounded-lg shadow-md shadow-black/30">
        <Image
          src={poster}
          alt={movie.Title || "Movie poster"}
          width={160}
          height={240}
          className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "/fallback.jpg";
          }}
        />
      </div>

      <p className="mt-2 text-sm text-gray-300 text-center w-[150px] truncate group-hover:text-white transition-colors">
        {movie.Title || "Untitled Movie"}
      </p>
    </Link>
  );
}

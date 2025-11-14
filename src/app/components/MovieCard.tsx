"use client";
import Image from "next/image";
import Link from "next/link";
import { Movie } from "../../types/movie";

export default function MovieCard({ movie }: { movie: Movie }) {
  const poster = movie.Poster && movie.Poster !== "N/A" ? movie.Poster : "/fallback.jpg";

  return (
    <Link
      href={`/movie/${movie.imdbID}`}
      className="min-w-[150px] flex flex-col items-center group"
    >
      <div className="w-[150px] h-[225px] overflow-hidden rounded-lg shadow-lg shadow-black/30">
        <Image
          src={poster}
          alt={movie.Title || "Movie poster"}
          width={150}
          height={225}
          className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
          onError={(e) => (e.currentTarget.src = "/fallback.jpg")}
        />
      </div>
      <p className="mt-2 text-sm text-gray-300 text-center w-[150px] truncate group-hover:text-white">
        {movie.Title || "Untitled Movie"}
      </p>
    </Link>
  );
}

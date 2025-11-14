// src/lib/omdb.ts
import type { Movie, MovieDetail } from "@/types/movie";

const BASE_URL = "https://www.omdbapi.com/";
const API_KEY = process.env.OMDB_API_KEY;

if (!API_KEY) {
  console.warn("⚠️ OMDB_API_KEY is missing. Please set it in .env.local");
}

/**
 * Fetch a list of movies (simulated “popular” list)
 */
export async function fetchPopular(): Promise<Movie[]> {
  try {
    const url = `${BASE_URL}?apikey=${API_KEY}&s=batman&type=movie`;
    const res = await fetch(url, { cache: "no-store" });

    if (!res.ok) {
      console.error("❌ Failed to fetch movies:", res.statusText);
      return [];
    }

    const data = await res.json();

    if (data.Response === "False") {
      console.error("OMDb API error:", data.Error);
      return [];
    }

    return data.Search as Movie[];
  } catch (err) {
    console.error("⚠️ Error fetching popular movies:", err);
    return [];
  }
}

/**
 * Fetch full details for a movie by IMDb ID
 */
export async function fetchMovieById(id: string): Promise<MovieDetail | null> {
  try {
    const url = `${BASE_URL}?apikey=${API_KEY}&i=${id}&plot=full`;
    const res = await fetch(url, { cache: "no-store" });

    if (!res.ok) {
      console.error("❌ Failed to fetch movie:", res.statusText);
      return null;
    }

    const data = await res.json();

    if (data.Response === "False") {
      console.error("OMDb detail error:", data.Error);
      return null;
    }

    return data as MovieDetail;
  } catch (err) {
    console.error("⚠️ Error fetching movie by ID:", err);
    return null;
  }
}

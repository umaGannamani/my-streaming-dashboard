// src/lib/omdb.ts
const BASE_URL = "https://www.omdbapi.com/";
const API_KEY = process.env.OMDB_API_KEY;

// ✅ Helper to check API key
if (!API_KEY) {
  console.warn("⚠️ OMDB_API_KEY is missing. Please set it in .env.local");
}

/**
 * Fetch a list of movies (simulated “popular” list)
 * Since OMDb doesn’t have a real /popular endpoint,
 * we use a keyword search such as "batman".
 */
export async function fetchPopular() {
  try {
    const url = `${BASE_URL}?apikey=${API_KEY}&s=batman&type=movie`;

    const res = await fetch(url, {
      // ✅ Force server-side fetch for Next.js App Router
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("❌ Failed to fetch movies:", res.statusText);
      return [];
    }

    const data = await res.json();

    if (data.Response === "False") {
      console.error("OMDb API error:", data.Error);
      return [];
    }

    return data.Search || [];
  } catch (err) {
    console.error("⚠️ Error fetching popular movies:", err);
    return [];
  }
}

/**
 * Fetch full details for a movie by IMDb ID
 */
export async function fetchMovieById(id: string) {
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

    return data;
  } catch (err) {
    console.error("⚠️ Error fetching movie by ID:", err);
    return null;
  }
}

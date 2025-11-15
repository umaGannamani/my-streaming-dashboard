# AI_Report

## Tools used
- ChatGPT (OpenAI) — coding help, component scaffolding, prompt engineering to produce TypeScript + Next.js code.
- (Optional) GitHub Copilot — for small completions.

## Areas where AI was used heavily
- Generating React + Next.js components (Header, Hero, MovieRow).
- Tailwind CSS layout and responsive classes.
- TMDB fetch helper functions (`lib/tmdb.ts`) and TypeScript interface definitions (`types/index.ts`).
- Dynamic routing set up in `app/movie/[id]/page.tsx`.
- Building the `AI_Report.md` and README.

## How the public API was used
- API: The Movie Database (TMDB).
- Endpoints:
  - `/trending/movie/week?language=en-US`
  - `/movie/popular?language=en-US`
  - `/movie/top_rated?language=en-US`
  - `/movie/{movie_id}?language=en-US`
- API key is stored in `.env.local` and set as `TMDB_API_KEY` in Vercel environment variables.

## 3. Technologies Used

| Technology | Purpose |
|-----------|---------|
| **Next.js 16** | Framework for SSR / routing |
| **React** | Component-based UI |
| **Tailwind CSS** | Utility-first styling |
| **TypeScript** | Type-safe development |
| **OMDB API** | Fetch movie data |
| **Node.js** | Runtime environment |
| **ESLint & Prettier** | Code formatting & linting |

---
## Live demo & repo
- Live URL: `https://my-streaming-dashboard-sigma.vercel.app/`  
- GitHub: `https://github.com/umaGannamani/my-streaming-dashboard.git`  

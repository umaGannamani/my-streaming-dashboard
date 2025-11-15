# 🎬 StoryBit – Streaming Dashboard (Next.js + TailwindCSS)

StoryBit is a modern streaming dashboard built using **Next.js 16**, **Tailwind CSS**, and **server-side movie fetching** from the OMDB API.  
It includes a hero section, category-based movie carousels, responsive UI, and clean component architecture.

---

## 🚀 Features

### ✅ Hero Banner  
- Displays a highlighted movie  
- Contains title, release year, "Watch Now" & "Add to List" buttons  
- Fully responsive and mobile-friendly  

### ✅ Movie Sections  
- “Classic Collections”  
- “More Action Picks”  
- “Popular Batman Movies”  
- All sections appear IN COLUMN on desktop  
- Each section’s movies appear IN ROW (horizontal scrolling)

### ✅ Movie Detail Page  
- Dynamic route: `/movie/[id]`  
- Fetches full details from API  
- Display poster, actors, plot, genre & ratings  

### ✅ Tech Stack  
- **Next.js 16** (App Router)  
- **Tailwind CSS**  
- **TypeScript**  
- **OMDB API**  
- **ESLint + Prettier**  

---

## 📁 Folder Structure

# 🎬 StoryBit – Streaming Dashboard (Next.js + TailwindCSS)

StoryBit is a modern streaming dashboard built using **Next.js 16**, **Tailwind CSS**, and **server-side movie fetching** from the OMDB API.  
It includes a hero section, category-based movie carousels, responsive UI, and clean component architecture.

---

## 🚀 Features

### ✅ Hero Banner  
- Displays a highlighted movie  
- Contains title, release year, "Watch Now" & "Add to List" buttons  
- Fully responsive and mobile-friendly  

### ✅ Movie Sections  
- “Classic Collections”  
- “More Action Picks”  
- “Popular Batman Movies”  
- All sections appear IN COLUMN on desktop  
- Each section’s movies appear IN ROW (horizontal scrolling)

### ✅ Movie Detail Page  
- Dynamic route: `/movie/[id]`  
- Fetches full details from API  
- Display poster, actors, plot, genre & ratings  

### ✅ Tech Stack  
- **Next.js 16** (App Router)  
- **Tailwind CSS**  
- **TypeScript**  
- **OMDB API**  
- **ESLint + Prettier**  

---

## 📁 Folder Structure

my-streaming-dashboard/
├── app/
│ ├── movie/[id]/page.tsx
│ ├── components/
│ │ ├── HeroBanner.tsx
│ │ ├── MovieSection.tsx
│ │ └── MovieCard.tsx
│ ├── layout.tsx
│ └── globals.css
├── public/
├── tailwind.config.js
├── package.json
└── README.md
---

## 🛠️ Installation & Setup

### 1️⃣ Install dependencies
```bash
npm install
2️⃣ Run the development server
npm run dev

3️⃣ Build production version
npm run build

4️⃣ Start production server
npm start

🌐 Environment Variables

Create a .env.local file:

OMDB_API_KEY=your_api_key_here


You can get a free API key from:
https://www.omdbapi.com/apikey.aspx


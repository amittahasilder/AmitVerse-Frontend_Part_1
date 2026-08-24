import { useMemo, useState } from "react";
import { motion } from "framer-motion";

const trendingData = [
  {
    id: 1,
    title: "Solo Leveling",
    type: "Anime",
    year: "2024",
    rating: "9.8",
    episodes: "25 Episodes",
    genre: "Action",
    image:
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: 2,
    title: "Demon Slayer",
    type: "Anime",
    year: "2025",
    rating: "9.7",
    episodes: "63 Episodes",
    genre: "Fantasy",
    image:
      "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: 3,
    title: "Attack on Titan",
    type: "Anime",
    year: "2023",
    rating: "9.6",
    episodes: "89 Episodes",
    genre: "Action",
    image:
      "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: 4,
    title: "Jujutsu Kaisen",
    type: "Anime",
    year: "2025",
    rating: "9.5",
    episodes: "47 Episodes",
    genre: "Supernatural",
    image:
      "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: 5,
    title: "One Piece",
    type: "Anime",
    year: "2025",
    rating: "9.4",
    episodes: "1100+ Episodes",
    genre: "Adventure",
    image:
      "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: 6,
    title: "The Dark Knight",
    type: "Movie",
    year: "2008",
    rating: "9.3",
    episodes: "2h 32m",
    genre: "Action",
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: 7,
    title: "Interstellar",
    type: "Movie",
    year: "2014",
    rating: "9.2",
    episodes: "2h 49m",
    genre: "Sci-Fi",
    image:
      "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: 8,
    title: "Your Name",
    type: "Anime",
    year: "2016",
    rating: "9.1",
    episodes: "1h 46m",
    genre: "Romance",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: 9,
    title: "Chainsaw Man",
    type: "Anime",
    year: "2022",
    rating: "9.0",
    episodes: "12 Episodes",
    genre: "Action",
    image:
      "https://images.unsplash.com/photo-1578632292335-df3abbb0d586?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: 10,
    title: "Spirited Away",
    type: "Anime",
    year: "2001",
    rating: "8.9",
    episodes: "2h 05m",
    genre: "Fantasy",
    image:
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: 11,
    title: "Avengers",
    type: "Movie",
    year: "2019",
    rating: "8.8",
    episodes: "3h 01m",
    genre: "Action",
    image:
      "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: 12,
    title: "Weathering With You",
    type: "Anime",
    year: "2019",
    rating: "8.7",
    episodes: "1h 52m",
    genre: "Romance",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=700&q=85",
  },
];

const contentFilters = ["All", "Anime", "Movies"];

const timeFilters = ["Today", "This Week", "This Month"];

function Trending() {
  const [contentFilter, setContentFilter] = useState("All");
  const [timeFilter, setTimeFilter] = useState("Today");

  const filteredContent = useMemo(() => {
    if (contentFilter === "All") {
      return trendingData;
    }

    if (contentFilter === "Movies") {
      return trendingData.filter((item) => item.type === "Movie");
    }

    return trendingData.filter((item) => item.type === "Anime");
  }, [contentFilter]);

  return (
    <main className="min-h-screen overflow-hidden bg-[#020203] text-white">

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none fixed inset-0 z-0">

        <div
          className="
            absolute
            left-1/2
            top-[-250px]
            h-[600px]
            w-[900px]
            -translate-x-1/2
            rounded-full
            bg-purple-700/[0.09]
            blur-[160px]
          "
        />

        <div
          className="
            absolute
            bottom-0
            left-[-200px]
            h-[500px]
            w-[500px]
            rounded-full
            bg-indigo-700/[0.05]
            blur-[150px]
          "
        />

        <div
          className="
            absolute
            right-[-200px]
            top-1/2
            h-[500px]
            w-[500px]
            rounded-full
            bg-fuchsia-700/[0.04]
            blur-[150px]
          "
        />

      </div>

      {/* =====================================================
          PAGE CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1600px]
          px-5
          pb-24
          pt-28
          sm:px-8
          lg:px-14
          lg:pt-32
          xl:px-20
        "
      >

        {/* ===================================================
            HEADER
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="max-w-3xl"
        >

          {/* SMALL LABEL */}

          <div className="mb-5 flex items-center gap-3">

            <span
              className="
                h-px
                w-10
                bg-purple-400/60
              "
            />

            <span
              className="
                text-[9px]
                font-bold
                uppercase
                tracking-[4px]
                text-purple-300/70
              "
            >
              What's Hot
            </span>

          </div>

          {/* TITLE */}

          <h1
            className="
              text-4xl
              font-black
              tracking-[-2px]
              text-white
              sm:text-5xl
              lg:text-6xl
            "
          >
            Trending
            <span className="ml-3 text-purple-400">
              Now
            </span>
          </h1>

          <p
            className="
              mt-5
              max-w-2xl
              text-sm
              leading-7
              text-white/30
              sm:text-base
            "
          >
            Discover the anime and movies everyone is
            watching right now. Find your next obsession
            from the most popular titles.
          </p>

        </motion.div>

        {/* ===================================================
            FILTER AREA
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.15,
            duration: 0.6,
          }}
          className="
            mt-10
            flex
            flex-col
            gap-4
            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >

          {/* CONTENT FILTER */}

          <div
            className="
              inline-flex
              w-fit
              rounded-xl
              border
              border-white/[0.07]
              bg-white/[0.025]
              p-1
              backdrop-blur-xl
            "
          >

            {contentFilters.map((filter) => {

              const active = contentFilter === filter;

              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setContentFilter(filter)}
                  className={`
                    relative
                    rounded-lg
                    px-5
                    py-2.5
                    text-[10px]
                    font-bold
                    transition-all
                    duration-300
                    ${
                      active
                        ? "bg-purple-500/15 text-purple-200 shadow-[0_0_25px_rgba(139,92,246,0.10)]"
                        : "text-white/30 hover:text-white/70"
                    }
                  `}
                >
                  {filter}
                </button>
              );
            })}

          </div>

          {/* TIME FILTER */}

          <div
            className="
              flex
              w-fit
              items-center
              gap-1
              rounded-xl
              border
              border-white/[0.07]
              bg-white/[0.02]
              p-1
            "
          >

            {timeFilters.map((filter) => {

              const active = timeFilter === filter;

              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setTimeFilter(filter)}
                  className={`
                    rounded-lg
                    px-3
                    py-2.5
                    text-[9px]
                    font-semibold
                    transition-all
                    duration-300
                    sm:px-4
                    ${
                      active
                        ? "bg-white/[0.07] text-white"
                        : "text-white/25 hover:text-white/60"
                    }
                  `}
                >
                  {filter}
                </button>
              );
            })}

          </div>

        </motion.div>

        {/* ===================================================
            RESULTS INFO
        =================================================== */}

        <div
          className="
            mt-12
            flex
            items-center
            justify-between
            border-b
            border-white/[0.06]
            pb-5
          "
        >

          <div className="flex items-center gap-3">

            <span
              className="
                h-2
                w-2
                rounded-full
                bg-purple-400
                shadow-[0_0_12px_rgba(168,85,247,0.8)]
              "
            />

            <span
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[2px]
                text-white/40
              "
            >
              {timeFilter}
            </span>

          </div>

          <span
            className="
              text-[10px]
              text-white/20
            "
          >
            {filteredContent.length} Titles
          </span>

        </div>

        {/* ===================================================
            TRENDING GRID
        =================================================== */}

        <motion.div
          layout
          className="
            mt-8
            grid
            grid-cols-2
            gap-x-3
            gap-y-8
            sm:grid-cols-3
            sm:gap-x-5
            lg:grid-cols-4
            xl:grid-cols-6
          "
        >

          {filteredContent.map((item, index) => (

            <motion.article
              layout
              key={item.id}
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.05,
                duration: 0.45,
              }}
              whileHover={{
                y: -8,
              }}
              className="group relative"
            >

              {/* =================================================
                  RANK
              ================================================= */}

              <div
                className="
                  absolute
                  -left-1
                  top-2
                  z-20
                  flex
                  h-9
                  min-w-9
                  items-center
                  justify-center
                  rounded-r-lg
                  border
                  border-white/[0.08]
                  bg-black/80
                  px-2
                  text-sm
                  font-black
                  text-white/70
                  backdrop-blur-xl
                  transition
                  duration-300
                  group-hover:border-purple-400/30
                  group-hover:text-purple-300
                "
              >
                #{String(index + 1).padStart(2, "0")}
              </div>

              {/* =================================================
                  POSTER
              ================================================= */}

              <div
                className="
                  relative
                  aspect-[2/3]
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/[0.07]
                  bg-white/[0.02]
                  shadow-[0_15px_45px_rgba(0,0,0,0.35)]
                  transition-all
                  duration-500
                  group-hover:border-purple-400/25
                  group-hover:shadow-[0_25px_70px_rgba(0,0,0,0.55)]
                "
              >

                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="
                    h-full
                    w-full
                    object-cover
                    transition
                    duration-700
                    group-hover:scale-110
                  "
                />

                {/* IMAGE DARK OVERLAY */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black
                    via-black/10
                    to-transparent
                    opacity-80
                  "
                />

                {/* HOVER GLOW */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-purple-500/0
                    transition
                    duration-500
                    group-hover:bg-purple-500/[0.05]
                  "
                />

                {/* TYPE */}

                <div
                  className="
                    absolute
                    right-3
                    top-3
                    rounded-md
                    border
                    border-white/10
                    bg-black/60
                    px-2
                    py-1
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-wider
                    text-white/60
                    backdrop-blur-md
                  "
                >
                  {item.type}
                </div>

                {/* PLAY */}

                <div
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    flex
                    h-12
                    w-12
                    -translate-x-1/2
                    -translate-y-1/2
                    scale-75
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/20
                    bg-black/60
                    opacity-0
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    group-hover:scale-100
                    group-hover:opacity-100
                  "
                >
                  <span className="ml-0.5 text-sm text-white">
                    ▶
                  </span>
                </div>

              </div>

              {/* =================================================
                  CARD INFO
              ================================================= */}

              <div className="mt-4">

                <h2
                  className="
                    truncate
                    text-sm
                    font-bold
                    text-white
                    transition
                    duration-300
                    group-hover:text-purple-200
                  "
                >
                  {item.title}
                </h2>

                <div
                  className="
                    mt-2
                    flex
                    items-center
                    gap-2
                    text-[9px]
                    text-white/25
                  "
                >

                  <span>{item.year}</span>

                  <span className="text-white/10">
                    •
                  </span>

                  <span>{item.genre}</span>

                </div>

                <div
                  className="
                    mt-2
                    flex
                    items-center
                    justify-between
                  "
                >

                  <span
                    className="
                      text-[9px]
                      text-white/20
                    "
                  >
                    {item.episodes}
                  </span>

                  <span
                    className="
                      flex
                      items-center
                      gap-1
                      text-[9px]
                      font-bold
                      text-yellow-300/70
                    "
                  >
                    ★ {item.rating}
                  </span>

                </div>

              </div>

            </motion.article>

          ))}

        </motion.div>

        {/* ===================================================
            EMPTY STATE
        =================================================== */}

        {filteredContent.length === 0 && (
          <div
            className="
              flex
              min-h-[300px]
              items-center
              justify-center
              text-center
            "
          >
            <div>

              <p className="text-lg font-bold text-white/60">
                Nothing found
              </p>

              <p className="mt-2 text-xs text-white/20">
                Try another category.
              </p>

            </div>
          </div>
        )}

        {/* ===================================================
            LOAD MORE
        =================================================== */}

        <div className="mt-16 flex justify-center">

          <button
            type="button"
            className="
              group
              rounded-xl
              border
              border-white/[0.08]
              bg-white/[0.025]
              px-7
              py-3
              text-[10px]
              font-bold
              uppercase
              tracking-[2px]
              text-white/40
              backdrop-blur-xl
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-purple-400/25
              hover:bg-purple-500/10
              hover:text-purple-200
              hover:shadow-[0_15px_40px_rgba(139,92,246,0.12)]
            "
          >
            Load More
            <span className="ml-2 transition group-hover:translate-y-0.5">
              ↓
            </span>
          </button>

        </div>

      </div>
    </main>
  );
}

export default Trending;
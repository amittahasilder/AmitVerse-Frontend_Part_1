import { useMemo, useState } from "react";
import { motion } from "framer-motion";

const animeData = [
  {
    id: 1,
    title: "Solo Leveling",
    year: 2024,
    rating: 9.8,
    episodes: 25,
    status: "Ongoing",
    genre: "Action",
    category: "Popular",
    image:
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 2,
    title: "Demon Slayer",
    year: 2025,
    rating: 9.7,
    episodes: 63,
    status: "Ongoing",
    genre: "Fantasy",
    category: "Popular",
    image:
      "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 3,
    title: "Attack on Titan",
    year: 2023,
    rating: 9.6,
    episodes: 89,
    status: "Completed",
    genre: "Action",
    category: "Popular",
    image:
      "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 4,
    title: "Jujutsu Kaisen",
    year: 2025,
    rating: 9.5,
    episodes: 47,
    status: "Ongoing",
    genre: "Supernatural",
    category: "Latest",
    image:
      "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 5,
    title: "One Piece",
    year: 2025,
    rating: 9.4,
    episodes: 1100,
    status: "Ongoing",
    genre: "Adventure",
    category: "Popular",
    image:
      "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 6,
    title: "Chainsaw Man",
    year: 2022,
    rating: 9.0,
    episodes: 12,
    status: "Completed",
    genre: "Action",
    category: "Popular",
    image:
      "https://images.unsplash.com/photo-1578632292335-df3abbb0d586?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 7,
    title: "Your Name",
    year: 2016,
    rating: 9.1,
    episodes: 1,
    status: "Completed",
    genre: "Romance",
    category: "Popular",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 8,
    title: "Spirited Away",
    year: 2001,
    rating: 8.9,
    episodes: 1,
    status: "Completed",
    genre: "Fantasy",
    category: "Popular",
    image:
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 9,
    title: "Blue Lock",
    year: 2024,
    rating: 8.8,
    episodes: 38,
    status: "Ongoing",
    genre: "Sports",
    category: "Latest",
    image:
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 10,
    title: "My Hero Academia",
    year: 2024,
    rating: 8.7,
    episodes: 159,
    status: "Completed",
    genre: "Action",
    category: "Popular",
    image:
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 11,
    title: "Haikyuu",
    year: 2020,
    rating: 8.9,
    episodes: 85,
    status: "Completed",
    genre: "Sports",
    category: "Popular",
    image:
      "https://images.unsplash.com/photo-1547347298-4074fc3086f0?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 12,
    title: "Frieren",
    year: 2024,
    rating: 9.3,
    episodes: 28,
    status: "Ongoing",
    genre: "Fantasy",
    category: "Latest",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=85",
  },
];

const categories = [
  "All",
  "Popular",
  "Latest",
  "Ongoing",
  "Completed",
];

const genres = [
  "All Genres",
  "Action",
  "Adventure",
  "Fantasy",
  "Romance",
  "Sports",
  "Supernatural",
];

function Anime() {
  const [category, setCategory] = useState("All");
  const [genre, setGenre] = useState("All Genres");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("Popular");

  const filteredAnime = useMemo(() => {
    let result = [...animeData];

    if (category !== "All") {
      if (
        category === "Ongoing" ||
        category === "Completed"
      ) {
        result = result.filter(
          (anime) => anime.status === category
        );
      } else {
        result = result.filter(
          (anime) => anime.category === category
        );
      }
    }

    if (genre !== "All Genres") {
      result = result.filter(
        (anime) => anime.genre === genre
      );
    }

    if (search.trim()) {
      result = result.filter((anime) =>
        anime.title
          .toLowerCase()
          .includes(search.toLowerCase())
      );
    }

    if (sort === "Rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    if (sort === "Newest") {
      result.sort((a, b) => b.year - a.year);
    }

    if (sort === "A-Z") {
      result.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
    }

    return result;
  }, [category, genre, search, sort]);

  const resetFilters = () => {
    setCategory("All");
    setGenre("All Genres");
    setSearch("");
    setSort("Popular");
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#030305] text-white">

      {/* =====================================================
          CINEMATIC BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">

        <motion.div
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.07, 0.12, 0.07],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-1/2
            top-[-280px]
            h-[700px]
            w-[1000px]
            -translate-x-1/2
            rounded-full
            bg-purple-700
            blur-[180px]
          "
        />

        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            bottom-[-250px]
            left-[-180px]
            h-[550px]
            w-[550px]
            rounded-full
            bg-indigo-700/[0.07]
            blur-[160px]
          "
        />

        <motion.div
          animate={{
            x: [0, -60, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            right-[-200px]
            top-1/3
            h-[500px]
            w-[500px]
            rounded-full
            bg-fuchsia-700/[0.05]
            blur-[160px]
          "
        />

        {/* subtle grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
            [background-image:linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px)]
            [background-size:70px_70px]
          "
        />

      </div>

      {/* =====================================================
          CONTENT
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
            y: 35,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
        >

          <div className="mb-5 flex items-center gap-3">

            <motion.span
              animate={{
                width: ["28px", "55px", "28px"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="
                h-px
                bg-gradient-to-r
                from-purple-500
                to-fuchsia-400
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
              Explore Universe
            </span>

          </div>

          <div
            className="
              flex
              flex-col
              gap-6
              lg:flex-row
              lg:items-end
              lg:justify-between
            "
          >

            <div>

              <h1
                className="
                  text-4xl
                  font-black
                  tracking-[-2px]
                  sm:text-5xl
                  lg:text-6xl
                "
              >
                Anime

                <span
                  className="
                    ml-3
                    bg-gradient-to-r
                    from-purple-300
                    via-fuchsia-400
                    to-purple-500
                    bg-clip-text
                    text-transparent
                  "
                >
                  Universe
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
                Enter a universe of unforgettable stories,
                legendary characters and worlds waiting to
                be discovered.
              </p>

            </div>

            {/* TITLE COUNT */}

            <motion.div
              whileHover={{
                y: -5,
                scale: 1.02,
              }}
              className="
                w-fit
                rounded-2xl
                border
                border-white/[0.07]
                bg-white/[0.025]
                px-6
                py-4
                shadow-[0_15px_50px_rgba(0,0,0,0.3)]
                backdrop-blur-2xl
              "
            >

              <p
                className="
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[3px]
                  text-white/25
                "
              >
                Available
              </p>

              <p className="mt-1 text-3xl font-black">
                {filteredAnime.length}
              </p>

              <p className="text-[9px] text-purple-300/50">
                Anime Titles
              </p>

            </motion.div>

          </div>

        </motion.div>

        {/* ===================================================
            FILTER PANEL
        =================================================== */}

        <motion.section
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.15,
            duration: 0.7,
          }}
          className="
            mt-10
            rounded-2xl
            border
            border-white/[0.07]
            bg-white/[0.02]
            p-4
            shadow-[0_20px_80px_rgba(0,0,0,0.25)]
            backdrop-blur-2xl
            sm:p-5
          "
        >

          {/* SEARCH */}

          <div
            className="
              flex
              items-center
              rounded-xl
              border
              border-white/[0.07]
              bg-black/30
              px-4
              transition-all
              duration-500
              focus-within:border-purple-400/30
              focus-within:shadow-[0_0_40px_rgba(139,92,246,0.10)]
            "
          >

            <span
              className="
                mr-3
                text-lg
                text-purple-300/60
              "
            >
              ⌕
            </span>

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search anime..."
              className="
                w-full
                bg-transparent
                py-4
                text-xs
                text-white
                outline-none
                placeholder:text-white/20
              "
            />

            {search && (
              <motion.button
                whileHover={{
                  scale: 1.15,
                }}
                whileTap={{
                  scale: 0.9,
                }}
                type="button"
                onClick={() => setSearch("")}
                className="
                  text-lg
                  text-white/30
                  transition
                  hover:text-white
                "
              >
                ×
              </motion.button>
            )}

          </div>

          {/* FILTERS */}

          <div
            className="
              mt-5
              flex
              flex-col
              gap-5
              xl:flex-row
              xl:items-center
              xl:justify-between
            "
          >

            {/* CATEGORY */}

            <div className="flex flex-wrap gap-2">

              {categories.map((item) => {

                const active = category === item;

                return (
                  <motion.button
                    key={item}
                    whileHover={{
                      y: -2,
                    }}
                    whileTap={{
                      scale: 0.96,
                    }}
                    type="button"
                    onClick={() => setCategory(item)}
                    className={`
                      relative
                      overflow-hidden
                      rounded-lg
                      border
                      px-4
                      py-2.5
                      text-[9px]
                      font-bold
                      transition-all
                      duration-300
                      ${
                        active
                          ? "border-purple-400/20 bg-purple-500/15 text-purple-200 shadow-[0_0_25px_rgba(139,92,246,0.12)]"
                          : "border-white/[0.06] bg-white/[0.02] text-white/30 hover:border-white/10 hover:text-white/70"
                      }
                    `}
                  >
                    {active && (
                      <motion.span
                        layoutId="animeCategory"
                        className="
                          absolute
                          inset-0
                          rounded-lg
                          bg-purple-500/[0.08]
                        "
                      />
                    )}

                    <span className="relative z-10">
                      {item}
                    </span>

                  </motion.button>
                );
              })}

            </div>

            {/* SELECTS */}

            <div className="flex flex-wrap gap-2">

              <select
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
                className="
                  cursor-pointer
                  rounded-lg
                  border
                  border-white/[0.07]
                  bg-[#08080b]
                  px-4
                  py-3
                  text-[9px]
                  font-bold
                  text-white/40
                  outline-none
                  transition
                  hover:border-purple-400/20
                  focus:border-purple-400/30
                "
              >

                {genres.map((item) => (
                  <option
                    key={item}
                    value={item}
                    className="bg-[#08080b]"
                  >
                    {item}
                  </option>
                ))}

              </select>

              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="
                  cursor-pointer
                  rounded-lg
                  border
                  border-white/[0.07]
                  bg-[#08080b]
                  px-4
                  py-3
                  text-[9px]
                  font-bold
                  text-white/40
                  outline-none
                  transition
                  hover:border-purple-400/20
                  focus:border-purple-400/30
                "
              >

                <option value="Popular">
                  Sort: Popular
                </option>

                <option value="Rating">
                  Sort: Rating
                </option>

                <option value="Newest">
                  Sort: Newest
                </option>

                <option value="A-Z">
                  Sort: A-Z
                </option>

              </select>

            </div>

          </div>

        </motion.section>

        {/* ===================================================
            RESULTS HEADER
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

            <motion.span
              animate={{
                opacity: [0.4, 1, 0.4],
                scale: [0.8, 1.1, 0.8],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
              }}
              className="
                h-2
                w-2
                rounded-full
                bg-purple-400
                shadow-[0_0_15px_rgba(168,85,247,0.9)]
              "
            />

            <h2
              className="
                text-xs
                font-bold
                uppercase
                tracking-[2px]
                text-white/60
              "
            >
              Anime Collection
            </h2>

          </div>

          <p className="text-[9px] text-white/20">
            {filteredAnime.length} results
          </p>

        </div>

        {/* ===================================================
            ANIME GRID
        =================================================== */}

        <motion.div
          layout
          className="
            mt-8
            grid
            grid-cols-2
            gap-x-3
            gap-y-9
            sm:grid-cols-3
            sm:gap-x-5
            lg:grid-cols-4
            xl:grid-cols-6
          "
        >

          {filteredAnime.map((anime, index) => (

            <motion.article
              layout
              key={anime.id}
              initial={{
                opacity: 0,
                y: 35,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                delay: Math.min(index * 0.05, 0.5),
                duration: 0.5,
              }}
              whileHover={{
                y: -10,
              }}
              className="group"
            >

              {/* POSTER */}

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
                  group-hover:shadow-[0_25px_80px_rgba(139,92,246,0.13)]
                "
              >

                <img
                  src={anime.image}
                  alt={anime.title}
                  loading="lazy"
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-110
                  "
                />

                {/* IMAGE OVERLAY */}

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

                {/* PURPLE HOVER LIGHT */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-purple-500/0
                    transition
                    duration-500
                    group-hover:bg-purple-500/[0.06]
                  "
                />

                {/* STATUS */}

                <div
                  className="
                    absolute
                    left-3
                    top-3
                    rounded-md
                    border
                    border-white/10
                    bg-black/60
                    px-2
                    py-1
                    text-[7px]
                    font-bold
                    uppercase
                    tracking-wider
                    text-white/60
                    backdrop-blur-md
                  "
                >
                  {anime.status}
                </div>

                {/* RATING */}

                <div
                  className="
                    absolute
                    right-3
                    top-3
                    rounded-md
                    border
                    border-yellow-400/10
                    bg-black/60
                    px-2
                    py-1
                    text-[8px]
                    font-bold
                    text-yellow-300/80
                    backdrop-blur-md
                  "
                >
                  ★ {anime.rating}
                </div>

                {/* PLAY BUTTON */}

                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.6,
                  }}
                  whileHover={{
                    scale: 1.1,
                  }}
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    flex
                    h-14
                    w-14
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
                  <span className="ml-1 text-base text-white">
                    ▶
                  </span>
                </motion.div>

                {/* GENRE */}

                <div
                  className="
                    absolute
                    bottom-3
                    left-3
                    rounded-md
                    border
                    border-white/10
                    bg-black/50
                    px-2
                    py-1
                    text-[7px]
                    font-semibold
                    text-white/50
                    backdrop-blur-md
                  "
                >
                  {anime.genre}
                </div>

              </div>

              {/* INFO */}

              <div className="mt-4">

                <h3
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
                  {anime.title}
                </h3>

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

                  <span>{anime.year}</span>

                  <span className="text-white/10">
                    •
                  </span>

                  <span>
                    {anime.episodes === 1
                      ? "Movie"
                      : `${anime.episodes} Episodes`}
                  </span>

                </div>

              </div>

            </motion.article>

          ))}

        </motion.div>

        {/* ===================================================
            EMPTY STATE
        =================================================== */}

        {filteredAnime.length === 0 && (

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="
              flex
              min-h-[350px]
              items-center
              justify-center
              text-center
            "
          >

            <div>

              <div
                className="
                  mx-auto
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-white/[0.07]
                  bg-white/[0.02]
                  text-2xl
                  text-purple-300/50
                "
              >
                ?
              </div>

              <h3
                className="
                  mt-5
                  text-lg
                  font-bold
                  text-white/60
                "
              >
                No anime found
              </h3>

              <p className="mt-2 text-xs text-white/20">
                Try another filter or search.
              </p>

              <button
                type="button"
                onClick={resetFilters}
                className="
                  mt-5
                  rounded-lg
                  border
                  border-purple-400/20
                  bg-purple-500/10
                  px-5
                  py-2.5
                  text-[9px]
                  font-bold
                  text-purple-300
                  transition
                  hover:bg-purple-500/20
                "
              >
                Reset Filters
              </button>

            </div>

          </motion.div>

        )}

        {/* ===================================================
            LOAD MORE
        =================================================== */}

        {filteredAnime.length > 0 && (

          <div className="mt-16 flex justify-center">

            <motion.button
              whileHover={{
                y: -4,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.96,
              }}
              type="button"
              className="
                rounded-xl
                border
                border-white/[0.08]
                bg-white/[0.025]
                px-8
                py-3.5
                text-[9px]
                font-bold
                uppercase
                tracking-[2px]
                text-white/40
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-purple-400/25
                hover:bg-purple-500/10
                hover:text-purple-200
                hover:shadow-[0_15px_50px_rgba(139,92,246,0.13)]
              "
            >
              Load More
            </motion.button>

          </div>

        )}

      </div>
    </main>
  );
}

export default Anime;
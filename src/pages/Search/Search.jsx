import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const searchData = [
  {
    id: 1,
    title: "Solo Leveling",
    type: "Anime",
    year: 2024,
    rating: 9.8,
    genre: "Action",
    meta: "25 Episodes",
    image:
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 2,
    title: "Demon Slayer",
    type: "Anime",
    year: 2025,
    rating: 9.7,
    genre: "Fantasy",
    meta: "63 Episodes",
    image:
      "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 3,
    title: "Jujutsu Kaisen",
    type: "Anime",
    year: 2025,
    rating: 9.5,
    genre: "Supernatural",
    meta: "47 Episodes",
    image:
      "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 4,
    title: "One Piece",
    type: "Anime",
    year: 2025,
    rating: 9.4,
    genre: "Adventure",
    meta: "1100+ Episodes",
    image:
      "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 5,
    title: "Attack on Titan",
    type: "Anime",
    year: 2023,
    rating: 9.6,
    genre: "Action",
    meta: "89 Episodes",
    image:
      "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 6,
    title: "Interstellar",
    type: "Movie",
    year: 2014,
    rating: 9.2,
    genre: "Sci-Fi",
    meta: "2h 49m",
    image:
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 7,
    title: "The Dark Knight",
    type: "Movie",
    year: 2008,
    rating: 9.0,
    genre: "Action",
    meta: "2h 32m",
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 8,
    title: "Inception",
    type: "Movie",
    year: 2010,
    rating: 8.9,
    genre: "Sci-Fi",
    meta: "2h 28m",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 9,
    title: "Oppenheimer",
    type: "Movie",
    year: 2023,
    rating: 8.8,
    genre: "Drama",
    meta: "3h 00m",
    image:
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 10,
    title: "Dune",
    type: "Movie",
    year: 2021,
    rating: 8.6,
    genre: "Fantasy",
    meta: "2h 35m",
    image:
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 11,
    title: "Spider-Man",
    type: "Movie",
    year: 2023,
    rating: 8.4,
    genre: "Adventure",
    meta: "2h 20m",
    image:
      "https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 12,
    title: "John Wick",
    type: "Movie",
    year: 2023,
    rating: 8.3,
    genre: "Action",
    meta: "2h 49m",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=900&q=85",
  },
];

const popularSearches = [
  "Solo Leveling",
  "Demon Slayer",
  "One Piece",
  "Interstellar",
  "Jujutsu Kaisen",
];

const filters = ["All", "Anime", "Movies"];

function Search() {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [sort, setSort] = useState("Relevance");

  const results = useMemo(() => {
    let data = [...searchData];

    if (activeFilter !== "All") {
      data = data.filter((item) => {
        if (activeFilter === "Movies") {
          return item.type === "Movie";
        }

        return item.type === "Anime";
      });
    }

    if (query.trim()) {
      const searchTerm = query.toLowerCase().trim();

      data = data.filter((item) =>
        `${item.title} ${item.genre} ${item.type}`
          .toLowerCase()
          .includes(searchTerm)
      );
    }

    if (sort === "Rating") {
      data.sort((a, b) => b.rating - a.rating);
    }

    if (sort === "Newest") {
      data.sort((a, b) => b.year - a.year);
    }

    if (sort === "A-Z") {
      data.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
    }

    return data;
  }, [query, activeFilter, sort]);

  const clearSearch = () => {
    setQuery("");
    setActiveFilter("All");
    setSort("Relevance");
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#030305] text-white">

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.05, 0.11, 0.05],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-1/2
            top-[-280px]
            h-[700px]
            w-[1100px]
            -translate-x-1/2
            rounded-full
            bg-purple-700
            blur-[190px]
          "
        />

        <motion.div
          animate={{
            x: [0, 90, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            bottom-[-250px]
            left-[-200px]
            h-[600px]
            w-[600px]
            rounded-full
            bg-indigo-700/[0.06]
            blur-[170px]
          "
        />

        <motion.div
          animate={{
            x: [0, -70, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            right-[-200px]
            top-1/3
            h-[550px]
            w-[550px]
            rounded-full
            bg-fuchsia-700/[0.05]
            blur-[170px]
          "
        />

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
          max-w-[1500px]
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
            duration: 0.7,
          }}
          className="text-center"
        >

          <div className="mb-5 flex justify-center">

            <div className="flex items-center gap-3">

              <motion.span
                animate={{
                  width: ["25px", "50px", "25px"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="
                  h-px
                  bg-gradient-to-r
                  from-transparent
                  to-purple-400
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
                Search Universe
              </span>

              <motion.span
                animate={{
                  width: ["25px", "50px", "25px"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="
                  h-px
                  bg-gradient-to-l
                  from-transparent
                  to-purple-400
                "
              />

            </div>

          </div>

          <h1
            className="
              text-4xl
              font-black
              tracking-[-2px]
              sm:text-5xl
              lg:text-6xl
            "
          >
            Find Your Next

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
              Obsession
            </span>
          </h1>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-sm
              leading-7
              text-white/30
              sm:text-base
            "
          >
            Search across the AmitVerse library and
            discover anime, movies and cinematic worlds.
          </p>

        </motion.div>

        {/* ===================================================
            BIG SEARCH
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.96,
            y: 25,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          transition={{
            delay: 0.15,
            duration: 0.7,
          }}
          className="mx-auto mt-10 max-w-4xl"
        >

          <div
            className="
              group
              flex
              items-center
              rounded-2xl
              border
              border-white/[0.08]
              bg-white/[0.025]
              px-5
              shadow-[0_25px_100px_rgba(0,0,0,0.35)]
              backdrop-blur-2xl
              transition-all
              duration-500
              focus-within:border-purple-400/30
              focus-within:shadow-[0_0_70px_rgba(139,92,246,0.12)]
              sm:px-6
            "
          >

            <motion.span
              animate={{
                scale: [1, 1.08, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="
                mr-4
                text-2xl
                text-purple-300/60
              "
            >
              ⌕
            </motion.span>

            <input
              autoFocus
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search anime, movies, genres..."
              className="
                w-full
                bg-transparent
                py-5
                text-sm
                text-white
                outline-none
                placeholder:text-white/20
                sm:py-6
                sm:text-base
              "
            />

            {query && (
              <motion.button
                initial={{
                  opacity: 0,
                  scale: 0.7,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                whileTap={{
                  scale: 0.85,
                }}
                type="button"
                onClick={() => setQuery("")}
                className="
                  flex
                  h-8
                  w-8
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-white/[0.05]
                  text-sm
                  text-white/30
                  transition
                  hover:bg-white/[0.1]
                  hover:text-white
                "
              >
                ×
              </motion.button>
            )}

          </div>

        </motion.div>

        {/* ===================================================
            POPULAR SEARCHES
        =================================================== */}

        <AnimatePresence>
          {!query && (
            <motion.div
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -10,
              }}
              className="
                mx-auto
                mt-6
                flex
                max-w-4xl
                flex-wrap
                items-center
                justify-center
                gap-2
              "
            >

              <span
                className="
                  mr-1
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[2px]
                  text-white/20
                "
              >
                Popular:
              </span>

              {popularSearches.map((item) => (

                <motion.button
                  key={item}
                  whileHover={{
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  type="button"
                  onClick={() => setQuery(item)}
                  className="
                    rounded-full
                    border
                    border-white/[0.06]
                    bg-white/[0.02]
                    px-3
                    py-1.5
                    text-[8px]
                    font-semibold
                    text-white/30
                    transition
                    hover:border-purple-400/20
                    hover:bg-purple-500/[0.08]
                    hover:text-purple-200
                  "
                >
                  {item}
                </motion.button>

              ))}

            </motion.div>
          )}
        </AnimatePresence>

        {/* ===================================================
            FILTERS
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
            delay: 0.25,
          }}
          className="
            mt-12
            flex
            flex-col
            gap-4
            border-b
            border-white/[0.06]
            pb-5
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >

          {/* TYPE */}

          <div className="flex flex-wrap gap-2">

            {filters.map((filter) => {

              const active = activeFilter === filter;

              return (
                <motion.button
                  key={filter}
                  whileHover={{
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.96,
                  }}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`
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
                        : "border-white/[0.06] bg-white/[0.02] text-white/30 hover:text-white/70"
                    }
                  `}
                >
                  {filter}
                </motion.button>
              );
            })}

          </div>

          {/* SORT */}

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="
              w-fit
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
            "
          >

            <option value="Relevance">
              Sort: Relevance
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

        </motion.div>

        {/* ===================================================
            RESULTS INFO
        =================================================== */}

        <motion.div
          layout
          className="
            mt-8
            flex
            items-center
            justify-between
          "
        >

          <div>

            <p
              className="
                text-[9px]
                font-bold
                uppercase
                tracking-[2px]
                text-white/20
              "
            >
              Search Results
            </p>

            <h2
              className="
                mt-2
                text-xl
                font-black
                text-white/80
              "
            >
              {query
                ? `Results for "${query}"`
                : "Explore Everything"}
            </h2>

          </div>

          <span
            className="
              rounded-full
              border
              border-white/[0.06]
              bg-white/[0.02]
              px-3
              py-1.5
              text-[8px]
              font-bold
              text-white/25
            "
          >
            {results.length} results
          </span>

        </motion.div>

        {/* ===================================================
            RESULTS GRID
        =================================================== */}

        {results.length > 0 && (

          <motion.div
            layout
            className="
              mt-8
              grid
              grid-cols-2
              gap-x-3
              gap-y-10
              sm:grid-cols-3
              sm:gap-x-5
              lg:grid-cols-4
              xl:grid-cols-6
            "
          >

            <AnimatePresence mode="popLayout">

              {results.map((item, index) => (

                <motion.article
                  layout
                  key={`${item.type}-${item.id}`}
                  initial={{
                    opacity: 0,
                    y: 25,
                    scale: 0.95,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                  }}
                  transition={{
                    delay: Math.min(index * 0.04, 0.4),
                    duration: 0.4,
                  }}
                  whileHover={{
                    y: -9,
                  }}
                  className="group cursor-pointer"
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
                      group-hover:shadow-[0_25px_80px_rgba(139,92,246,0.14)]
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
                        transition-transform
                        duration-700
                        group-hover:scale-110
                      "
                    />

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

                    {/* TYPE BADGE */}

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
                      {item.type}
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
                      ★ {item.rating}
                    </div>

                    {/* PLAY */}

                    <div
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
                      <span className="ml-1 text-base">
                        ▶
                      </span>
                    </div>

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
                      {item.genre}
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
                      {item.title}
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

                      <span>{item.year}</span>

                      <span className="text-white/10">
                        •
                      </span>

                      <span>{item.meta}</span>

                    </div>

                  </div>

                </motion.article>

              ))}

            </AnimatePresence>

          </motion.div>

        )}

        {/* ===================================================
            EMPTY STATE
        =================================================== */}

        {results.length === 0 && (

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="
              flex
              min-h-[400px]
              items-center
              justify-center
              text-center
            "
          >

            <div>

              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="
                  mx-auto
                  flex
                  h-20
                  w-20
                  items-center
                  justify-center
                  rounded-3xl
                  border
                  border-white/[0.07]
                  bg-white/[0.025]
                  text-3xl
                  text-purple-300/50
                  shadow-[0_0_50px_rgba(139,92,246,0.08)]
                "
              >
                ?
              </motion.div>

              <h3
                className="
                  mt-6
                  text-xl
                  font-black
                  text-white/70
                "
              >
                Nothing found
              </h3>

              <p
                className="
                  mx-auto
                  mt-2
                  max-w-sm
                  text-xs
                  leading-6
                  text-white/20
                "
              >
                We couldn't find anything matching your
                search. Try another title, genre or keyword.
              </p>

              <motion.button
                whileHover={{
                  y: -3,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                type="button"
                onClick={clearSearch}
                className="
                  mt-6
                  rounded-xl
                  border
                  border-purple-400/20
                  bg-purple-500/10
                  px-6
                  py-3
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[2px]
                  text-purple-300
                  transition
                  hover:bg-purple-500/20
                "
              >
                Clear Search
              </motion.button>

            </div>

          </motion.div>

        )}

      </div>
    </main>
  );
}

export default Search;
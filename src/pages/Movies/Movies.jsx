import { useMemo, useState } from "react";
import { motion } from "framer-motion";

const movieData = [
  {
    id: 1,
    title: "Interstellar",
    year: 2014,
    rating: 9.2,
    duration: "2h 49m",
    genre: "Sci-Fi",
    category: "Popular",
    image:
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 2,
    title: "The Dark Knight",
    year: 2008,
    rating: 9.0,
    duration: "2h 32m",
    genre: "Action",
    category: "Popular",
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 3,
    title: "Inception",
    year: 2010,
    rating: 8.9,
    duration: "2h 28m",
    genre: "Sci-Fi",
    category: "Popular",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 4,
    title: "Oppenheimer",
    year: 2023,
    rating: 8.8,
    duration: "3h 00m",
    genre: "Drama",
    category: "Latest",
    image:
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 5,
    title: "Avengers: Endgame",
    year: 2019,
    rating: 8.7,
    duration: "3h 01m",
    genre: "Action",
    category: "Popular",
    image:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 6,
    title: "Dune",
    year: 2021,
    rating: 8.6,
    duration: "2h 35m",
    genre: "Fantasy",
    category: "Popular",
    image:
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 7,
    title: "The Batman",
    year: 2022,
    rating: 8.5,
    duration: "2h 56m",
    genre: "Action",
    category: "Latest",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 8,
    title: "Spider-Man",
    year: 2023,
    rating: 8.4,
    duration: "2h 20m",
    genre: "Adventure",
    category: "Latest",
    image:
      "https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 9,
    title: "Gladiator",
    year: 2000,
    rating: 8.8,
    duration: "2h 35m",
    genre: "Drama",
    category: "Popular",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 10,
    title: "The Matrix",
    year: 1999,
    rating: 8.7,
    duration: "2h 16m",
    genre: "Sci-Fi",
    category: "Popular",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 11,
    title: "John Wick",
    year: 2023,
    rating: 8.3,
    duration: "2h 49m",
    genre: "Action",
    category: "Latest",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 12,
    title: "The Grand Budapest Hotel",
    year: 2014,
    rating: 8.5,
    duration: "1h 39m",
    genre: "Comedy",
    category: "Popular",
    image:
      "https://images.unsplash.com/photo-1544986581-efac024faf62?auto=format&fit=crop&w=900&q=85",
  },
];

const categories = [
  "All",
  "Popular",
  "Latest",
  "Trending",
];

const genres = [
  "All Genres",
  "Action",
  "Adventure",
  "Comedy",
  "Drama",
  "Fantasy",
  "Sci-Fi",
];

function Movies() {
  const [category, setCategory] = useState("All");
  const [genre, setGenre] = useState("All Genres");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("Popular");

  const filteredMovies = useMemo(() => {
    let result = [...movieData];

    if (category !== "All") {
      result = result.filter(
        (movie) => movie.category === category
      );
    }

    if (genre !== "All Genres") {
      result = result.filter(
        (movie) => movie.genre === genre
      );
    }

    if (search.trim()) {
      result = result.filter((movie) =>
        movie.title
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
            opacity: [0.06, 0.11, 0.06],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-1/2
            top-[-300px]
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
            x: [0, 80, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            bottom-[-250px]
            left-[-180px]
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
            y: [0, 60, 0],
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            right-[-220px]
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
          MAIN CONTENT
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
              Cinematic Universe
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
                Movies

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
                Discover cinematic worlds, unforgettable
                stories and legendary movies in one premium
                streaming experience.
              </p>

            </div>

            {/* MOVIE COUNT */}

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
                {filteredMovies.length}
              </p>

              <p className="text-[9px] text-purple-300/50">
                Movies
              </p>

            </motion.div>

          </div>

        </motion.div>

        {/* ===================================================
            SEARCH + FILTER PANEL
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
              placeholder="Search movies..."
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

          {/* FILTER ROW */}

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
                        layoutId="movieCategory"
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

            {/* GENRE + SORT */}

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
            COLLECTION HEADER
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
              Movie Collection
            </h2>

          </div>

          <p className="text-[9px] text-white/20">
            {filteredMovies.length} results
          </p>

        </div>

        {/* ===================================================
            MOVIE GRID
        =================================================== */}

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

          {filteredMovies.map((movie, index) => (

            <motion.article
              layout
              key={movie.id}
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
              className="group cursor-pointer"
            >

              {/* =================================================
                  MOVIE POSTER
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
                  group-hover:shadow-[0_25px_80px_rgba(139,92,246,0.13)]
                "
              >

                <img
                  src={movie.image}
                  alt={movie.title}
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

                {/* DARK GRADIENT */}

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

                {/* PURPLE CINEMATIC GLOW */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-purple-500/0
                    transition
                    duration-500
                    group-hover:bg-purple-500/[0.07]
                  "
                />

                {/* CATEGORY */}

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
                  {movie.category}
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
                  ★ {movie.rating}
                </div>

                {/* PLAY BUTTON */}

                <motion.div
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

                  <motion.span
                    whileHover={{
                      scale: 1.15,
                    }}
                    className="ml-1 text-base text-white"
                  >
                    ▶
                  </motion.span>

                </motion.div>

                {/* BOTTOM GENRE */}

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
                  {movie.genre}
                </div>

              </div>

              {/* =================================================
                  MOVIE INFO
              ================================================= */}

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
                  {movie.title}
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

                  <span>
                    {movie.year}
                  </span>

                  <span className="text-white/10">
                    •
                  </span>

                  <span>
                    {movie.duration}
                  </span>

                </div>

              </div>

            </motion.article>

          ))}

        </motion.div>

        {/* ===================================================
            EMPTY STATE
        =================================================== */}

        {filteredMovies.length === 0 && (

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
                No movies found
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

        {filteredMovies.length > 0 && (

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

export default Movies;
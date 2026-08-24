import { useState } from "react";
import { motion } from "framer-motion";
import {
  Play,
  Plus,
  Check,
  Star,
  Clock3,
  ChevronRight,
} from "lucide-react";

/* =========================================================
   DEMO MOVIE DATA

   Later this will come from:

   GET /api/movies/featured
   ========================================================= */

const movies = [
  {
    id: 1,
    title: "Midnight Horizon",
    year: "2026",
    duration: "2h 18m",
    rating: "9.2",
    genre: "Action • Sci-Fi",
    quality: "4K",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=1400&q=90",
  },

  {
    id: 2,
    title: "The Last Kingdom",
    year: "2025",
    duration: "2h 31m",
    rating: "8.9",
    genre: "Drama • Adventure",
    quality: "4K",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1400&q=90",
  },

  {
    id: 3,
    title: "Neon After Dark",
    year: "2026",
    duration: "1h 58m",
    rating: "9.0",
    genre: "Thriller • Mystery",
    quality: "4K",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1400&q=90",
  },

  {
    id: 4,
    title: "Beyond The Stars",
    year: "2025",
    duration: "2h 11m",
    rating: "8.8",
    genre: "Sci-Fi • Drama",
    quality: "4K",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=90",
  },

  {
    id: 5,
    title: "Shadow Protocol",
    year: "2026",
    duration: "2h 04m",
    rating: "9.1",
    genre: "Action • Thriller",
    quality: "HD",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1400&q=90",
  },

  {
    id: 6,
    title: "Eternal Night",
    year: "2024",
    duration: "2h 22m",
    rating: "8.7",
    genre: "Fantasy • Drama",
    quality: "4K",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1400&q=90",
  },
];

/* =========================================================
   MOVIE CARD
   ========================================================= */

function MovieCard({ movie, index }) {
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);

  const toggleList = () => {
    setAdded((previous) => !previous);
  };

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 35,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        delay: index * 0.07,
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        group
        w-[270px]
        shrink-0
        sm:w-[290px]
        lg:w-[310px]
      "
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ===================================================
          POSTER
      =================================================== */}

      <motion.div
        animate={{
          y: hovered ? -8 : 0,
        }}
        transition={{
          duration: 0.3,
        }}
        className="
          relative
          h-[390px]
          overflow-hidden
          rounded-[20px]
          border
          border-white/[0.07]
          bg-[#08080c]
          shadow-[0_25px_80px_rgba(0,0,0,0.4)]
          sm:h-[410px]
        "
      >
        {/* IMAGE */}

        <motion.img
          src={movie.image}
          alt={movie.title}
          animate={{
            scale: hovered ? 1.09 : 1,
          }}
          transition={{
            duration: 0.75,
            ease: "easeOut",
          }}
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
          "
        />

        {/* CINEMATIC OVERLAY */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black
            via-black/15
            to-black/20
          "
        />

        {/* TOP DARK */}

        <div
          className="
            absolute
            inset-x-0
            top-0
            h-36
            bg-gradient-to-b
            from-black/70
            to-transparent
          "
        />

        {/* =================================================
            FEATURED
        ================================================= */}

        {movie.featured && (
          <motion.div
            animate={{
              scale: hovered ? 1.05 : 1,
            }}
            className="
              absolute
              left-4
              top-4
              z-20
              rounded-full
              border
              border-purple-300/20
              bg-purple-500/15
              px-3
              py-1.5
              text-[8px]
              font-black
              uppercase
              tracking-[2px]
              text-purple-200
              shadow-[0_0_25px_rgba(139,92,246,0.12)]
              backdrop-blur-xl
            "
          >
            Featured
          </motion.div>
        )}

        {/* =================================================
            QUALITY
        ================================================= */}

        <div
          className="
            absolute
            right-4
            top-4
            z-20
            rounded-md
            border
            border-white/10
            bg-black/40
            px-2
            py-1.5
            text-[9px]
            font-bold
            tracking-wider
            text-white/60
            backdrop-blur-xl
          "
        >
          {movie.quality}
        </div>

        {/* =================================================
            CENTER PLAY
        ================================================= */}

        <motion.button
          initial={{
            opacity: 0,
            scale: 0.7,
          }}
          animate={{
            opacity: hovered ? 1 : 0,
            scale: hovered ? 1 : 0.7,
          }}
          whileHover={{
            scale: 1.08,
          }}
          whileTap={{
            scale: 0.9,
          }}
          className="
            absolute
            left-1/2
            top-1/2
            z-30
            flex
            h-14
            w-14
            -translate-x-1/2
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            border
            border-white/20
            bg-white/10
            text-white
            shadow-[0_0_60px_rgba(139,92,246,0.4)]
            backdrop-blur-xl
          "
        >
          <Play
            size={19}
            fill="currentColor"
            className="ml-0.5"
          />
        </motion.button>

        {/* =================================================
            BOTTOM INFO
        ================================================= */}

        <div
          className="
            absolute
            bottom-0
            left-0
            right-0
            z-20
            p-5
          "
        >
          {/* META */}

          <div
            className="
              mb-2.5
              flex
              items-center
              gap-2
              text-[9px]
              font-medium
              text-white/40
            "
          >
            <span>{movie.year}</span>

            <span className="text-white/15">
              •
            </span>

            <span className="flex items-center gap-1">
              <Clock3 size={10} />
              {movie.duration}
            </span>
          </div>

          {/* TITLE */}

          <h3
            className="
              text-xl
              font-bold
              tracking-tight
              text-white
            "
          >
            {movie.title}
          </h3>

          {/* GENRE */}

          <p
            className="
              mt-1.5
              text-[10px]
              font-medium
              text-white/35
            "
          >
            {movie.genre}
          </p>
        </div>

        {/* =================================================
            GLOW
        ================================================= */}

        <motion.div
          animate={{
            opacity: hovered ? 0.45 : 0,
          }}
          className="
            pointer-events-none
            absolute
            bottom-0
            left-1/2
            h-36
            w-56
            -translate-x-1/2
            rounded-full
            bg-purple-600/30
            blur-[75px]
          "
        />
      </motion.div>

      {/* ===================================================
          FOOTER META
      =================================================== */}

      <div
        className="
          mt-3
          flex
          items-center
          justify-between
          px-1
        "
      >
        <div
          className="
            flex
            items-center
            gap-3
          "
        >
          {/* RATING */}

          <span
            className="
              flex
              items-center
              gap-1
              text-[10px]
              font-bold
              text-yellow-300/80
            "
          >
            <Star
              size={11}
              fill="currentColor"
            />

            {movie.rating}
          </span>

          {/* MOVIE */}

          <span
            className="
              text-[9px]
              uppercase
              tracking-[1px]
              text-white/20
            "
          >
            Movie
          </span>
        </div>

        {/* MY LIST */}

        <motion.button
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{
            scale: 0.9,
          }}
          onClick={toggleList}
          className={`
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-full
            border
            transition
            ${
              added
                ? "border-purple-400/30 bg-purple-500/15 text-purple-300"
                : "border-white/[0.07] bg-white/[0.03] text-white/30 hover:border-purple-400/30 hover:bg-purple-500/10 hover:text-purple-300"
            }
          `}
        >
          {added ? (
            <Check size={14} />
          ) : (
            <Plus size={14} />
          )}
        </motion.button>
      </div>
    </motion.article>
  );
}

/* =========================================================
   MAIN COMPONENT
   ========================================================= */

function PremiumMovies() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#020203]
        py-20
        sm:py-24
        lg:py-28
      "
    >
      {/* ===================================================
          BACKGROUND LIGHT
      =================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-[-220px]
          top-[10%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-purple-700/10
          blur-[160px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[-220px]
          bottom-[0]
          h-[500px]
          w-[500px]
          rounded-full
          bg-indigo-700/10
          blur-[160px]
        "
      />

      {/* ===================================================
          CONTAINER
      =================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1600px]
          px-6
          sm:px-10
          lg:px-16
          xl:px-20
        "
      >
        {/* =================================================
            HEADER
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            mb-10
            flex
            items-end
            justify-between
          "
        >
          <div>
            {/* LABEL */}

            <div
              className="
                mb-4
                flex
                items-center
                gap-3
              "
            >
              <span
                className="
                  h-px
                  w-8
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
                Cinematic Collection
              </span>
            </div>

            {/* TITLE */}

            <h2
              className="
                text-3xl
                font-black
                tracking-[-1.5px]
                text-white
                sm:text-4xl
                lg:text-5xl
              "
            >
              Premium Movies
            </h2>

            <p
              className="
                mt-3
                max-w-xl
                text-xs
                leading-6
                text-white/30
                sm:text-sm
              "
            >
              Explore cinematic stories curated for
              the Amitverse experience.
            </p>
          </div>

          {/* VIEW ALL */}

          <motion.button
            whileHover={{
              x: 4,
            }}
            className="
              hidden
              items-center
              gap-2
              text-xs
              font-semibold
              text-white/35
              transition
              hover:text-purple-300
              sm:flex
            "
          >
            Explore Movies

            <ChevronRight size={15} />
          </motion.button>
        </motion.div>

        {/* =================================================
            MOVIE LIST
        ================================================= */}

        <div
          className="
            -mx-6
            flex
            gap-5
            overflow-x-auto
            px-6
            pb-8
            scrollbar-none
            sm:-mx-10
            sm:px-10
            lg:-mx-16
            lg:px-16
            xl:-mx-20
            xl:px-20
          "
        >
          {movies.map((movie, index) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PremiumMovies;
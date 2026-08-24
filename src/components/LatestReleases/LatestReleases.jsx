import { useState } from "react";
import { motion } from "framer-motion";
import {
  Play,
  Plus,
  Star,
  ChevronRight,
  CalendarDays,
  Check,
} from "lucide-react";

/* =========================================================
   DEMO DATA

   Later:
   GET /api/anime/latest
   ========================================================= */

const latestReleases = [
  {
    id: 1,
    title: "Solo Leveling",
    episode: "Episode 12",
    release: "Today",
    year: "2024",
    rating: "9.8",
    genre: "Action • Fantasy",
    quality: "4K",
    type: "Anime",
    image:
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1200&q=90",
  },

  {
    id: 2,
    title: "Demon Slayer",
    episode: "Episode 08",
    release: "Today",
    year: "2024",
    rating: "9.7",
    genre: "Action • Adventure",
    quality: "4K",
    type: "Anime",
    image:
      "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=1200&q=90",
  },

  {
    id: 3,
    title: "Jujutsu Kaisen",
    episode: "Episode 23",
    release: "Yesterday",
    year: "2023",
    rating: "9.6",
    genre: "Dark Fantasy",
    quality: "HD",
    type: "Anime",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=90",
  },

  {
    id: 4,
    title: "One Piece",
    episode: "Episode 1102",
    release: "2 days ago",
    year: "2024",
    rating: "9.5",
    genre: "Adventure • Fantasy",
    quality: "4K",
    type: "Anime",
    image:
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=90",
  },

  {
    id: 5,
    title: "Chainsaw Man",
    episode: "Episode 10",
    release: "3 days ago",
    year: "2022",
    rating: "9.3",
    genre: "Action • Horror",
    quality: "HD",
    type: "Anime",
    image:
      "https://images.unsplash.com/photo-1534791547706-ef6b8f6f7c4c?auto=format&fit=crop&w=1200&q=90",
  },

  {
    id: 6,
    title: "Attack on Titan",
    episode: "Final Episode",
    release: "5 days ago",
    year: "2023",
    rating: "9.9",
    genre: "Action • Drama",
    quality: "4K",
    type: "Anime",
    image:
      "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?auto=format&fit=crop&w=1200&q=90",
  },
];

/* =========================================================
   RELEASE CARD
   ========================================================= */

function ReleaseCard({ anime, index }) {
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
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
        delay: index * 0.08,
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        group
        w-[260px]
        shrink-0
        sm:w-[280px]
        lg:w-[300px]
      "
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >

      {/* ===================================================
          POSTER
      =================================================== */}

      <motion.div
        animate={{
          y: hovered ? -7 : 0,
        }}
        transition={{
          duration: 0.3,
        }}
        className="
          relative
          h-[360px]
          overflow-hidden
          rounded-2xl
          border
          border-white/[0.07]
          bg-[#08080c]
          shadow-[0_25px_70px_rgba(0,0,0,0.35)]
          sm:h-[390px]
        "
      >

        {/* POSTER IMAGE */}

        <motion.img
          src={anime.image}
          alt={anime.title}
          animate={{
            scale: hovered ? 1.08 : 1,
          }}
          transition={{
            duration: 0.7,
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

        {/* TOP GRADIENT */}

        <div
          className="
            absolute
            inset-x-0
            top-0
            h-32
            bg-gradient-to-b
            from-black/60
            to-transparent
          "
        />

        {/* =================================================
            NEW BADGE
        ================================================= */}

        <motion.div
          animate={{
            scale: hovered ? 1.05 : 1,
          }}
          className="
            absolute
            left-4
            top-4
            z-20
            flex
            items-center
            gap-2
            rounded-full
            border
            border-purple-300/20
            bg-purple-500/15
            px-3
            py-1.5
            shadow-[0_0_25px_rgba(139,92,246,0.12)]
            backdrop-blur-xl
          "
        >

          <span
            className="
              h-1.5
              w-1.5
              rounded-full
              bg-purple-300
              shadow-[0_0_10px_rgba(192,132,252,0.9)]
            "
          />

          <span
            className="
              text-[9px]
              font-black
              uppercase
              tracking-[2px]
              text-purple-200
            "
          >
            New
          </span>

        </motion.div>

        {/* =================================================
            QUALITY BADGE
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
            bg-black/35
            px-2
            py-1.5
            text-[9px]
            font-bold
            tracking-wider
            text-white/60
            backdrop-blur-xl
          "
        >
          {anime.quality}
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
            scale: 0.92,
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
            shadow-[0_0_50px_rgba(139,92,246,0.4)]
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
            BOTTOM CONTENT
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

          {/* EPISODE */}

          <div
            className="
              mb-2
              flex
              items-center
              gap-2
            "
          >

            <span
              className="
                rounded-md
                border
                border-white/10
                bg-white/[0.06]
                px-2
                py-1
                text-[9px]
                font-bold
                text-white/60
                backdrop-blur-xl
              "
            >
              {anime.episode}
            </span>

            <span
              className="
                text-[9px]
                text-white/30
              "
            >
              {anime.type}
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
            {anime.title}
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
            {anime.genre}
          </p>

        </div>

        {/* =================================================
            PURPLE LIGHT
        ================================================= */}

        <motion.div
          animate={{
            opacity: hovered ? 0.4 : 0,
          }}
          className="
            pointer-events-none
            absolute
            bottom-0
            left-1/2
            h-32
            w-52
            -translate-x-1/2
            rounded-full
            bg-purple-600/30
            blur-[70px]
          "
        />

      </motion.div>

      {/* ===================================================
          META ROW
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

            {anime.rating}
          </span>

          {/* YEAR */}

          <span
            className="
              text-[10px]
              text-white/25
            "
          >
            {anime.year}
          </span>

          {/* RELEASE */}

          <span
            className="
              flex
              items-center
              gap-1
              text-[9px]
              text-white/25
            "
          >
            <CalendarDays size={10} />

            {anime.release}
          </span>

        </div>

        {/* ADD BUTTON */}

        <motion.button
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{
            scale: 0.9,
          }}
          onClick={handleAdd}
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
   MAIN SECTION
   ========================================================= */

function LatestReleases() {
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
          BACKGROUND GLOW
      =================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-[-200px]
          top-[10%]
          h-[450px]
          w-[450px]
          rounded-full
          bg-purple-700/10
          blur-[150px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[-200px]
          bottom-[0]
          h-[450px]
          w-[450px]
          rounded-full
          bg-indigo-700/10
          blur-[150px]
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
                Fresh From The Vault
              </span>

            </div>

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
              Latest Releases
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
              The newest episodes, movies and anime
              added to Amitverse.
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

            View All

            <ChevronRight size={15} />

          </motion.button>

        </motion.div>

        {/* =================================================
            RELEASE CARDS
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

          {latestReleases.map(
            (anime, index) => (
              <ReleaseCard
                key={anime.id}
                anime={anime}
                index={index}
              />
            )
          )}

        </div>

      </div>

    </section>
  );
}

export default LatestReleases;
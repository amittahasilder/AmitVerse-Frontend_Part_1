import { useState } from "react";
import { motion } from "framer-motion";
import {
  Play,
  X,
  Clock3,
  ChevronRight,
} from "lucide-react";

/* =========================================================
   DEMO CONTINUE WATCHING DATA

   Later this will come from:
   GET /api/user/watch-history
   ========================================================= */

const continueWatchingData = [
  {
    id: 1,

    title: "Solo Leveling",

    episode: "Episode 08",

    totalEpisodes: "12 Episodes",

    duration: "24m",

    watched: "16m",

    progress: 67,

    image:
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1200&q=85",
  },

  {
    id: 2,

    title: "Jujutsu Kaisen",

    episode: "Episode 19",

    totalEpisodes: "23 Episodes",

    duration: "24m",

    watched: "11m",

    progress: 46,

    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=85",
  },

  {
    id: 3,

    title: "Demon Slayer",

    episode: "Episode 06",

    totalEpisodes: "11 Episodes",

    duration: "23m",

    watched: "19m",

    progress: 83,

    image:
      "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=1200&q=85",
  },

  {
    id: 4,

    title: "One Piece",

    episode: "Episode 1101",

    totalEpisodes: "1100+ Episodes",

    duration: "24m",

    watched: "08m",

    progress: 34,

    image:
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=85",
  },

  {
    id: 5,

    title: "Chainsaw Man",

    episode: "Episode 09",

    totalEpisodes: "12 Episodes",

    duration: "24m",

    watched: "20m",

    progress: 88,

    image:
      "https://images.unsplash.com/photo-1534791547706-ef6b8f6f7c4c?auto=format&fit=crop&w=1200&q=85",
  },
];

/* =========================================================
   WATCH CARD
   ========================================================= */

function WatchCard({ anime, onRemove }) {
  const [hovered, setHovered] = useState(false);

  return (
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
        amount: 0.2,
      }}
      transition={{
        duration: 0.65,
      }}
      className="
        group
        relative
        w-[330px]
        shrink-0
        sm:w-[360px]
        lg:w-[390px]
      "
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >

      {/* ===================================================
          IMAGE CONTAINER
      =================================================== */}

      <motion.div
        animate={{
          y: hovered ? -5 : 0,
        }}
        transition={{
          duration: 0.3,
        }}
        className="
          relative
          h-[190px]
          overflow-hidden
          rounded-2xl
          border
          border-white/[0.07]
          bg-[#09090d]
          shadow-[0_20px_60px_rgba(0,0,0,0.3)]
          sm:h-[205px]
        "
      >

        {/* IMAGE */}

        <motion.img
          src={anime.image}
          alt={anime.title}
          animate={{
            scale: hovered ? 1.07 : 1,
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

        {/* DARK OVERLAY */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black
            via-black/20
            to-black/10
          "
        />

        {/* =================================================
            PLAY BUTTON
        ================================================= */}

        <motion.button
          animate={{
            scale: hovered ? 1 : 0.9,
            opacity: hovered ? 1 : 0,
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
            z-20
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
            shadow-[0_0_50px_rgba(139,92,246,0.35)]
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
            REMOVE BUTTON
        ================================================= */}

        <motion.button
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: hovered ? 1 : 0,
          }}
          whileHover={{
            scale: 1.08,
          }}
          whileTap={{
            scale: 0.9,
          }}
          onClick={() => onRemove(anime.id)}
          className="
            absolute
            right-3
            top-3
            z-30
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-black/40
            text-white/60
            backdrop-blur-xl
            transition
            hover:bg-red-500/20
            hover:text-red-300
          "
        >
          <X size={14} />
        </motion.button>

        {/* =================================================
            EPISODE BADGE
        ================================================= */}

        <div
          className="
            absolute
            bottom-4
            left-4
            z-20
            rounded-md
            border
            border-white/10
            bg-black/40
            px-2.5
            py-1.5
            text-[9px]
            font-bold
            uppercase
            tracking-wider
            text-white/70
            backdrop-blur-xl
          "
        >
          {anime.episode}
        </div>

        {/* =================================================
            TIME
        ================================================= */}

        <div
          className="
            absolute
            bottom-4
            right-4
            z-20
            flex
            items-center
            gap-1.5
            text-[9px]
            font-medium
            text-white/40
          "
        >
          <Clock3 size={11} />

          {anime.watched} watched

        </div>

        {/* =================================================
            PROGRESS BAR
        ================================================= */}

        <div
          className="
            absolute
            bottom-0
            left-0
            right-0
            z-30
            h-[3px]
            bg-white/10
          "
        >

          <motion.div
            initial={{
              width: 0,
            }}
            whileInView={{
              width: `${anime.progress}%`,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
            }}
            className="
              h-full
              bg-gradient-to-r
              from-purple-600
              via-fuchsia-400
              to-white
              shadow-[0_0_12px_rgba(168,85,247,0.7)]
            "
          />

        </div>

      </motion.div>

      {/* ===================================================
          CARD INFORMATION
      =================================================== */}

      <div className="mt-4 px-1">

        <div
          className="
            flex
            items-start
            justify-between
            gap-4
          "
        >

          <div>

            <h3
              className="
                text-base
                font-bold
                tracking-tight
                text-white
                transition
                group-hover:text-purple-200
              "
            >
              {anime.title}
            </h3>

            <p
              className="
                mt-1.5
                text-[10px]
                font-medium
                text-white/30
              "
            >
              {anime.episode}
              <span className="mx-2 text-white/10">
                •
              </span>
              {anime.totalEpisodes}
            </p>

          </div>

          {/* PROGRESS */}

          <span
            className="
              pt-1
              text-[10px]
              font-bold
              text-purple-300/70
            "
          >
            {anime.progress}%
          </span>

        </div>

      </div>

    </motion.div>
  );
}

/* =========================================================
   MAIN SECTION
   ========================================================= */

function ContinueWatching() {
  const [items, setItems] = useState(
    continueWatchingData
  );

  /* =======================================================
     REMOVE
     ======================================================= */

  const handleRemove = (id) => {
    setItems((current) =>
      current.filter(
        (item) => item.id !== id
      )
    );
  };

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
          left-[10%]
          top-[-200px]
          h-[400px]
          w-[400px]
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
          bottom-[-150px]
          h-[450px]
          w-[450px]
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
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            mb-9
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
                Pick Up Where You Left Off
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
              Continue Watching
            </h2>

            <p
              className="
                mt-3
                text-xs
                text-white/30
                sm:text-sm
              "
            >
              Jump back into your favorite stories.
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

            View History

            <ChevronRight size={15} />

          </motion.button>

        </motion.div>

        {/* =================================================
            EMPTY STATE
        ================================================= */}

        {items.length === 0 ? (

          <div
            className="
              rounded-2xl
              border
              border-white/[0.07]
              bg-white/[0.02]
              px-6
              py-16
              text-center
            "
          >

            <div
              className="
                mx-auto
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-purple-400/10
                bg-purple-500/10
                text-purple-300
              "
            >
              <Play size={17} />
            </div>

            <h3
              className="
                mt-5
                text-lg
                font-bold
                text-white
              "
            >
              Nothing here yet
            </h3>

            <p
              className="
                mx-auto
                mt-2
                max-w-sm
                text-xs
                leading-6
                text-white/30
              "
            >
              Start watching an anime or movie and
              your progress will appear here.
            </p>

          </div>

        ) : (

          /* =================================================
             HORIZONTAL CARDS
          ================================================= */

          <div
            className="
              -mx-6
              flex
              gap-5
              overflow-x-auto
              px-6
              pb-6
              scrollbar-none
              sm:-mx-10
              sm:px-10
              lg:-mx-16
              lg:px-16
              xl:-mx-20
              xl:px-20
            "
          >

            {items.map((anime) => (
              <WatchCard
                key={anime.id}
                anime={anime}
                onRemove={handleRemove}
              />
            ))}

          </div>

        )}

      </div>

    </section>
  );
}

export default ContinueWatching;
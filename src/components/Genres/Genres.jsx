import { motion } from "framer-motion";
import {
  Sword,
  Heart,
  Ghost,
  Sparkles,
  Rocket,
  Laugh,
  Skull,
  Drama,
  Compass,
  Zap,
  Flame,
  Crown,
} from "lucide-react";

const genres = [
  {
    id: 1,
    title: "Action",
    count: "248 Titles",
    icon: Sword,
    gradient: "from-red-500/20 to-orange-500/5",
  },
  {
    id: 2,
    title: "Romance",
    count: "186 Titles",
    icon: Heart,
    gradient: "from-pink-500/20 to-rose-500/5",
  },
  {
    id: 3,
    title: "Horror",
    count: "124 Titles",
    icon: Ghost,
    gradient: "from-violet-500/20 to-purple-500/5",
  },
  {
    id: 4,
    title: "Fantasy",
    count: "214 Titles",
    icon: Sparkles,
    gradient: "from-purple-500/20 to-fuchsia-500/5",
  },
  {
    id: 5,
    title: "Sci-Fi",
    count: "143 Titles",
    icon: Rocket,
    gradient: "from-cyan-500/20 to-blue-500/5",
  },
  {
    id: 6,
    title: "Comedy",
    count: "167 Titles",
    icon: Laugh,
    gradient: "from-yellow-500/20 to-amber-500/5",
  },
  {
    id: 7,
    title: "Thriller",
    count: "132 Titles",
    icon: Skull,
    gradient: "from-slate-500/20 to-zinc-500/5",
  },
  {
    id: 8,
    title: "Drama",
    count: "198 Titles",
    icon: Drama,
    gradient: "from-blue-500/20 to-indigo-500/5",
  },
  {
    id: 9,
    title: "Adventure",
    count: "175 Titles",
    icon: Compass,
    gradient: "from-emerald-500/20 to-green-500/5",
  },
  {
    id: 10,
    title: "Supernatural",
    count: "109 Titles",
    icon: Zap,
    gradient: "from-indigo-500/20 to-purple-500/5",
  },
  {
    id: 11,
    title: "Popular",
    count: "320 Titles",
    icon: Flame,
    gradient: "from-orange-500/20 to-red-500/5",
  },
  {
    id: 12,
    title: "Premium",
    count: "96 Titles",
    icon: Crown,
    gradient: "from-yellow-500/20 to-purple-500/5",
  },
];

function Genres() {
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
      {/* BACKGROUND GLOW */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[700px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-purple-700/[0.06]
          blur-[150px]
        "
      />

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
        {/* HEADER */}

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
          className="mb-10"
        >
          <div className="mb-4 flex items-center gap-3">
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
              Explore The Universe
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
            Browse By Genre
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
            Discover your next favorite anime and movie
            from a world of stories.
          </p>
        </motion.div>

        {/* GENRE GRID */}

        <div
          className="
            grid
            grid-cols-2
            gap-3
            sm:grid-cols-3
            sm:gap-4
            lg:grid-cols-4
            xl:grid-cols-6
          "
        >
          {genres.map((genre, index) => {
            const Icon = genre.icon;

            return (
              <motion.button
                key={genre.id}
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
                  amount: 0.15,
                }}
                transition={{
                  delay: index * 0.05,
                  duration: 0.5,
                }}
                whileHover={{
                  y: -6,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className={`
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/[0.07]
                  bg-gradient-to-br
                  ${genre.gradient}
                  p-5
                  text-left
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:border-purple-400/20
                  hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]
                `}
              >
                {/* GLOW */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-8
                    -top-8
                    h-24
                    w-24
                    rounded-full
                    bg-purple-500/10
                    blur-3xl
                    transition
                    duration-500
                    group-hover:bg-purple-400/20
                  "
                />

                {/* ICON */}

                <div
                  className="
                    relative
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-white/[0.07]
                    bg-black/20
                    text-white/60
                    backdrop-blur-xl
                    transition
                    duration-300
                    group-hover:border-purple-400/20
                    group-hover:bg-purple-500/10
                    group-hover:text-purple-200
                  "
                >
                  <Icon size={19} />
                </div>

                {/* TEXT */}

                <div className="relative mt-5">
                  <h3
                    className="
                      text-sm
                      font-bold
                      text-white
                      transition
                      group-hover:text-purple-200
                    "
                  >
                    {genre.title}
                  </h3>

                  <p
                    className="
                      mt-1
                      text-[9px]
                      font-medium
                      text-white/25
                    "
                  >
                    {genre.count}
                  </p>
                </div>

                {/* ARROW */}

                <div
                  className="
                    absolute
                    bottom-5
                    right-5
                    text-xs
                    text-white/10
                    transition
                    duration-300
                    group-hover:translate-x-1
                    group-hover:text-purple-300/60
                  "
                >
                  →
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Genres;
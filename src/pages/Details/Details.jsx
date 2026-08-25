import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Play,
  Plus,
  Check,
  Star,
  Clock3,
  CalendarDays,
  Volume2,
  Share2,
  Heart,
  ChevronRight,
} from "lucide-react";

import { motion } from "framer-motion";

/* =========================================================
   DEMO CONTENT DATA
========================================================= */

const contentData = [
  {
    id: "1",
    title: "Solo Leveling",
    type: "Anime",
    year: "2024",
    rating: "9.8",
    duration: "24m",
    episodes: "25 Episodes",
    genre: ["Action", "Fantasy", "Adventure"],
    status: "Completed",
    quality: "4K",
    language: "Japanese",
    description:
      "Sung Jin-Woo was once known as the weakest hunter of all mankind. After a mysterious incident inside a dangerous dungeon, he gains a unique ability that allows him to level up beyond every limit. Now he begins a journey to uncover the secrets behind his power and the world of hunters.",
    poster:
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=900&q=90",
    backdrop:
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=2000&q=90",
  },

  {
    id: "2",
    title: "Demon Slayer",
    type: "Anime",
    year: "2025",
    rating: "9.7",
    duration: "24m",
    episodes: "63 Episodes",
    genre: ["Action", "Fantasy", "Supernatural"],
    status: "Ongoing",
    quality: "4K",
    language: "Japanese",
    description:
      "Tanjiro Kamado joins the Demon Slayer Corps after his family is attacked and his sister is transformed into a demon. Armed with determination and a powerful sense of justice, he faces increasingly dangerous enemies.",
    poster:
      "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?auto=format&fit=crop&w=900&q=90",
    backdrop:
      "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?auto=format&fit=crop&w=2000&q=90",
  },

  {
    id: "3",
    title: "Jujutsu Kaisen",
    type: "Anime",
    year: "2025",
    rating: "9.5",
    duration: "24m",
    episodes: "47 Episodes",
    genre: ["Action", "Supernatural", "Dark Fantasy"],
    status: "Ongoing",
    quality: "4K",
    language: "Japanese",
    description:
      "Yuji Itadori enters the world of cursed spirits after swallowing a powerful cursed object. He joins Jujutsu High and begins a dangerous journey filled with battles, friendship and supernatural mysteries.",
    poster:
      "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?auto=format&fit=crop&w=900&q=90",
    backdrop:
      "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?auto=format&fit=crop&w=2000&q=90",
  },

  {
    id: "6",
    title: "Interstellar",
    type: "Movie",
    year: "2014",
    rating: "9.2",
    duration: "2h 49m",
    episodes: null,
    genre: ["Sci-Fi", "Drama", "Adventure"],
    status: "Movie",
    quality: "4K",
    language: "English",
    description:
      "A team of explorers travels through a mysterious wormhole in space in search of a new home for humanity. Their journey pushes the limits of time, space and human connection.",
    poster:
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=900&q=90",
    backdrop:
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=2000&q=90",
  },

  {
    id: "7",
    title: "The Dark Knight",
    type: "Movie",
    year: "2008",
    rating: "9.0",
    duration: "2h 32m",
    episodes: null,
    genre: ["Action", "Crime", "Drama"],
    status: "Movie",
    quality: "4K",
    language: "English",
    description:
      "A masked hero faces a dangerous criminal mastermind who pushes Gotham City into chaos and forces Batman to confront the limits of justice.",
    poster:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=900&q=90",
    backdrop:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=2000&q=90",
  },
];

/* =========================================================
   DETAILS PAGE
========================================================= */

function Details() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [saved, setSaved] = useState(false);

  const [showTrailer, setShowTrailer] =
    useState(false);

  /* =======================================================
     FIND CONTENT
  ======================================================= */

  const content = contentData.find(
    (item) => item.id === id
  );

  /* =======================================================
     SCROLL TOP
  ======================================================= */

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, [id]);

  /* =======================================================
     NOT FOUND
  ======================================================= */

  if (!content) {
    return (
      <main
        className="
          flex
          min-h-screen
          items-center
          justify-center
          bg-[#030305]
          px-6
          text-white
        "
      >
        <div className="text-center">

          <div
            className="
              mx-auto
              flex
              h-24
              w-24
              items-center
              justify-center
              rounded-3xl
              border
              border-white/[0.08]
              bg-white/[0.025]
              text-3xl
              text-purple-300/60
            "
          >
            ?
          </div>

          <h1
            className="
              mt-7
              text-3xl
              font-black
            "
          >
            Content Not Found
          </h1>

          <p
            className="
              mx-auto
              mt-3
              max-w-md
              text-sm
              leading-7
              text-white/30
            "
          >
            The movie or anime you're looking for
            doesn't exist in the AmitVerse library.
          </p>

          <button
            type="button"
            onClick={() => navigate(-1)}
            className="
              mt-7
              rounded-xl
              border
              border-purple-400/20
              bg-purple-500/10
              px-6
              py-3
              text-xs
              font-bold
              text-purple-200
              transition
              hover:bg-purple-500/20
            "
          >
            Go Back
          </button>

        </div>
      </main>
    );
  }

  return (
    <main
      className="
        min-h-screen
        overflow-hidden
        bg-[#030305]
        text-white
      "
    >

      {/* =====================================================
          CINEMATIC BACKDROP
      ===================================================== */}

      <section className="relative min-h-[760px]">

        {/* BACKGROUND IMAGE */}

        <motion.div
          initial={{
            scale: 1.08,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            duration: 1.4,
            ease: "easeOut",
          }}
          className="
            absolute
            inset-0
            overflow-hidden
          "
        >

          <img
            src={content.backdrop}
            alt=""
            className="
              h-full
              w-full
              object-cover
              object-center
            "
          />

          {/* IMAGE BLUR */}

          <div
            className="
              absolute
              inset-0
              bg-black/35
              backdrop-blur-[1px]
            "
          />

          {/* LEFT GRADIENT */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-[#030305]
              via-[#030305]/85
              via-45%
              to-transparent
            "
          />

          {/* BOTTOM GRADIENT */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-[#030305]
              via-[#030305]/40
              to-transparent
            "
          />

          {/* TOP GRADIENT */}

          <div
            className="
              absolute
              inset-x-0
              top-0
              h-40
              bg-gradient-to-b
              from-[#030305]/90
              to-transparent
            "
          />

        </motion.div>

        {/* ===================================================
            AMBIENT GLOW
        =================================================== */}

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            pointer-events-none
            absolute
            left-[45%]
            top-[15%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-purple-600
            blur-[180px]
          "
        />

        {/* ===================================================
            CONTENT
        =================================================== */}

        <div
          className="
            relative
            z-10
            mx-auto
            flex
            min-h-[760px]
            max-w-[1500px]
            items-end
            px-5
            pb-20
            pt-40
            sm:px-8
            lg:px-14
            xl:px-20
          "
        >

          <div className="w-full">

            {/* BACK BUTTON */}

            <motion.button
              initial={{
                opacity: 0,
                x: -20,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: 0.2,
              }}
              type="button"
              onClick={() => navigate(-1)}
              className="
                mb-10
                flex
                items-center
                gap-2
                rounded-xl
                border
                border-white/[0.08]
                bg-black/30
                px-4
                py-2.5
                text-[10px]
                font-bold
                uppercase
                tracking-[1.5px]
                text-white/50
                backdrop-blur-xl
                transition
                hover:border-purple-400/20
                hover:bg-purple-500/10
                hover:text-white
              "
            >
              <ArrowLeft size={15} />

              Back

            </motion.button>

            {/* =================================================
                MAIN DETAIL AREA
            ================================================= */}

            <div
              className="
                grid
                gap-8
                lg:grid-cols-[230px_1fr]
                xl:grid-cols-[260px_1fr]
              "
            >

              {/* =================================================
                  POSTER
              ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 40,
                  scale: 0.94,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                transition={{
                  delay: 0.25,
                  duration: 0.8,
                }}
                whileHover={{
                  y: -8,
                }}
                className="
                  group
                  relative
                  mx-auto
                  w-[200px]
                  sm:w-[230px]
                  lg:mx-0
                  lg:w-full
                "
              >

                {/* POSTER GLOW */}

                <div
                  className="
                    absolute
                    -inset-3
                    rounded-[24px]
                    bg-purple-600/15
                    opacity-0
                    blur-2xl
                    transition
                    duration-500
                    group-hover:opacity-100
                  "
                />

                <div
                  className="
                    relative
                    aspect-[2/3]
                    overflow-hidden
                    rounded-2xl
                    border
                    border-white/[0.12]
                    bg-white/[0.02]
                    shadow-[0_30px_100px_rgba(0,0,0,0.6)]
                  "
                >

                  <img
                    src={content.poster}
                    alt={content.title}
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-105
                    "
                  />

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/50
                      to-transparent
                    "
                  />

                  {/* QUALITY */}

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
                      text-[8px]
                      font-black
                      tracking-wider
                      text-white/70
                      backdrop-blur-xl
                    "
                  >
                    {content.quality}
                  </div>

                </div>

              </motion.div>

              {/* =================================================
                  DETAILS
              ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: 40,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: 0.35,
                  duration: 0.8,
                }}
                className="
                  flex
                  max-w-4xl
                  flex-col
                  justify-end
                "
              >

                {/* TYPE */}

                <div className="mb-4 flex items-center gap-3">

                  <span
                    className="
                      rounded-md
                      border
                      border-purple-400/20
                      bg-purple-500/10
                      px-2.5
                      py-1.5
                      text-[8px]
                      font-black
                      uppercase
                      tracking-[1.5px]
                      text-purple-200
                    "
                  >
                    {content.type}
                  </span>

                  <span
                    className="
                      h-1
                      w-1
                      rounded-full
                      bg-white/20
                    "
                  />

                  <span
                    className="
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[2px]
                      text-white/30
                    "
                  >
                    {content.status}
                  </span>

                </div>

                {/* TITLE */}

                <h1
                  className="
                    max-w-5xl
                    text-5xl
                    font-black
                    leading-[0.95]
                    tracking-[-3px]
                    sm:text-6xl
                    lg:text-7xl
                    xl:text-8xl
                  "
                >
                  {content.title}
                </h1>

                {/* META */}

                <div
                  className="
                    mt-7
                    flex
                    flex-wrap
                    items-center
                    gap-x-5
                    gap-y-3
                    text-xs
                    text-white/40
                  "
                >

                  <span className="flex items-center gap-2">
                    <CalendarDays size={14} />
                    {content.year}
                  </span>

                  <span className="flex items-center gap-2">
                    <Clock3 size={14} />
                    {content.duration}
                  </span>

                  <span className="flex items-center gap-2 text-yellow-300/80">
                    <Star
                      size={14}
                      fill="currentColor"
                    />
                    {content.rating}
                  </span>

                  {content.episodes && (
                    <span>
                      {content.episodes}
                    </span>
                  )}

                </div>

                {/* GENRES */}

                <div
                  className="
                    mt-5
                    flex
                    flex-wrap
                    gap-2
                  "
                >

                  {content.genre.map(
                    (genre) => (
                      <span
                        key={genre}
                        className="
                          rounded-full
                          border
                          border-white/[0.08]
                          bg-white/[0.025]
                          px-3
                          py-1.5
                          text-[8px]
                          font-semibold
                          text-white/40
                          backdrop-blur-xl
                        "
                      >
                        {genre}
                      </span>
                    )
                  )}

                </div>

                {/* DESCRIPTION */}

                <p
                  className="
                    mt-7
                    max-w-3xl
                    text-sm
                    leading-7
                    text-white/40
                    sm:text-base
                  "
                >
                  {content.description}
                </p>

                {/* =================================================
                    ACTIONS
                ================================================= */}

                <div
                  className="
                    mt-8
                    flex
                    flex-wrap
                    items-center
                    gap-3
                  "
                >

                  {/* WATCH */}

                  <motion.button
                    whileHover={{
                      y: -3,
                      scale: 1.02,
                    }}
                    whileTap={{
                      scale: 0.96,
                    }}
                    type="button"
                    onClick={() =>
                      navigate(
                        `/watch/${content.id}`
                      )
                    }
                    className="
                      group
                      relative
                      flex
                      items-center
                      gap-3
                      overflow-hidden
                      rounded-xl
                      border
                      border-purple-300/20
                      bg-gradient-to-r
                      from-purple-600
                      via-violet-600
                      to-indigo-600
                      px-6
                      py-3.5
                      text-xs
                      font-black
                      text-white
                      shadow-[0_0_40px_rgba(124,58,237,0.25)]
                      transition
                      hover:shadow-[0_0_55px_rgba(124,58,237,0.45)]
                    "
                  >

                    <motion.span
                      animate={{
                        x: [
                          "-150%",
                          "200%",
                        ],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        repeatDelay: 3,
                        ease: "easeInOut",
                      }}
                      className="
                        absolute
                        inset-y-0
                        w-8
                        rotate-12
                        bg-white/20
                        blur-md
                      "
                    />

                    <Play
                      size={16}
                      fill="currentColor"
                      className="relative z-10"
                    />

                    <span className="relative z-10">
                      Watch Now
                    </span>

                  </motion.button>

                  {/* TRAILER */}

                  <motion.button
                    whileHover={{
                      y: -3,
                    }}
                    whileTap={{
                      scale: 0.96,
                    }}
                    type="button"
                    onClick={() =>
                      setShowTrailer(true)
                    }
                    className="
                      flex
                      items-center
                      gap-2
                      rounded-xl
                      border
                      border-white/[0.10]
                      bg-white/[0.04]
                      px-5
                      py-3.5
                      text-xs
                      font-bold
                      text-white/70
                      backdrop-blur-xl
                      transition
                      hover:border-white/20
                      hover:bg-white/[0.08]
                      hover:text-white
                    "
                  >

                    <Play size={15} />

                    Trailer

                  </motion.button>

                  {/* WATCHLIST */}

                  <motion.button
                    whileHover={{
                      y: -3,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    type="button"
                    onClick={() =>
                      setSaved(!saved)
                    }
                    className={`
                      flex
                      items-center
                      gap-2
                      rounded-xl
                      border
                      px-4
                      py-3.5
                      text-xs
                      font-bold
                      backdrop-blur-xl
                      transition
                      ${
                        saved
                          ? "border-purple-400/20 bg-purple-500/10 text-purple-200"
                          : "border-white/[0.10] bg-white/[0.04] text-white/60 hover:border-white/20 hover:text-white"
                      }
                    `}
                  >

                    {saved ? (
                      <Check size={15} />
                    ) : (
                      <Plus size={15} />
                    )}

                    {saved
                      ? "Saved"
                      : "Watchlist"}

                  </motion.button>

                  {/* SHARE */}

                  <motion.button
                    whileHover={{
                      y: -3,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    type="button"
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-white/[0.10]
                      bg-white/[0.04]
                      text-white/50
                      backdrop-blur-xl
                      transition
                      hover:border-white/20
                      hover:bg-white/[0.08]
                      hover:text-white
                    "
                    aria-label="Share"
                  >
                    <Share2 size={16} />
                  </motion.button>

                </div>

                {/* AUDIO */}

                <div
                  className="
                    mt-7
                    flex
                    items-center
                    gap-2
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[1.5px]
                    text-white/20
                  "
                >
                  <Volume2 size={13} />

                  Audio:
                  <span className="text-white/40">
                    {content.language}
                  </span>

                  <span className="mx-1">
                    •
                  </span>

                  Subtitles:
                  <span className="text-white/40">
                    English
                  </span>
                </div>

              </motion.div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          INFORMATION SECTION
      ===================================================== */}

      <section
        className="
          relative
          z-10
          border-t
          border-white/[0.05]
          bg-[#030305]
        "
      >

        <div
          className="
            mx-auto
            max-w-[1500px]
            px-5
            py-20
            sm:px-8
            lg:px-14
            xl:px-20
          "
        >

          <div
            className="
              grid
              gap-4
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >

            {/* CARD */}

            {[
              {
                label: "Rating",
                value: content.rating,
                icon: Star,
              },
              {
                label: "Release",
                value: content.year,
                icon: CalendarDays,
              },
              {
                label: "Runtime",
                value: content.duration,
                icon: Clock3,
              },
              {
                label: "Quality",
                value: content.quality,
                icon: Play,
              },
            ].map((item, index) => {

              const Icon =
                item.icon;

              return (
                <motion.div
                  key={item.label}
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
                    amount: 0.3,
                  }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -5,
                  }}
                  className="
                    rounded-2xl
                    border
                    border-white/[0.06]
                    bg-white/[0.02]
                    p-5
                    backdrop-blur-xl
                    transition
                    hover:border-purple-400/15
                    hover:bg-purple-500/[0.035]
                  "
                >

                  <div
                    className="
                      flex
                      items-center
                      justify-between
                    "
                  >

                    <span
                      className="
                        text-[8px]
                        font-bold
                        uppercase
                        tracking-[2px]
                        text-white/20
                      "
                    >
                      {item.label}
                    </span>

                    <Icon
                      size={15}
                      className="
                        text-purple-300/50
                      "
                    />

                  </div>

                  <div
                    className="
                      mt-4
                      text-xl
                      font-black
                      text-white/80
                    "
                  >
                    {item.value}
                  </div>

                </motion.div>
              );
            })}

          </div>

          {/* =================================================
              MORE CONTENT
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="
              mt-16
              flex
              items-center
              justify-between
              border-b
              border-white/[0.06]
              pb-5
            "
          >

            <div>

              <p
                className="
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[2px]
                  text-purple-300/40
                "
              >
                Continue Exploring
              </p>

              <h2
                className="
                  mt-2
                  text-2xl
                  font-black
                "
              >
                More Like This
              </h2>

            </div>

            <button
              type="button"
              onClick={() =>
                navigate(
                  content.type === "Anime"
                    ? "/anime"
                    : "/movies"
                )
              }
              className="
                flex
                items-center
                gap-1
                text-[9px]
                font-bold
                uppercase
                tracking-[1.5px]
                text-white/30
                transition
                hover:text-purple-300
              "
            >
              View All

              <ChevronRight
                size={14}
              />

            </button>

          </motion.div>

        </div>

      </section>

      {/* =====================================================
          TRAILER MODAL
      ===================================================== */}

      {showTrailer && (

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          className="
            fixed
            inset-0
            z-[200]
            flex
            items-center
            justify-center
            bg-black/85
            p-5
            backdrop-blur-xl
          "
        >

          {/* CLOSE */}

          <button
            type="button"
            onClick={() =>
              setShowTrailer(false)
            }
            className="
              absolute
              right-5
              top-5
              z-20
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/[0.05]
              text-white/60
              transition
              hover:bg-white/10
              hover:text-white
            "
          >
            ×
          </button>

          {/* VIDEO PLACEHOLDER */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.4,
            }}
            className="
              relative
              aspect-video
              w-full
              max-w-5xl
              overflow-hidden
              rounded-2xl
              border
              border-white/[0.10]
              bg-[#08080c]
              shadow-[0_30px_150px_rgba(0,0,0,0.8)]
            "
          >

            <div
              className="
                absolute
                inset-0
                flex
                flex-col
                items-center
                justify-center
                bg-gradient-to-br
                from-purple-950/40
                via-[#08080c]
                to-indigo-950/30
              "
            >

              <div
                className="
                  flex
                  h-20
                  w-20
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-purple-300/20
                  bg-purple-500/10
                  text-purple-200
                  shadow-[0_0_60px_rgba(139,92,246,0.2)]
                "
              >
                <Play
                  size={25}
                  fill="currentColor"
                />
              </div>

              <h3
                className="
                  mt-6
                  text-xl
                  font-black
                "
              >
                {content.title}
              </h3>

              <p
                className="
                  mt-2
                  text-xs
                  text-white/25
                "
              >
                Trailer player will connect
                to the video API here.
              </p>

            </div>

          </motion.div>

        </motion.div>

      )}

    </main>
  );
}

export default Details;
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Pause,
  Plus,
  Info,
  Volume2,
  VolumeX,
  Star,
  ChevronDown,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

/* =========================================================
   DEMO HERO DATA
   ========================================================= */

const fallbackHero = {
  id: "hero-001",

  title: "Solo Leveling",

  year: "2024",

  age: "16+",

  seasons: "1 Season",

  episodes: "12 Episodes",

  rating: "9.8",

  genre: "Action • Fantasy • Adventure",

  description:
    "The weakest hunter discovers a mysterious system that allows him to level up beyond every limit and become something the world has never seen.",

  poster:
    "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=2200&q=90",

  video:
    "https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4",
};

/* =========================================================
   HERO
   ========================================================= */

function Hero() {
  const videoRef = useRef(null);

  const [hero, setHero] = useState(fallbackHero);

  const [loading, setLoading] = useState(true);

  const [videoReady, setVideoReady] = useState(false);

  const [playing, setPlaying] = useState(true);

  const [muted, setMuted] = useState(true);

  const [progress, setProgress] = useState(0);

  /* =======================================================
     FUTURE API
     ======================================================= */

  useEffect(() => {
    /*
      Later:

      const fetchHero = async () => {
        try {
          const response = await fetch(
            "http://localhost:5000/api/hero"
          );

          const data = await response.json();

          setHero(data);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      };

      fetchHero();
    */

    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  /* =======================================================
     VIDEO STATE
     ======================================================= */

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    video.muted = muted;

    if (playing) {
      video.play().catch(() => {
        setPlaying(false);
      });
    } else {
      video.pause();
    }
  }, [playing, muted]);

  /* =======================================================
     VIDEO PROGRESS
     ======================================================= */

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const updateProgress = () => {
      if (!video.duration) return;

      const current =
        (video.currentTime / video.duration) * 100;

      setProgress(current);
    };

    video.addEventListener(
      "timeupdate",
      updateProgress
    );

    return () => {
      video.removeEventListener(
        "timeupdate",
        updateProgress
      );
    };
  }, [videoReady]);

  /* =======================================================
     PLAY / PAUSE
     ======================================================= */

  const togglePlay = () => {
    const video = videoRef.current;

    if (!video) return;

    if (video.paused) {
      video.play().catch(() => {});
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  /* =======================================================
     MUTE
     ======================================================= */

  const toggleMute = () => {
    setMuted((value) => !value);
  };

  /* =======================================================
     VIDEO READY
     ======================================================= */

  const handleVideoReady = () => {
    setVideoReady(true);
    setPlaying(true);
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#020203] text-white">

      {/* ===================================================
          CINEMATIC BACKGROUND
      =================================================== */}

      <div className="absolute inset-0">

        {/* POSTER */}

        <motion.img
          src={hero.poster}
          alt={hero.title}
          initial={{
            scale: 1.08,
            opacity: 1,
          }}
          animate={{
            scale: videoReady ? 1 : 1.08,
            opacity: videoReady ? 0 : 1,
          }}
          transition={{
            duration: 1.5,
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

        {/* VIDEO */}

        <motion.video
          ref={videoRef}
          key={hero.video}
          src={hero.video}
          poster={hero.poster}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onCanPlay={handleVideoReady}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          initial={{
            opacity: 0,
            scale: 1.08,
          }}
          animate={{
            opacity: videoReady ? 1 : 0,
            scale: videoReady ? 1 : 1.08,
          }}
          transition={{
            duration: 1.8,
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

        {/* LEFT CINEMATIC DARK */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#020203]
            via-[#020203]/90
            via-[55%]
            to-[#020203]/10
          "
        />

        {/* TOP DARK */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-[#020203]/80
            via-transparent
            to-transparent
          "
        />

        {/* BOTTOM DARK */}

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-[45%]
            bg-gradient-to-t
            from-[#020203]
            via-[#020203]/70
            to-transparent
          "
        />

        {/* CINEMATIC VIGNETTE */}

        <div
          className="
            absolute
            inset-0
            shadow-[inset_0_0_180px_rgba(0,0,0,0.8)]
          "
        />

      </div>

      {/* ===================================================
          PURPLE CINEMATIC LIGHT
      =================================================== */}

      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          opacity: [0.08, 0.18, 0.08],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          left-[-220px]
          top-[20%]
          h-[650px]
          w-[650px]
          rounded-full
          bg-purple-700/30
          blur-[170px]
        "
      />

      <motion.div
        animate={{
          opacity: [0.04, 0.12, 0.04],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          right-[-180px]
          top-[25%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-indigo-700/20
          blur-[160px]
        "
      />

      {/* ===================================================
          MAIN CONTENT
      =================================================== */}

      <div
        className="
          relative
          z-20
          mx-auto
          flex
          min-h-screen
          max-w-[1600px]
          items-center
          px-6
          pb-28
          pt-32
          sm:px-10
          lg:px-16
          xl:px-20
        "
      >

        <AnimatePresence mode="wait">

          {loading ? (

            /* =================================================
               LOADING
            ================================================= */

            <motion.div
              key="loader"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              className="w-full max-w-2xl"
            >

              <div
                className="
                  h-7
                  w-36
                  animate-pulse
                  rounded-full
                  bg-white/[0.08]
                "
              />

              <div
                className="
                  mt-7
                  h-24
                  w-full
                  max-w-[620px]
                  animate-pulse
                  rounded-2xl
                  bg-white/[0.08]
                "
              />

              <div
                className="
                  mt-6
                  h-4
                  w-full
                  max-w-[500px]
                  animate-pulse
                  rounded-full
                  bg-white/[0.06]
                "
              />

            </motion.div>

          ) : (

            /* =================================================
               HERO CONTENT
            ================================================= */

            <motion.div
              key={hero.id}
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-3xl"
            >

              {/* =================================================
                 FEATURED
              ================================================= */}

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
                  delay: 0.1,
                  duration: 0.7,
                }}
                className="
                  mb-6
                  flex
                  items-center
                  gap-3
                "
              >

                <div
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-purple-400/20
                    bg-purple-500/[0.08]
                    px-3.5
                    py-2
                    shadow-[0_0_30px_rgba(139,92,246,0.08)]
                    backdrop-blur-xl
                  "
                >

                  <Sparkles
                    size={11}
                    className="text-purple-300"
                  />

                  <span
                    className="
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[3px]
                      text-purple-200
                    "
                  >
                    Featured Premiere
                  </span>

                </div>

                <div
                  className="
                    hidden
                    h-px
                    w-10
                    bg-gradient-to-r
                    from-purple-400/50
                    to-transparent
                    sm:block
                  "
                />

                <span
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[2px]
                    text-white/30
                  "
                >
                  Now Streaming
                </span>

              </motion.div>

              {/* =================================================
                 TITLE
              ================================================= */}

              <motion.h1
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.2,
                  duration: 0.9,
                }}
                className="
                  max-w-3xl
                  text-5xl
                  font-black
                  leading-[0.9]
                  tracking-[-4px]
                  text-white
                  drop-shadow-[0_10px_40px_rgba(0,0,0,0.5)]
                  sm:text-7xl
                  lg:text-[92px]
                  xl:text-[104px]
                "
              >

                {hero.title}

              </motion.h1>

              {/* =================================================
                 META
              ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.35,
                }}
                className="
                  mt-7
                  flex
                  flex-wrap
                  items-center
                  gap-x-5
                  gap-y-3
                "
              >

                <span
                  className="
                    text-sm
                    font-bold
                    text-purple-300
                  "
                >
                  {hero.year}
                </span>

                <span
                  className="
                    rounded-md
                    border
                    border-white/10
                    bg-white/[0.04]
                    px-2
                    py-1
                    text-[10px]
                    font-semibold
                    text-white/50
                  "
                >
                  {hero.age}
                </span>

                <span className="text-xs text-white/40">
                  {hero.seasons}
                </span>

                <span className="text-xs text-white/40">
                  {hero.episodes}
                </span>

                <span
                  className="
                    flex
                    items-center
                    gap-1.5
                    text-xs
                    font-bold
                    text-yellow-300
                  "
                >
                  <Star
                    size={13}
                    fill="currentColor"
                  />

                  {hero.rating}
                </span>

              </motion.div>

              {/* =================================================
                 GENRE
              ================================================= */}

              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: 0.45,
                }}
                className="
                  mt-4
                  text-xs
                  font-medium
                  tracking-wide
                  text-white/30
                "
              >
                {hero.genre}
              </motion.p>

              {/* =================================================
                 DESCRIPTION
              ================================================= */}

              <motion.p
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.5,
                  duration: 0.7,
                }}
                className="
                  mt-5
                  max-w-2xl
                  text-sm
                  leading-7
                  text-white/45
                  sm:text-[15px]
                "
              >
                {hero.description}
              </motion.p>

              {/* =================================================
                 BUTTONS
              ================================================= */}

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
                  delay: 0.65,
                  duration: 0.7,
                }}
                className="
                  mt-8
                  flex
                  flex-wrap
                  gap-3
                "
              >

                {/* WATCH NOW */}

                <motion.button
                  whileHover={{
                    scale: 1.035,
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.96,
                  }}
                  className="
                    group
                    relative
                    flex
                    items-center
                    gap-2.5
                    overflow-hidden
                    rounded-xl
                    bg-white
                    px-6
                    py-3.5
                    text-sm
                    font-bold
                    text-black
                    shadow-[0_15px_50px_rgba(255,255,255,0.10)]
                  "
                >

                  <motion.div
                    animate={{
                      x: [
                        "-150%",
                        "180%",
                      ],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      repeatDelay: 4,
                    }}
                    className="
                      absolute
                      inset-y-0
                      w-10
                      rotate-12
                      bg-black/10
                      blur-md
                    "
                  />

                  <Play
                    size={16}
                    fill="currentColor"
                    className="
                      relative
                      z-10
                      transition-transform
                      group-hover:scale-110
                    "
                  />

                  <span className="relative z-10">
                    Watch Now
                  </span>

                </motion.button>

                {/* MY LIST */}

                <motion.button
                  whileHover={{
                    scale: 1.035,
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.96,
                  }}
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-xl
                    border
                    border-white/[0.10]
                    bg-white/[0.055]
                    px-5
                    py-3.5
                    text-sm
                    font-semibold
                    text-white
                    shadow-[0_10px_40px_rgba(0,0,0,0.15)]
                    backdrop-blur-2xl
                    transition
                    hover:border-purple-400/30
                    hover:bg-purple-500/[0.10]
                  "
                >

                  <Plus size={17} />

                  My List

                </motion.button>

                {/* DETAILS */}

                <motion.button
                  whileHover={{
                    scale: 1.035,
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.96,
                  }}
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-xl
                    border
                    border-white/[0.07]
                    bg-black/20
                    px-5
                    py-3.5
                    text-sm
                    font-semibold
                    text-white/65
                    backdrop-blur-2xl
                    transition
                    hover:border-white/15
                    hover:text-white
                  "
                >

                  <Info size={17} />

                  Details

                  <ArrowUpRight
                    size={14}
                    className="opacity-40"
                  />

                </motion.button>

              </motion.div>

            </motion.div>

          )}

        </AnimatePresence>

      </div>

      {/* ===================================================
          VIDEO CONTROL PANEL
      =================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          x: 30,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          delay: 1,
          duration: 0.7,
        }}
        className="
          absolute
          bottom-12
          right-6
          z-30
          flex
          items-center
          gap-2
          sm:right-10
          lg:right-16
        "
      >

        {/* CONTROL GLASS */}

        <div
          className="
            flex
            items-center
            gap-1
            rounded-2xl
            border
            border-white/[0.08]
            bg-black/25
            p-1
            shadow-[0_15px_50px_rgba(0,0,0,0.3)]
            backdrop-blur-2xl
          "
        >

          {/* PLAY */}

          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.9,
            }}
            onClick={togglePlay}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              text-white/55
              transition
              hover:bg-white/[0.06]
              hover:text-white
            "
          >

            {playing ? (
              <Pause size={15} />
            ) : (
              <Play
                size={15}
                fill="currentColor"
              />
            )}

          </motion.button>

          {/* DIVIDER */}

          <div className="h-5 w-px bg-white/[0.08]" />

          {/* SOUND */}

          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.9,
            }}
            onClick={toggleMute}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              text-white/55
              transition
              hover:bg-white/[0.06]
              hover:text-white
            "
          >

            {muted ? (
              <VolumeX size={16} />
            ) : (
              <Volume2 size={16} />
            )}

          </motion.button>

        </div>

      </motion.div>

      {/* ===================================================
          VIDEO PROGRESS
      =================================================== */}

      <div
        className="
          absolute
          bottom-7
          left-6
          right-6
          z-30
          sm:left-10
          sm:right-10
          lg:left-16
          lg:right-16
          xl:left-20
          xl:right-20
        "
      >

        <div
          className="
            relative
            h-[2px]
            w-full
            overflow-hidden
            rounded-full
            bg-white/[0.10]
          "
        >

          <motion.div
            className="
              absolute
              left-0
              top-0
              h-full
              rounded-full
              bg-gradient-to-r
              from-purple-600
              via-fuchsia-400
              to-white
            "
            style={{
              width: `${progress}%`,
            }}
          />

        </div>

        <div className="
          mt-2
          flex
          items-center
          justify-between
        ">

          <span
            className="
              text-[8px]
              font-bold
              uppercase
              tracking-[3px]
              text-white/20
            "
          >
            Amitverse Premiere
          </span>

          <span
            className="
              text-[8px]
              font-bold
              uppercase
              tracking-[2px]
              text-white/20
            "
          >
            Preview
          </span>

        </div>

      </div>

      {/* ===================================================
          SCROLL INDICATOR
      =================================================== */}

      <motion.div
        animate={{
          y: [0, 8, 0],
          opacity: [0.2, 0.65, 0.2],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-14
          left-1/2
          z-30
          hidden
          -translate-x-1/2
          text-white/30
          sm:block
        "
      >
        <ChevronDown size={18} />
      </motion.div>

      {/* ===================================================
          SUBTLE TOP LIGHT
      =================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          z-30
          h-px
          w-[35%]
          -translate-x-1/2
          bg-gradient-to-r
          from-transparent
          via-purple-400/40
          to-transparent
          shadow-[0_0_20px_rgba(168,85,247,0.5)]
        "
      />

    </section>
  );
}

export default Hero;
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Plus,
  Star,
  ChevronRight,
  Volume2,
  VolumeX,
} from "lucide-react";

/* =========================================================
   DEMO TRENDING DATA

   Later this data will come from your MERN API.
   ========================================================= */

const trendingAnime = [
  {
    id: 1,

    rank: "01",

    title: "Solo Leveling",

    year: "2024",

    rating: "9.8",

    genre: "Action • Fantasy",

    episodes: "12 Episodes",

    type: "TV",

    image:
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1000&q=85",

    video:
      "https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4",

    description:
      "A weak hunter discovers a mysterious system that allows him to become stronger beyond every limit.",
  },

  {
    id: 2,

    rank: "02",

    title: "Demon Slayer",

    year: "2024",

    rating: "9.7",

    genre: "Action • Adventure",

    episodes: "11 Episodes",

    type: "TV",

    image:
      "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=1000&q=85",

    video:
      "https://cdn.coverr.co/videos/coverr-a-man-walking-in-a-city-1575/1080p.mp4",

    description:
      "Tanjiro continues his journey to protect humanity while searching for a way to save his sister.",
  },

  {
    id: 3,

    rank: "03",

    title: "Jujutsu Kaisen",

    year: "2023",

    rating: "9.6",

    genre: "Dark Fantasy",

    episodes: "23 Episodes",

    type: "TV",

    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=85",

    video:
      "https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4",

    description:
      "Yuji Itadori enters the world of cursed spirits and powerful sorcerers.",
  },

  {
    id: 4,

    rank: "04",

    title: "Attack on Titan",

    year: "2023",

    rating: "9.9",

    genre: "Action • Drama",

    episodes: "Final Season",

    type: "TV",

    image:
      "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?auto=format&fit=crop&w=1000&q=85",

    video:
      "https://cdn.coverr.co/videos/coverr-a-man-walking-in-a-city-1575/1080p.mp4",

    description:
      "Humanity fights for survival as the truth behind the Titans begins to unfold.",
  },

  {
    id: 5,

    rank: "05",

    title: "One Piece",

    year: "2024",

    rating: "9.5",

    genre: "Adventure • Fantasy",

    episodes: "1100+ Episodes",

    type: "TV",

    image:
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1000&q=85",

    video:
      "https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4",

    description:
      "Luffy and his crew continue their legendary journey across the Grand Line.",
  },

  {
    id: 6,

    rank: "06",

    title: "Chainsaw Man",

    year: "2022",

    rating: "9.3",

    genre: "Action • Horror",

    episodes: "12 Episodes",

    type: "TV",

    image:
      "https://images.unsplash.com/photo-1534791547706-ef6b8f6f7c4c?auto=format&fit=crop&w=1000&q=85",

    video:
      "https://cdn.coverr.co/videos/coverr-a-man-walking-in-a-city-1575/1080p.mp4",

    description:
      "A young devil hunter becomes something far more dangerous after a mysterious transformation.",
  },
];

/* =========================================================
   ANIME CARD
   ========================================================= */

function AnimeCard({ anime, index }) {
  const videoRef = useRef(null);

  const [hovered, setHovered] = useState(false);

  const [muted, setMuted] = useState(true);

  const [videoLoaded, setVideoLoaded] = useState(false);

  /* =======================================================
     MOUSE ENTER
     ======================================================= */

  const handleMouseEnter = () => {
    setHovered(true);

    if (videoRef.current) {
      videoRef.current.currentTime = 0;

      videoRef.current.play().catch(() => {});
    }
  };

  /* =======================================================
     MOUSE LEAVE
     ======================================================= */

  const handleMouseLeave = () => {
    setHovered(false);

    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  /* =======================================================
     SOUND
     ======================================================= */

  const toggleMute = (event) => {
    event.stopPropagation();

    setMuted((previous) => !previous);

    if (videoRef.current) {
      videoRef.current.muted = !muted;
    }
  };

  return (
    <motion.div
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
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        group
        relative
        flex
        w-[250px]
        shrink-0
        cursor-pointer
        flex-col
        sm:w-[270px]
        lg:w-[290px]
      "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >

      {/* ===================================================
          CARD
      =================================================== */}

      <motion.div
        animate={{
          y: hovered ? -8 : 0,
        }}
        transition={{
          duration: 0.35,
          ease: "easeOut",
        }}
        className="
          relative
          h-[350px]
          overflow-hidden
          rounded-2xl
          border
          border-white/[0.07]
          bg-[#08080c]
          shadow-[0_20px_60px_rgba(0,0,0,0.35)]
          sm:h-[375px]
          lg:h-[395px]
        "
      >

        {/* =================================================
            POSTER
        ================================================= */}

        <motion.img
          src={anime.image}
          alt={anime.title}
          animate={{
            scale: hovered ? 1.08 : 1,
            opacity:
              hovered && videoLoaded ? 0 : 1,
          }}
          transition={{
            duration: 0.7,
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

        {/* =================================================
            VIDEO PREVIEW
        ================================================= */}

        <video
          ref={videoRef}
          src={anime.video}
          muted={muted}
          loop
          playsInline
          preload="metadata"
          onCanPlay={() => setVideoLoaded(true)}
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
          "
        />

        {/* =================================================
            VIDEO DARK OVERLAY
        ================================================= */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black
            via-black/10
            to-transparent
          "
        />

        {/* =================================================
            TOP GRADIENT
        ================================================= */}

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
            RANK
        ================================================= */}

        <div
          className="
            absolute
            left-4
            top-4
            z-20
            flex
            items-center
            gap-2
          "
        >

          <span
            className="
              text-3xl
              font-black
              italic
              tracking-[-2px]
              text-white/90
              drop-shadow-[0_4px_15px_rgba(0,0,0,0.7)]
            "
          >
            {anime.rank}
          </span>

          <span
            className="
              h-6
              w-px
              bg-white/20
            "
          />

          <span
            className="
              rounded-md
              border
              border-white/10
              bg-black/30
              px-2
              py-1
              text-[9px]
              font-bold
              uppercase
              tracking-wider
              text-white/60
              backdrop-blur-xl
            "
          >
            {anime.type}
          </span>

        </div>

        {/* =================================================
            RATING
        ================================================= */}

        <div
          className="
            absolute
            right-4
            top-4
            z-20
            flex
            items-center
            gap-1.5
            rounded-full
            border
            border-white/10
            bg-black/30
            px-2.5
            py-1.5
            backdrop-blur-xl
          "
        >

          <Star
            size={11}
            fill="currentColor"
            className="text-yellow-300"
          />

          <span
            className="
              text-[10px]
              font-bold
              text-white
            "
          >
            {anime.rating}
          </span>

        </div>

        {/* =================================================
            CENTER PLAY
        ================================================= */}

        <AnimatePresence>

          {hovered && (

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.7,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.7,
              }}
              className="
                absolute
                inset-0
                z-20
                flex
                items-center
                justify-center
              "
            >

              <motion.div
                whileHover={{
                  scale: 1.1,
                }}
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/20
                  bg-white/10
                  text-white
                  shadow-[0_0_50px_rgba(168,85,247,0.35)]
                  backdrop-blur-xl
                "
              >

                <Play
                  size={20}
                  fill="currentColor"
                  className="ml-0.5"
                />

              </motion.div>

            </motion.div>

          )}

        </AnimatePresence>

        {/* =================================================
            SOUND
        ================================================= */}

        <AnimatePresence>

          {hovered && (

            <motion.button
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.8,
              }}
              onClick={toggleMute}
              className="
                absolute
                bottom-20
                right-4
                z-30
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-black/40
                text-white/70
                backdrop-blur-xl
                transition
                hover:bg-purple-500/20
                hover:text-white
              "
            >

              {muted ? (
                <VolumeX size={14} />
              ) : (
                <Volume2 size={14} />
              )}

            </motion.button>

          )}

        </AnimatePresence>

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

          <div
            className="
              mb-2
              flex
              items-center
              gap-2
              text-[10px]
              text-white/40
            "
          >

            <span>{anime.year}</span>

            <span className="text-white/20">
              •
            </span>

            <span>{anime.episodes}</span>

          </div>

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

          <p
            className="
              mt-1
              text-[10px]
              font-medium
              text-white/35
            "
          >
            {anime.genre}
          </p>

        </div>

        {/* =================================================
            PURPLE HOVER LIGHT
        ================================================= */}

        <motion.div
          animate={{
            opacity: hovered ? 0.35 : 0,
          }}
          className="
            pointer-events-none
            absolute
            bottom-0
            left-1/2
            h-32
            w-48
            -translate-x-1/2
            rounded-full
            bg-purple-600/30
            blur-[70px]
          "
        />

      </motion.div>

      {/* ===================================================
          BELOW CARD
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
            gap-2
          "
        >

          <span
            className="
              h-1.5
              w-1.5
              rounded-full
              bg-purple-400
              shadow-[0_0_10px_rgba(168,85,247,0.8)]
            "
          />

          <span
            className="
              text-[9px]
              font-bold
              uppercase
              tracking-[2px]
              text-white/25
            "
          >
            Trending
          </span>

        </div>

        <motion.button
          whileHover={{
            scale: 1.12,
          }}
          whileTap={{
            scale: 0.9,
          }}
          className="
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-full
            border
            border-white/[0.07]
            bg-white/[0.03]
            text-white/30
            transition
            hover:border-purple-400/30
            hover:bg-purple-500/10
            hover:text-purple-300
          "
        >

          <Plus size={14} />

        </motion.button>

      </div>

    </motion.div>
  );
}

/* =========================================================
   MAIN COMPONENT
   ========================================================= */

function TrendingAnime() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#020203]
        py-24
        sm:py-28
        lg:py-32
      "
    >

      {/* ===================================================
          BACKGROUND GLOW
      =================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-[-250px]
          top-[10%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-purple-700/10
          blur-[150px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[-250px]
          bottom-[5%]
          h-[500px]
          w-[500px]
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
            SECTION HEADER
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
            amount: 0.3,
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

            {/* SMALL LABEL */}

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
                Explore Now
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
              Trending Anime
            </h2>

            {/* SUBTITLE */}

            <p
              className="
                mt-3
                max-w-lg
                text-xs
                leading-6
                text-white/30
                sm:text-sm
              "
            >
              Discover what the Amitverse community
              is watching right now.
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
              text-white/40
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
            CARDS
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

          {trendingAnime.map(
            (anime, index) => (
              <AnimeCard
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

export default TrendingAnime;
import { motion } from "framer-motion";
import {
  Play,
  X,
  Heart,
  Star,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function WatchlistCard({
  item,
  onRemove,
}) {
  const navigate = useNavigate();

  const handleWatch = () => {
    if (item.type === "movie") {
      navigate(`/watch/movie/${item.id}`);
      return;
    }

    navigate(`/watch/${item.episode || 1}`);
  };

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 25,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        scale: 0.95,
      }}
      transition={{
        duration: 0.45,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-white/[0.07]
        bg-white/[0.025]
        shadow-[0_20px_60px_rgba(0,0,0,0.3)]
        transition
        duration-500
        hover:-translate-y-1
        hover:border-purple-500/30
      "
    >
      {/* =================================================
          POSTER
      ================================================= */}

      <div
        className="
          relative
          aspect-[16/10]
          overflow-hidden
          bg-[#09090d]
        "
      >
        <motion.img
          src={item.image}
          alt={item.title}
          animate={{
            scale: 1,
          }}
          whileHover={{
            scale: 1.06,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
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
            from-black/90
            via-black/10
            to-black/10
          "
        />

        {/* =================================================
            TYPE
        ================================================= */}

        <div
          className="
            absolute
            left-3
            top-3
            rounded-md
            border
            border-white/10
            bg-black/50
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
          {item.type || "anime"}
        </div>

        {/* =================================================
            REMOVE
        ================================================= */}

        <button
          onClick={() => onRemove(item.id)}
          className="
            absolute
            right-3
            top-3
            z-20
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-black/50
            text-white/60
            opacity-0
            backdrop-blur-xl
            transition
            duration-300
            hover:bg-red-500/20
            hover:text-red-300
            group-hover:opacity-100
          "
          title="Remove from Watchlist"
        >
          <X size={15} />
        </button>

        {/* =================================================
            PLAY
        ================================================= */}

        <button
          onClick={handleWatch}
          className="
            absolute
            left-1/2
            top-1/2
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
            bg-purple-600/90
            text-white
            opacity-0
            shadow-[0_0_50px_rgba(139,92,246,0.45)]
            backdrop-blur-xl
            transition
            duration-300
            hover:scale-110
            group-hover:opacity-100
          "
        >
          <Play
            size={19}
            fill="currentColor"
            className="ml-0.5"
          />
        </button>

        {/* =================================================
            RATING
        ================================================= */}

        <div
          className="
            absolute
            bottom-3
            right-3
            flex
            items-center
            gap-1
            text-[10px]
            font-semibold
            text-white/70
          "
        >
          <Star
            size={12}
            fill="currentColor"
            className="text-purple-400"
          />

          {item.rating || "4.8"}
        </div>
      </div>

      {/* =================================================
          CONTENT
      ================================================= */}

      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3
              className="
                truncate
                text-base
                font-bold
                tracking-tight
                text-white
                transition
                group-hover:text-purple-200
              "
            >
              {item.title}
            </h3>

            <p
              className="
                mt-1.5
                truncate
                text-[10px]
                font-medium
                text-white/30
              "
            >
              {item.subtitle || "Premium Anime"}

              {item.year && (
                <>
                  <span className="mx-2 text-white/10">
                    •
                  </span>

                  {item.year}
                </>
              )}
            </p>
          </div>

          <Heart
            size={17}
            fill="currentColor"
            className="shrink-0 text-purple-400"
          />
        </div>

        {/* WATCH BUTTON */}

        <button
          onClick={handleWatch}
          className="
            mt-4
            flex
            w-full
            items-center
            justify-center
            gap-2
            rounded-xl
            border
            border-white/10
            bg-white/[0.04]
            px-4
            py-2.5
            text-xs
            font-semibold
            text-white/70
            transition
            hover:border-purple-500/30
            hover:bg-purple-500/10
            hover:text-purple-200
          "
        >
          <Play
            size={13}
            fill="currentColor"
          />

          Watch Now
        </button>
      </div>
    </motion.article>
  );
}
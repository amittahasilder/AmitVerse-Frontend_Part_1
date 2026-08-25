import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Maximize,
  Pause,
  Play,
  Volume2,
  VolumeX,
} from "lucide-react";

/* =========================================================
   STORAGE
========================================================= */

const STORAGE_KEY = "amitverse_continue_watching";

/* =========================================================
   EPISODES
========================================================= */

const episodes = [
  {
    id: 1,
    title: "Episode 1",
    duration: "24:12",
    video:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  },
  {
    id: 2,
    title: "Episode 2",
    duration: "23:48",
    video:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  },
  {
    id: 3,
    title: "Episode 3",
    duration: "24:35",
    video:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  },
  {
    id: 4,
    title: "Episode 4",
    duration: "25:10",
    video:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  },
];

/* =========================================================
   ANIME INFO
========================================================= */

const animeInfo = {
  title: "Demon Slayer",
  subtitle: "Kimetsu no Yaiba",
  season: "Season 1",
  description:
    "Tanjiro Kamado begins his journey to become a Demon Slayer after a tragic event changes his life forever.",
};

/* =========================================================
   HELPER
========================================================= */

const getStorageItems = () => {
  try {
    const stored = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || "[]"
    );

    return Array.isArray(stored) ? stored : [];
  } catch (error) {
    console.error(
      "Failed to read watch history:",
      error
    );

    return [];
  }
};

/* =========================================================
   WATCH PAGE
========================================================= */

export default function Watch() {
  const { id } = useParams();

  const navigate = useNavigate();

  const videoRef = useRef(null);

  const playerRef = useRef(null);

  const currentEpisodeNumber = Number(id) || 1;

  const [currentEpisode, setCurrentEpisode] = useState(
    currentEpisodeNumber
  );

  const [isPlaying, setIsPlaying] = useState(false);

  const [isMuted, setIsMuted] = useState(false);

  const [progress, setProgress] = useState(0);

  const [volume, setVolume] = useState(1);

  /* =======================================================
     CURRENT EPISODE
  ======================================================= */

  const episode =
    episodes.find(
      (item) => item.id === currentEpisode
    ) || episodes[0];

  /* =======================================================
     WATCH ITEM ID
  ======================================================= */

  const watchItemId = `${animeInfo.title}-${currentEpisode}`;

  /* =======================================================
     SYNC URL EPISODE
  ======================================================= */

  useEffect(() => {
    setCurrentEpisode(currentEpisodeNumber);
  }, [currentEpisodeNumber]);

  /* =======================================================
     VIDEO EVENTS
  ======================================================= */

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const handleTimeUpdate = () => {
      if (!video.duration) return;

      const percentage =
        (video.currentTime / video.duration) * 100;

      setProgress(percentage);
    };

    const handlePlay = () => {
      setIsPlaying(true);
    };

    const handlePause = () => {
      setIsPlaying(false);
    };

    const handleEnded = () => {
      setIsPlaying(false);

      setProgress(100);

      removeCurrentWatchItem();
    };

    video.addEventListener(
      "timeupdate",
      handleTimeUpdate
    );

    video.addEventListener(
      "play",
      handlePlay
    );

    video.addEventListener(
      "pause",
      handlePause
    );

    video.addEventListener(
      "ended",
      handleEnded
    );

    return () => {
      video.removeEventListener(
        "timeupdate",
        handleTimeUpdate
      );

      video.removeEventListener(
        "play",
        handlePlay
      );

      video.removeEventListener(
        "pause",
        handlePause
      );

      video.removeEventListener(
        "ended",
        handleEnded
      );
    };
  }, [episode]);

  /* =======================================================
     RESTORE PREVIOUS PROGRESS
  ======================================================= */

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const restoreProgress = () => {
      const savedItems = getStorageItems();

      const savedItem = savedItems.find(
        (item) => item.id === watchItemId
      );

      if (!savedItem) return;

      if (
        savedItem.currentTime > 5 &&
        savedItem.duration > 0 &&
        savedItem.currentTime <
          savedItem.duration - 10
      ) {
        video.currentTime =
          savedItem.currentTime;

        setProgress(
          (savedItem.currentTime /
            savedItem.duration) *
            100
        );
      }
    };

    video.addEventListener(
      "loadedmetadata",
      restoreProgress
    );

    return () => {
      video.removeEventListener(
        "loadedmetadata",
        restoreProgress
      );
    };
  }, [watchItemId, episode.video]);

  /* =======================================================
     SAVE WATCH PROGRESS
  ======================================================= */

  const saveWatchProgress = () => {
    const video = videoRef.current;

    if (!video) return;

    if (!video.duration) return;

    if (video.currentTime < 5) return;

    /* ---------------------------------------------
       If video is almost finished,
       remove it from Continue Watching.
    --------------------------------------------- */

    if (
      video.currentTime >=
      video.duration - 10
    ) {
      removeCurrentWatchItem();

      return;
    }

    const watchItem = {
      id: watchItemId,

      title: animeInfo.title,

      subtitle: animeInfo.subtitle,

      season: animeInfo.season,

      episode: currentEpisode,

      episodeTitle: episode.title,

      currentTime: video.currentTime,

      duration: video.duration,

      thumbnail:
        "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1200&q=85",

      updatedAt: Date.now(),
    };

    const existingItems =
      getStorageItems();

    /* ---------------------------------------------
       Remove previous version
    --------------------------------------------- */

    const filteredItems =
      existingItems.filter(
        (item) =>
          item.id !== watchItem.id
      );

    /* ---------------------------------------------
       Put newest item first
    --------------------------------------------- */

    const updatedItems = [
      watchItem,
      ...filteredItems,
    ].slice(0, 10);

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(updatedItems)
    );

    /* ---------------------------------------------
       Notify ContinueWatching component
    --------------------------------------------- */

    window.dispatchEvent(
      new Event(
        "amitverse-watch-progress"
      )
    );
  };

  /* =======================================================
     REMOVE CURRENT WATCH ITEM
  ======================================================= */

  const removeCurrentWatchItem = () => {
    const existingItems =
      getStorageItems();

    const updatedItems =
      existingItems.filter(
        (item) =>
          item.id !== watchItemId
      );

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(updatedItems)
    );

    window.dispatchEvent(
      new Event(
        "amitverse-watch-progress"
      )
    );
  };

  /* =======================================================
     AUTO SAVE EVERY 5 SECONDS
  ======================================================= */

  useEffect(() => {
    const interval = setInterval(() => {
      saveWatchProgress();
    }, 5000);

    return () => {
      clearInterval(interval);

      saveWatchProgress();
    };
  }, [
    currentEpisode,
    episode.video,
  ]);

  /* =======================================================
     PLAY / PAUSE
  ======================================================= */

  const togglePlay = async () => {
    const video = videoRef.current;

    if (!video) return;

    try {
      if (video.paused) {
        await video.play();
      } else {
        video.pause();

        saveWatchProgress();
      }
    } catch (error) {
      console.error(
        "Video playback failed:",
        error
      );
    }
  };

  /* =======================================================
     VOLUME
  ======================================================= */

  const toggleMute = () => {
    const video = videoRef.current;

    if (!video) return;

    video.muted = !video.muted;

    setIsMuted(video.muted);
  };

  const handleVolume = (e) => {
    const value = Number(
      e.target.value
    );

    const video = videoRef.current;

    if (!video) return;

    video.volume = value;

    setVolume(value);

    if (value === 0) {
      video.muted = true;

      setIsMuted(true);
    } else {
      video.muted = false;

      setIsMuted(false);
    }
  };

  /* =======================================================
     PROGRESS SEEK
  ======================================================= */

  const handleSeek = (e) => {
    const value = Number(
      e.target.value
    );

    const video = videoRef.current;

    if (!video || !video.duration)
      return;

    video.currentTime =
      (value / 100) *
      video.duration;

    setProgress(value);
  };

  /* =======================================================
     FULLSCREEN
  ======================================================= */

  const toggleFullscreen = async () => {
    const player =
      playerRef.current;

    if (!player) return;

    try {
      if (!document.fullscreenElement) {
        await player.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (error) {
      console.error(
        "Fullscreen failed:",
        error
      );
    }
  };

  /* =======================================================
     EPISODE CHANGE
  ======================================================= */

  const changeEpisode = (
    episodeNumber
  ) => {
    if (
      episodeNumber < 1 ||
      episodeNumber > episodes.length
    ) {
      return;
    }

    /* Save previous episode */

    saveWatchProgress();

    setCurrentEpisode(
      episodeNumber
    );

    navigate(
      `/watch/${episodeNumber}`
    );

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {/* =================================================
          TOP NAVIGATION
      ================================================= */}

      <div className="sticky top-0 z-50 border-b border-white/10 bg-[#050505]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-4 md:px-8">
          <button
            onClick={() => {
              saveWatchProgress();

              navigate(-1);
            }}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              border
              border-white/10
              bg-white/5
              transition
              hover:border-purple-500/40
              hover:bg-purple-500/10
            "
          >
            <ArrowLeft size={20} />
          </button>

          <div>
            <p className="text-sm font-semibold text-white">
              {animeInfo.title}
            </p>

            <p className="text-xs text-gray-500">
              {animeInfo.season} •{" "}
              {episode.title}
            </p>
          </div>
        </div>
      </div>

      {/* =================================================
          MAIN
      ================================================= */}

      <main className="mx-auto max-w-7xl px-4 py-6 md:px-8">
        {/* =================================================
            VIDEO PLAYER
        ================================================= */}

        <section
          ref={playerRef}
          className="
            group
            relative
            overflow-hidden
            rounded-2xl
            border
            border-white/10
            bg-black
            shadow-2xl
            shadow-purple-950/20
          "
        >
          <video
            ref={videoRef}
            key={episode.video}
            src={episode.video}
            className="
              aspect-video
              w-full
              bg-black
              object-contain
            "
            onClick={togglePlay}
            playsInline
          />

          {/* =================================================
              CENTER PLAY BUTTON
          ================================================= */}

          {!isPlaying && (
            <button
              onClick={togglePlay}
              className="
                absolute
                left-1/2
                top-1/2
                flex
                h-16
                w-16
                -translate-x-1/2
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                bg-purple-600
                shadow-xl
                shadow-purple-600/40
                transition
                hover:scale-110
              "
            >
              <Play
                size={28}
                fill="white"
                className="ml-1"
              />
            </button>
          )}

          {/* =================================================
              VIDEO CONTROLS
          ================================================= */}

          <div
            className="
              absolute
              bottom-0
              left-0
              right-0
              bg-gradient-to-t
              from-black
              via-black/80
              to-transparent
              px-4
              pb-4
              pt-16
              opacity-0
              transition
              duration-300
              group-hover:opacity-100
            "
          >
            {/* Progress */}

            <input
              type="range"
              min="0"
              max="100"
              value={progress}
              onChange={handleSeek}
              className="
                mb-4
                h-1
                w-full
                cursor-pointer
                accent-purple-500
              "
            />

            <div className="flex items-center gap-4">
              {/* Play */}

              <button
                onClick={togglePlay}
                className="
                  transition
                  hover:text-purple-400
                "
              >
                {isPlaying ? (
                  <Pause size={22} />
                ) : (
                  <Play size={22} />
                )}
              </button>

              {/* Volume */}

              <button
                onClick={toggleMute}
                className="
                  transition
                  hover:text-purple-400
                "
              >
                {isMuted ? (
                  <VolumeX size={22} />
                ) : (
                  <Volume2 size={22} />
                )}
              </button>

              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={
                  isMuted
                    ? 0
                    : volume
                }
                onChange={
                  handleVolume
                }
                className="
                  w-20
                  cursor-pointer
                  accent-purple-500
                "
              />

              <div className="flex-1" />

              {/* Fullscreen */}

              <button
                onClick={
                  toggleFullscreen
                }
                className="
                  transition
                  hover:text-purple-400
                "
              >
                <Maximize size={22} />
              </button>
            </div>
          </div>
        </section>

        {/* =================================================
            VIDEO INFORMATION
        ================================================= */}

        <section className="mt-8">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
            <div>
              <p className="mb-2 text-sm font-medium text-purple-400">
                NOW PLAYING
              </p>

              <h1 className="text-2xl font-bold md:text-4xl">
                {animeInfo.title}
              </h1>

              <p className="mt-2 text-gray-500">
                {animeInfo.subtitle} •{" "}
                {animeInfo.season}
              </p>
            </div>

            {/* Episode Navigation */}

            <div className="flex items-center gap-3">
              <button
                disabled={
                  currentEpisode <= 1
                }
                onClick={() =>
                  changeEpisode(
                    currentEpisode - 1
                  )
                }
                className="
                  flex
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-white/10
                  bg-white/5
                  px-4
                  py-3
                  text-sm
                  transition
                  hover:border-purple-500/40
                  hover:bg-purple-500/10
                  disabled:cursor-not-allowed
                  disabled:opacity-30
                "
              >
                <ChevronLeft
                  size={18}
                />

                Previous
              </button>

              <button
                disabled={
                  currentEpisode >=
                  episodes.length
                }
                onClick={() =>
                  changeEpisode(
                    currentEpisode + 1
                  )
                }
                className="
                  flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-purple-600
                  px-4
                  py-3
                  text-sm
                  font-semibold
                  transition
                  hover:bg-purple-500
                  disabled:cursor-not-allowed
                  disabled:opacity-30
                "
              >
                Next

                <ChevronRight
                  size={18}
                />
              </button>
            </div>
          </div>

          <p className="mt-5 max-w-3xl text-sm leading-7 text-gray-400">
            {animeInfo.description}
          </p>
        </section>

        {/* =================================================
            EPISODES
        ================================================= */}

        <section className="mt-12">
          <div className="mb-6">
            <h2 className="text-2xl font-bold">
              Episodes
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Select an episode to
              continue watching.
            </p>
          </div>

          <div
            className="
              grid
              grid-cols-2
              gap-3
              sm:grid-cols-3
              md:grid-cols-4
              lg:grid-cols-6
            "
          >
            {episodes.map((item) => {
              const active =
                item.id ===
                currentEpisode;

              return (
                <button
                  key={item.id}
                  onClick={() =>
                    changeEpisode(
                      item.id
                    )
                  }
                  className={`group rounded-2xl border p-4 text-left transition duration-300 ${
                    active
                      ? "border-purple-500 bg-purple-600/15 shadow-lg shadow-purple-900/20"
                      : "border-white/10 bg-white/[0.03] hover:border-purple-500/40 hover:bg-white/[0.06]"
                  }`}
                >
                  <div className="mb-4 flex items-center justify-between">
                    <span
                      className={`flex h-9 w-9 items-center justify-center rounded-lg text-sm font-bold ${
                        active
                          ? "bg-purple-600"
                          : "bg-white/10"
                      }`}
                    >
                      {item.id}
                    </span>

                    {active && (
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-purple-400">
                        Playing
                      </span>
                    )}
                  </div>

                  <p className="font-semibold">
                    {item.title}
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    {item.duration}
                  </p>
                </button>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}
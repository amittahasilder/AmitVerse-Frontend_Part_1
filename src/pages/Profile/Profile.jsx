import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  CalendarDays,
  Settings,
  Heart,
  Clock3,
  Play,
  Film,
  Tv,
  LogOut,
  ChevronRight,
  Edit3,
  ShieldCheck,
  Crown,
} from "lucide-react";

/* =========================================================
   DEMO USER DATA

   Later:
   GET /api/user/profile
   ========================================================= */

const user = {
  name: "Amit",
  username: "@amitverse",
  email: "amit@example.com",
  joined: "August 2026",
  avatar:
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=500&q=85",
};

/* =========================================================
   CONTINUE WATCHING
   ========================================================= */

const continueWatching = [
  {
    id: 1,
    title: "Solo Leveling",
    episode: "Episode 08",
    progress: 67,
    image:
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=900&q=85",
  },

  {
    id: 2,
    title: "Jujutsu Kaisen",
    episode: "Episode 19",
    progress: 46,
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=900&q=85",
  },

  {
    id: 3,
    title: "Demon Slayer",
    episode: "Episode 06",
    progress: 83,
    image:
      "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=900&q=85",
  },
];

/* =========================================================
   WATCHLIST
   ========================================================= */

const watchlist = [
  {
    id: 1,
    title: "One Piece",
    type: "Anime",
    image:
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=700&q=85",
  },

  {
    id: 2,
    title: "Chainsaw Man",
    type: "Anime",
    image:
      "https://images.unsplash.com/photo-1534791547706-ef6b8f6f7c4c?auto=format&fit=crop&w=700&q=85",
  },

  {
    id: 3,
    title: "Your Name",
    type: "Movie",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=700&q=85",
  },

  {
    id: 4,
    title: "Attack on Titan",
    type: "Anime",
    image:
      "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?auto=format&fit=crop&w=700&q=85",
  },
];

/* =========================================================
   STAT CARD
   ========================================================= */

function StatCard({
  icon: Icon,
  label,
  value,
}) {
  return (
    <motion.div
      whileHover={{
        y: -4,
      }}
      className="
        rounded-2xl
        border
        border-white/[0.07]
        bg-white/[0.025]
        p-5
        backdrop-blur-xl
      "
    >
      <div
        className="
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-xl
          border
          border-purple-400/10
          bg-purple-500/[0.08]
          text-purple-300
        "
      >
        <Icon size={18} />
      </div>

      <p
        className="
          mt-5
          text-2xl
          font-black
          text-white
        "
      >
        {value}
      </p>

      <p
        className="
          mt-1
          text-[10px]
          font-medium
          uppercase
          tracking-wider
          text-white/25
        "
      >
        {label}
      </p>
    </motion.div>
  );
}

/* =========================================================
   CONTINUE CARD
   ========================================================= */

function ContinueCard({ item }) {
  const navigate = useNavigate();

  return (
    <motion.div
      whileHover={{
        y: -5,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-white/[0.07]
        bg-white/[0.025]
      "
    >
      <div className="relative h-[170px] overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="
            h-full
            w-full
            object-cover
            transition
            duration-700
            group-hover:scale-105
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black
            via-black/30
            to-transparent
          "
        />

        <button
          onClick={() =>
            navigate(`/watch/${item.id}`)
          }
          className="
            absolute
            left-1/2
            top-1/2
            flex
            h-11
            w-11
            -translate-x-1/2
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            bg-purple-600
            opacity-0
            shadow-[0_0_30px_rgba(124,58,237,0.4)]
            transition
            group-hover:opacity-100
          "
        >
          <Play
            size={16}
            fill="white"
            className="ml-0.5"
          />
        </button>

        <div
          className="
            absolute
            bottom-0
            left-0
            right-0
            h-[3px]
            bg-white/10
          "
        >
          <div
            className="
              h-full
              bg-gradient-to-r
              from-purple-600
              to-fuchsia-400
            "
            style={{
              width: `${item.progress}%`,
            }}
          />
        </div>
      </div>

      <div className="p-4">
        <h3
          className="
            truncate
            text-sm
            font-bold
            text-white
          "
        >
          {item.title}
        </h3>

        <div
          className="
            mt-1.5
            flex
            items-center
            justify-between
          "
        >
          <p
            className="
              text-[10px]
              text-white/30
            "
          >
            {item.episode}
          </p>

          <span
            className="
              text-[10px]
              font-bold
              text-purple-300/70
            "
          >
            {item.progress}%
          </span>
        </div>
      </div>
    </motion.div>
  );
}

/* =========================================================
   WATCHLIST CARD
   ========================================================= */

function WatchlistCard({ item }) {
  const navigate = useNavigate();

  return (
    <motion.button
      whileHover={{
        y: -4,
      }}
      onClick={() =>
        navigate(`/details/${item.id}`)
      }
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-white/[0.07]
        bg-white/[0.025]
        text-left
      "
    >
      <div className="relative h-[210px] overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="
            h-full
            w-full
            object-cover
            transition
            duration-700
            group-hover:scale-105
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black
            via-black/20
            to-transparent
          "
        />

        <div
          className="
            absolute
            left-3
            top-3
            rounded-lg
            border
            border-white/10
            bg-black/40
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
          {item.type}
        </div>

        <div
          className="
            absolute
            bottom-4
            left-4
            right-4
          "
        >
          <h3
            className="
              text-sm
              font-bold
              text-white
            "
          >
            {item.title}
          </h3>
        </div>
      </div>
    </motion.button>
  );
}

/* =========================================================
   PROFILE PAGE
   ========================================================= */

export default function Profile() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] =
    useState("overview");

  const handleLogout = () => {
    /*
      STEP 26:
      Clear JWT / auth session
    */

    navigate("/login");
  };

  return (
    <div
      className="
        min-h-screen
        bg-[#020203]
        text-white
      "
    >
      {/* =================================================
          BACKGROUND
      ================================================= */}

      <div
        className="
          pointer-events-none
          fixed
          left-[-180px]
          top-[-180px]
          h-[500px]
          w-[500px]
          rounded-full
          bg-purple-700/10
          blur-[170px]
        "
      />

      <div
        className="
          pointer-events-none
          fixed
          bottom-[-200px]
          right-[-150px]
          h-[500px]
          w-[500px]
          rounded-full
          bg-indigo-700/10
          blur-[170px]
        "
      />

      {/* =================================================
          HEADER
      ================================================= */}

      <header
        className="
          sticky
          top-0
          z-50
          border-b
          border-white/[0.06]
          bg-[#020203]/75
          backdrop-blur-2xl
        "
      >
        <div
          className="
            mx-auto
            flex
            max-w-7xl
            items-center
            justify-between
            px-5
            py-4
            sm:px-8
          "
        >
          <Link
            to="/"
            className="
              text-xl
              font-black
              tracking-[-0.5px]
            "
          >
            AMIT
            <span className="text-purple-400">
              VERSE
            </span>
          </Link>

          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="
                hidden
                rounded-xl
                px-4
                py-2
                text-xs
                font-semibold
                text-white/40
                transition
                hover:bg-white/5
                hover:text-white
                sm:block
              "
            >
              Home
            </Link>

            <button
              onClick={handleLogout}
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-xl
                border
                border-white/[0.07]
                bg-white/[0.03]
                text-white/35
                transition
                hover:border-red-500/20
                hover:bg-red-500/10
                hover:text-red-300
              "
            >
              <LogOut size={16} />
            </button>
          </div>
        </div>
      </header>

      {/* =================================================
          MAIN
      ================================================= */}

      <main
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-5
          py-8
          sm:px-8
          sm:py-12
        "
      >
        {/* =================================================
            PROFILE HERO
        ================================================= */}

        <motion.section
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            relative
            overflow-hidden
            rounded-[28px]
            border
            border-white/[0.08]
            bg-gradient-to-br
            from-purple-950/30
            via-white/[0.025]
            to-transparent
            p-6
            sm:p-8
            lg:p-10
          "
        >
          {/* Decorative glow */}

          <div
            className="
              pointer-events-none
              absolute
              right-[-120px]
              top-[-180px]
              h-[400px]
              w-[400px]
              rounded-full
              bg-purple-600/15
              blur-[130px]
            "
          />

          <div
            className="
              relative
              z-10
              flex
              flex-col
              gap-7
              md:flex-row
              md:items-center
              md:justify-between
            "
          >
            <div
              className="
                flex
                flex-col
                gap-5
                sm:flex-row
                sm:items-center
              "
            >
              {/* Avatar */}

              <div className="relative">
                <div
                  className="
                    h-24
                    w-24
                    overflow-hidden
                    rounded-[26px]
                    border
                    border-purple-400/20
                    bg-purple-500/10
                    p-1
                    shadow-[0_0_50px_rgba(124,58,237,0.15)]
                  "
                >
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="
                      h-full
                      w-full
                      rounded-[21px]
                      object-cover
                    "
                  />
                </div>

                <div
                  className="
                    absolute
                    bottom-[-5px]
                    right-[-5px]
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    border-4
                    border-[#08080c]
                    bg-purple-600
                    text-white
                  "
                >
                  <Crown size={12} />
                </div>
              </div>

              {/* User info */}

              <div>
                <div
                  className="
                    flex
                    flex-wrap
                    items-center
                    gap-3
                  "
                >
                  <h1
                    className="
                      text-2xl
                      font-black
                      tracking-[-0.8px]
                      sm:text-3xl
                    "
                  >
                    {user.name}
                  </h1>

                  <span
                    className="
                      rounded-full
                      border
                      border-purple-400/15
                      bg-purple-500/10
                      px-2.5
                      py-1
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-wider
                      text-purple-300
                    "
                  >
                    Member
                  </span>
                </div>

                <p
                  className="
                    mt-1
                    text-sm
                    text-white/30
                  "
                >
                  {user.username}
                </p>

                <div
                  className="
                    mt-4
                    flex
                    flex-wrap
                    gap-x-5
                    gap-y-2
                    text-[10px]
                    text-white/25
                  "
                >
                  <span className="flex items-center gap-1.5">
                    <Mail size={12} />
                    {user.email}
                  </span>

                  <span className="flex items-center gap-1.5">
                    <CalendarDays size={12} />
                    Joined {user.joined}
                  </span>
                </div>
              </div>
            </div>

            {/* Edit */}

            <button
              className="
                flex
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-white/[0.08]
                bg-white/[0.03]
                px-4
                py-3
                text-xs
                font-semibold
                text-white/50
                transition
                hover:border-purple-500/30
                hover:bg-purple-500/10
                hover:text-purple-300
              "
            >
              <Edit3 size={14} />
              Edit Profile
            </button>
          </div>
        </motion.section>

        {/* =================================================
            STATS
        ================================================= */}

        <section
          className="
            mt-6
            grid
            grid-cols-2
            gap-3
            lg:grid-cols-4
          "
        >
          <StatCard
            icon={Clock3}
            label="Watched"
            value="24h"
          />

          <StatCard
            icon={Heart}
            label="Favorites"
            value="18"
          />

          <StatCard
            icon={Play}
            label="In Progress"
            value="07"
          />

          <StatCard
            icon={Film}
            label="Completed"
            value="32"
          />
        </section>

        {/* =================================================
            TABS
        ================================================= */}

        <div
          className="
            mt-10
            flex
            gap-2
            overflow-x-auto
            border-b
            border-white/[0.06]
            pb-1
          "
        >
          {[
            {
              id: "overview",
              label: "Overview",
              icon: User,
            },
            {
              id: "watchlist",
              label: "Watchlist",
              icon: Heart,
            },
            {
              id: "history",
              label: "History",
              icon: Clock3,
            },
            {
              id: "settings",
              label: "Settings",
              icon: Settings,
            },
          ].map((tab) => {
            const Icon = tab.icon;

            const active =
              activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() =>
                  setActiveTab(tab.id)
                }
                className={`
                  flex
                  shrink-0
                  items-center
                  gap-2
                  border-b-2
                  px-4
                  pb-3
                  text-xs
                  font-semibold
                  transition
                  ${
                    active
                      ? "border-purple-500 text-purple-300"
                      : "border-transparent text-white/25 hover:text-white/60"
                  }
                `}
              >
                <Icon size={14} />

                {tab.label}
              </button>
            );
          })}
        </div>

        {/* =================================================
            OVERVIEW
        ================================================= */}

        {activeTab === "overview" && (
          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="mt-8"
          >
            {/* Continue */}

            <section>
              <div
                className="
                  mb-5
                  flex
                  items-end
                  justify-between
                "
              >
                <div>
                  <p
                    className="
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[3px]
                      text-purple-300/60
                    "
                  >
                    Pick up where you left off
                  </p>

                  <h2
                    className="
                      mt-2
                      text-2xl
                      font-black
                    "
                  >
                    Continue Watching
                  </h2>
                </div>

                <Link
                  to="/"
                  className="
                    hidden
                    items-center
                    gap-1
                    text-xs
                    text-white/25
                    transition
                    hover:text-purple-300
                    sm:flex
                  "
                >
                  View all
                  <ChevronRight size={14} />
                </Link>
              </div>

              <div
                className="
                  grid
                  gap-4
                  md:grid-cols-2
                  lg:grid-cols-3
                "
              >
                {continueWatching.map(
                  (item) => (
                    <ContinueCard
                      key={item.id}
                      item={item}
                    />
                  )
                )}
              </div>
            </section>

            {/* Watchlist */}

            <section className="mt-12">
              <div
                className="
                  mb-5
                  flex
                  items-end
                  justify-between
                "
              >
                <div>
                  <p
                    className="
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[3px]
                      text-purple-300/60
                    "
                  >
                    Your collection
                  </p>

                  <h2
                    className="
                      mt-2
                      text-2xl
                      font-black
                    "
                  >
                    My Watchlist
                  </h2>
                </div>

                <button
                  onClick={() =>
                    setActiveTab(
                      "watchlist"
                    )
                  }
                  className="
                    hidden
                    items-center
                    gap-1
                    text-xs
                    text-white/25
                    transition
                    hover:text-purple-300
                    sm:flex
                  "
                >
                  View all
                  <ChevronRight size={14} />
                </button>
              </div>

              <div
                className="
                  grid
                  grid-cols-2
                  gap-4
                  sm:grid-cols-3
                  lg:grid-cols-4
                "
              >
                {watchlist.map(
                  (item) => (
                    <WatchlistCard
                      key={item.id}
                      item={item}
                    />
                  )
                )}
              </div>
            </section>
          </motion.div>
        )}

        {/* =================================================
            WATCHLIST TAB
        ================================================= */}

        {activeTab === "watchlist" && (
          <motion.section
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="mt-8"
          >
            <div className="mb-6">
              <p
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[3px]
                  text-purple-300/60
                "
              >
                Saved for later
              </p>

              <h2
                className="
                  mt-2
                  text-2xl
                  font-black
                "
              >
                My Watchlist
              </h2>
            </div>

            <div
              className="
                grid
                grid-cols-2
                gap-4
                sm:grid-cols-3
                lg:grid-cols-4
              "
            >
              {watchlist.map(
                (item) => (
                  <WatchlistCard
                    key={item.id}
                    item={item}
                  />
                )
              )}
            </div>
          </motion.section>
        )}

        {/* =================================================
            HISTORY TAB
        ================================================= */}

        {activeTab === "history" && (
          <motion.section
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="mt-8"
          >
            <div
              className="
                rounded-2xl
                border
                border-white/[0.07]
                bg-white/[0.025]
                p-8
                text-center
              "
            >
              <div
                className="
                  mx-auto
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-purple-500/10
                  text-purple-300
                "
              >
                <Clock3 size={22} />
              </div>

              <h2
                className="
                  mt-5
                  text-xl
                  font-bold
                "
              >
                Watch History
              </h2>

              <p
                className="
                  mx-auto
                  mt-2
                  max-w-md
                  text-xs
                  leading-6
                  text-white/25
                "
              >
                Your complete watch history
                will appear here.
              </p>

              <p
                className="
                  mt-4
                  text-[10px]
                  uppercase
                  tracking-wider
                  text-purple-300/40
                "
              >
                Backend integration → STEP 30
              </p>
            </div>
          </motion.section>
        )}

        {/* =================================================
            SETTINGS TAB
        ================================================= */}

        {activeTab === "settings" && (
          <motion.section
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="mt-8"
          >
            <div
              className="
                overflow-hidden
                rounded-2xl
                border
                border-white/[0.07]
                bg-white/[0.025]
              "
            >
              {/* Account */}

              <div
                className="
                  flex
                  items-center
                  justify-between
                  border-b
                  border-white/[0.06]
                  p-5
                "
              >
                <div>
                  <p className="text-sm font-semibold">
                    Account Information
                  </p>

                  <p className="mt-1 text-xs text-white/25">
                    Manage your personal information.
                  </p>
                </div>

                <User
                  size={18}
                  className="text-white/20"
                />
              </div>

              {/* Security */}

              <div
                className="
                  flex
                  items-center
                  justify-between
                  border-b
                  border-white/[0.06]
                  p-5
                "
              >
                <div>
                  <p className="text-sm font-semibold">
                    Security
                  </p>

                  <p className="mt-1 text-xs text-white/25">
                    Password and authentication settings.
                  </p>
                </div>

                <ShieldCheck
                  size={18}
                  className="text-white/20"
                />
              </div>

              {/* Logout */}

              <button
                onClick={handleLogout}
                className="
                  flex
                  w-full
                  items-center
                  justify-between
                  p-5
                  text-left
                  transition
                  hover:bg-red-500/[0.04]
                "
              >
                <div>
                  <p className="text-sm font-semibold text-red-300">
                    Sign out
                  </p>

                  <p className="mt-1 text-xs text-white/25">
                    Sign out from this device.
                  </p>
                </div>

                <LogOut
                  size={18}
                  className="text-red-300/50"
                />
              </button>
            </div>
          </motion.section>
        )}
      </main>
    </div>
  );
}
function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const exploreLinks = [
    "Home",
    "Trending",
    "Latest Releases",
    "Movies",
    "Anime",
    "Genres",
  ];

  const accountLinks = [
    "Sign In",
    "Create Account",
    "My Profile",
    "My List",
    "Watch History",
    "Settings",
  ];

  const supportLinks = [
    "Help Center",
    "Contact Us",
    "Privacy Policy",
    "Terms of Service",
    "Cookie Policy",
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] bg-[#010102]">

      {/* =====================================================
          BACKGROUND GLOW
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-0
          h-[350px]
          w-[350px]
          rounded-full
          bg-purple-700/[0.08]
          blur-[130px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-0
          top-1/3
          h-[350px]
          w-[350px]
          rounded-full
          bg-indigo-700/[0.07]
          blur-[130px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-1/2
          h-[250px]
          w-[600px]
          -translate-x-1/2
          rounded-full
          bg-purple-700/[0.04]
          blur-[120px]
        "
      />

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1600px]
          px-6
          py-16
          sm:px-10
          lg:px-16
          lg:py-20
          xl:px-20
        "
      >

        {/* ===================================================
            TOP FOOTER
        =================================================== */}

        <div
          className="
            grid
            gap-12
            lg:grid-cols-[1.5fr_1fr_1fr_1fr]
          "
        >

          {/* =================================================
              BRAND
          ================================================= */}

          <div className="max-w-md">

            {/* LOGO */}

            <div className="group flex items-center gap-3">

              <div
                className="
                  relative
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-xl
                  border
                  border-purple-400/20
                  bg-purple-500/10
                  shadow-[0_0_35px_rgba(139,92,246,0.15)]
                  transition
                  duration-500
                  group-hover:border-purple-400/40
                  group-hover:bg-purple-500/20
                "
              >

                {/* LOGO SYMBOL */}

                <span
                  className="
                    text-lg
                    font-black
                    text-purple-300
                    transition
                    duration-500
                    group-hover:scale-110
                    group-hover:text-purple-200
                  "
                >
                  A
                </span>

                {/* GLOW */}

                <span
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    rounded-xl
                    bg-purple-500/10
                    opacity-0
                    blur-xl
                    transition
                    duration-500
                    group-hover:opacity-100
                  "
                />

              </div>

              <div>

                <h2
                  className="
                    text-lg
                    font-black
                    tracking-tight
                    text-white
                  "
                >
                  AMITVERSE
                </h2>

                <p
                  className="
                    mt-0.5
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[3px]
                    text-purple-300/50
                  "
                >
                  Beyond Imagination
                </p>

              </div>

            </div>

            {/* DESCRIPTION */}

            <p
              className="
                mt-6
                max-w-sm
                text-xs
                leading-7
                text-white/30
              "
            >
              A cinematic universe for anime and movie
              lovers. Discover stories, explore new worlds,
              and continue your journey.
            </p>

            {/* =================================================
                SOCIAL BUTTONS
            ================================================= */}

            <div className="mt-7 flex items-center gap-2">

              {[
                {
                  label: "GH",
                  name: "GitHub",
                },
                {
                  label: "X",
                  name: "Twitter",
                },
                {
                  label: "IG",
                  name: "Instagram",
                },
                {
                  label: "YT",
                  name: "YouTube",
                },
              ].map((social) => (

                <button
                  key={social.name}
                  type="button"
                  aria-label={social.name}
                  className="
                    group
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/[0.07]
                    bg-white/[0.02]
                    text-[9px]
                    font-bold
                    text-white/30
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-purple-400/30
                    hover:bg-purple-500/10
                    hover:text-purple-300
                    hover:shadow-[0_8px_30px_rgba(139,92,246,0.15)]
                  "
                >
                  {social.label}
                </button>

              ))}

            </div>

          </div>

          {/* =================================================
              EXPLORE
          ================================================= */}

          <div>

            <h3
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[3px]
                text-white/70
              "
            >
              Explore
            </h3>

            <div className="mt-6 space-y-4">

              {exploreLinks.map((item) => (

                <button
                  key={item}
                  type="button"
                  className="
                    group
                    block
                    text-xs
                    text-white/30
                    transition-all
                    duration-300
                    hover:translate-x-1
                    hover:text-purple-300
                  "
                >
                  <span className="mr-2 text-purple-400/0 transition group-hover:text-purple-400">
                    ›
                  </span>

                  {item}
                </button>

              ))}

            </div>

          </div>

          {/* =================================================
              ACCOUNT
          ================================================= */}

          <div>

            <h3
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[3px]
                text-white/70
              "
            >
              Account
            </h3>

            <div className="mt-6 space-y-4">

              {accountLinks.map((item) => (

                <button
                  key={item}
                  type="button"
                  className="
                    group
                    block
                    text-xs
                    text-white/30
                    transition-all
                    duration-300
                    hover:translate-x-1
                    hover:text-purple-300
                  "
                >
                  <span className="mr-2 text-purple-400/0 transition group-hover:text-purple-400">
                    ›
                  </span>

                  {item}
                </button>

              ))}

            </div>

          </div>

          {/* =================================================
              SUPPORT
          ================================================= */}

          <div>

            <h3
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[3px]
                text-white/70
              "
            >
              Support
            </h3>

            <div className="mt-6 space-y-4">

              {supportLinks.map((item) => (

                <button
                  key={item}
                  type="button"
                  className="
                    group
                    block
                    text-xs
                    text-white/30
                    transition-all
                    duration-300
                    hover:translate-x-1
                    hover:text-purple-300
                  "
                >
                  <span className="mr-2 text-purple-400/0 transition group-hover:text-purple-400">
                    ›
                  </span>

                  {item}
                </button>

              ))}

            </div>

          </div>

        </div>

        {/* ===================================================
            NEWSLETTER
        =================================================== */}

        <div
          className="
            relative
            mt-16
            overflow-hidden
            rounded-2xl
            border
            border-white/[0.07]
            bg-white/[0.02]
            p-6
            backdrop-blur-xl
            sm:p-8
          "
        >

          {/* INNER GLOW */}

          <div
            className="
              pointer-events-none
              absolute
              right-0
              top-0
              h-40
              w-40
              rounded-full
              bg-purple-500/[0.08]
              blur-[70px]
            "
          />

          <div
            className="
              relative
              z-10
              flex
              flex-col
              gap-6
              lg:flex-row
              lg:items-center
              lg:justify-between
            "
          >

            {/* TEXT */}

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
                Stay In The Loop
              </p>

              <h3
                className="
                  mt-2
                  text-xl
                  font-bold
                  text-white
                  sm:text-2xl
                "
              >
                Never miss a new release.
              </h3>

              <p
                className="
                  mt-2
                  text-xs
                  text-white/25
                "
              >
                Get updates about new anime and movies.
              </p>

            </div>

            {/* EMAIL */}

            <div
              className="
                flex
                w-full
                max-w-md
                overflow-hidden
                rounded-xl
                border
                border-white/[0.07]
                bg-black/30
                p-1
                transition
                duration-300
                focus-within:border-purple-400/30
                focus-within:shadow-[0_0_35px_rgba(139,92,246,0.08)]
              "
            >

              <input
                type="email"
                placeholder="Enter your email"
                className="
                  min-w-0
                  flex-1
                  bg-transparent
                  px-3
                  py-3
                  text-xs
                  text-white
                  outline-none
                  placeholder:text-white/20
                "
              />

              <button
                type="button"
                className="
                  rounded-lg
                  border
                  border-purple-400/10
                  bg-purple-500/15
                  px-5
                  text-[10px]
                  font-bold
                  text-purple-200
                  transition
                  duration-300
                  hover:bg-purple-500/25
                  hover:text-white
                "
              >
                Subscribe
              </button>

            </div>

          </div>

        </div>

        {/* ===================================================
            BOTTOM FOOTER
        =================================================== */}

        <div
          className="
            mt-10
            flex
            flex-col
            gap-5
            border-t
            border-white/[0.06]
            pt-7
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >

          {/* COPYRIGHT */}

          <div>

            <p
              className="
                text-[10px]
                text-white/20
              "
            >
              © 2026 Amitverse. All rights reserved.
            </p>

            <p
              className="
                mt-1
                text-[9px]
                text-white/10
              "
            >
              Built for the love of stories.
            </p>

          </div>

          {/* BACK TO TOP */}

          <button
            type="button"
            onClick={scrollToTop}
            className="
              group
              flex
              items-center
              gap-2
              self-start
              rounded-full
              border
              border-white/[0.07]
              bg-white/[0.02]
              px-4
              py-2.5
              text-[9px]
              font-bold
              uppercase
              tracking-[2px]
              text-white/30
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-purple-400/25
              hover:bg-purple-500/10
              hover:text-purple-300
              hover:shadow-[0_10px_30px_rgba(139,92,246,0.12)]
              sm:self-auto
            "
          >
            <span>Back To Top</span>

            <span
              className="
                text-sm
                transition
                duration-300
                group-hover:-translate-y-1
              "
            >
              ↑
            </span>

          </button>

        </div>

      </div>

    </footer>
  );
}

export default Footer;
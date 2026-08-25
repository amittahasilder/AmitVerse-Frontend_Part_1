import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  ArrowRight,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] =
    useState(false);

  const [rememberMe, setRememberMe] =
    useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    /* ---------------------------------------------
       FRONTEND VALIDATION
    --------------------------------------------- */

    if (!form.email || !form.password) {
      setError(
        "Please enter your email and password."
      );

      return;
    }

    /* ---------------------------------------------
       TEMPORARY LOGIN FLOW

       STEP 26:
       POST /api/auth/login
    --------------------------------------------- */

    setLoading(true);

    try {
      await new Promise((resolve) =>
        setTimeout(resolve, 1000)
      );

      navigate("/profile");
    } catch (err) {
      setError(
        "Invalid email or password."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="
        relative
        min-h-screen
        overflow-hidden
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
          absolute
          left-[-180px]
          top-[-180px]
          h-[520px]
          w-[520px]
          rounded-full
          bg-purple-700/15
          blur-[170px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-180px]
          right-[-180px]
          h-[500px]
          w-[500px]
          rounded-full
          bg-indigo-700/10
          blur-[160px]
        "
      />

      {/* =================================================
          HEADER
      ================================================= */}

      <header
        className="
          absolute
          left-0
          right-0
          top-0
          z-50
        "
      >
        <div
          className="
            mx-auto
            flex
            max-w-7xl
            items-center
            justify-between
            px-6
            py-6
            lg:px-8
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

          <p className="text-xs text-white/30">
            New to Amitverse?

            <Link
              to="/signup"
              className="
                ml-2
                font-semibold
                text-purple-300
                transition
                hover:text-purple-200
              "
            >
              Create account
            </Link>
          </p>
        </div>
      </header>

      {/* =================================================
          MAIN
      ================================================= */}

      <main
        className="
          relative
          z-10
          flex
          min-h-screen
          items-center
          justify-center
          px-5
          pb-12
          pt-28
        "
      >
        <div
          className="
            grid
            w-full
            max-w-6xl
            overflow-hidden
            rounded-[28px]
            border
            border-white/[0.08]
            bg-white/[0.025]
            shadow-[0_40px_120px_rgba(0,0,0,0.55)]
            backdrop-blur-2xl
            lg:grid-cols-[1.1fr_0.9fr]
          "
        >
          {/* =================================================
              LOGIN FORM
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
              duration: 0.7,
            }}
            className="
              order-2
              p-7
              sm:p-10
              lg:order-1
              lg:p-14
            "
          >
            <div className="mx-auto max-w-md">
              <p
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[3px]
                  text-purple-300/60
                "
              >
                Welcome back
              </p>

              <h1
                className="
                  mt-3
                  text-3xl
                  font-black
                  tracking-[-1px]
                  text-white
                  sm:text-4xl
                "
              >
                Sign in to Amitverse
              </h1>

              <p
                className="
                  mt-3
                  text-xs
                  leading-6
                  text-white/30
                "
              >
                Continue watching your favorite
                anime and movies.
              </p>

              {/* ERROR */}

              {error && (
                <div
                  className="
                    mt-6
                    rounded-xl
                    border
                    border-red-500/20
                    bg-red-500/[0.06]
                    px-4
                    py-3
                    text-xs
                    text-red-300
                  "
                >
                  {error}
                </div>
              )}

              <form
                onSubmit={handleSubmit}
                className="mt-8 space-y-5"
              >
                {/* EMAIL */}

                <div>
                  <label
                    className="
                      mb-2
                      block
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-wider
                      text-white/35
                    "
                  >
                    Email address
                  </label>

                  <div className="relative">
                    <Mail
                      size={16}
                      className="
                        absolute
                        left-4
                        top-1/2
                        -translate-y-1/2
                        text-white/20
                      "
                    />

                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      autoComplete="email"
                      className="
                        w-full
                        rounded-xl
                        border
                        border-white/[0.08]
                        bg-white/[0.03]
                        py-3.5
                        pl-11
                        pr-4
                        text-sm
                        text-white
                        outline-none
                        placeholder:text-white/20
                        transition
                        focus:border-purple-500/40
                        focus:bg-purple-500/[0.03]
                      "
                    />
                  </div>
                </div>

                {/* PASSWORD */}

                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <label
                      className="
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-wider
                        text-white/35
                      "
                    >
                      Password
                    </label>

                    <button
                      type="button"
                      className="
                        text-[10px]
                        font-semibold
                        text-purple-300/70
                        transition
                        hover:text-purple-200
                      "
                    >
                      Forgot password?
                    </button>
                  </div>

                  <div className="relative">
                    <LockKeyhole
                      size={16}
                      className="
                        absolute
                        left-4
                        top-1/2
                        -translate-y-1/2
                        text-white/20
                      "
                    />

                    <input
                      type={
                        showPassword
                          ? "text"
                          : "password"
                      }
                      name="password"
                      value={form.password}
                      onChange={handleChange}
                      placeholder="Enter your password"
                      autoComplete="current-password"
                      className="
                        w-full
                        rounded-xl
                        border
                        border-white/[0.08]
                        bg-white/[0.03]
                        py-3.5
                        pl-11
                        pr-12
                        text-sm
                        text-white
                        outline-none
                        placeholder:text-white/20
                        transition
                        focus:border-purple-500/40
                        focus:bg-purple-500/[0.03]
                      "
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword(
                          !showPassword
                        )
                      }
                      className="
                        absolute
                        right-4
                        top-1/2
                        -translate-y-1/2
                        text-white/25
                        transition
                        hover:text-white/60
                      "
                    >
                      {showPassword ? (
                        <EyeOff size={17} />
                      ) : (
                        <Eye size={17} />
                      )}
                    </button>
                  </div>
                </div>

                {/* REMEMBER */}

                <label
                  className="
                    flex
                    cursor-pointer
                    items-center
                    gap-3
                    text-xs
                    text-white/30
                  "
                >
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) =>
                      setRememberMe(
                        e.target.checked
                      )
                    }
                    className="
                      h-4
                      w-4
                      cursor-pointer
                      accent-purple-500
                    "
                  />

                  Remember me
                </label>

                {/* SUBMIT */}

                <button
                  type="submit"
                  disabled={loading}
                  className="
                    group
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-purple-600
                    px-5
                    py-3.5
                    text-sm
                    font-bold
                    text-white
                    shadow-[0_12px_40px_rgba(124,58,237,0.22)]
                    transition
                    hover:bg-purple-500
                    disabled:cursor-not-allowed
                    disabled:opacity-60
                  "
                >
                  {loading
                    ? "Signing in..."
                    : "Sign in"}

                  {!loading && (
                    <ArrowRight
                      size={17}
                      className="
                        transition
                        group-hover:translate-x-1
                      "
                    />
                  )}
                </button>
              </form>

              {/* SIGNUP */}

              <p
                className="
                  mt-8
                  text-center
                  text-xs
                  text-white/25
                "
              >
                Don't have an account?

                <Link
                  to="/signup"
                  className="
                    ml-1.5
                    font-semibold
                    text-purple-300
                    hover:text-purple-200
                  "
                >
                  Create one
                </Link>
              </p>

              <div
                className="
                  mt-8
                  flex
                  items-center
                  justify-center
                  gap-2
                  text-[10px]
                  text-white/15
                "
              >
                <ShieldCheck size={13} />

                Secure authentication
              </div>
            </div>
          </motion.div>

          {/* =================================================
              RIGHT BRAND PANEL
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 25,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            className="
              relative
              order-1
              hidden
              overflow-hidden
              border-l
              border-white/[0.06]
              bg-gradient-to-br
              from-purple-950/40
              via-[#08080d]
              to-[#030304]
              p-12
              lg:order-2
              lg:flex
              lg:flex-col
              lg:justify-between
            "
          >
            <div
              className="
                pointer-events-none
                absolute
                bottom-[-100px]
                right-[-100px]
                h-[400px]
                w-[400px]
                rounded-full
                bg-purple-600/20
                blur-[130px]
              "
            />

            <div className="relative z-10">
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-purple-400/20
                  bg-purple-500/10
                  text-purple-300
                "
              >
                <Sparkles size={22} />
              </div>

              <p
                className="
                  mt-8
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[4px]
                  text-purple-300/70
                "
              >
                Welcome back
              </p>

              <h2
                className="
                  mt-5
                  text-4xl
                  font-black
                  leading-[1.05]
                  tracking-[-1.5px]
                "
              >
                The next
                <br />
                story awaits.
              </h2>

              <p
                className="
                  mt-6
                  max-w-md
                  text-sm
                  leading-7
                  text-white/35
                "
              >
                Sign in to keep your watch
                history, favorites and
                personalized Amitverse
                experience with you.
              </p>
            </div>

            <div className="relative z-10">
              <div
                className="
                  rounded-2xl
                  border
                  border-white/[0.07]
                  bg-white/[0.025]
                  p-5
                  backdrop-blur-xl
                "
              >
                <p
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[3px]
                    text-white/20
                  "
                >
                  Amitverse
                </p>

                <p
                  className="
                    mt-2
                    text-sm
                    font-semibold
                    text-white/70
                  "
                >
                  Your personal anime universe.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  User,
  ArrowRight,
  Check,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Signup() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] =
    useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
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

    if (
      !form.name ||
      !form.email ||
      !form.password ||
      !form.confirmPassword
    ) {
      setError(
        "Please complete all fields."
      );

      return;
    }

    if (form.password.length < 8) {
      setError(
        "Password must contain at least 8 characters."
      );

      return;
    }

    if (
      form.password !==
      form.confirmPassword
    ) {
      setError(
        "Passwords do not match."
      );

      return;
    }

    /* ---------------------------------------------
       TEMPORARY FRONTEND FLOW

       STEP 26:
       POST /api/auth/register
    --------------------------------------------- */

    setLoading(true);

    try {
      await new Promise((resolve) =>
        setTimeout(resolve, 1000)
      );

      navigate("/login");
    } catch (err) {
      setError(
        "Something went wrong. Please try again."
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
          left-[-150px]
          top-[-150px]
          h-[500px]
          w-[500px]
          rounded-full
          bg-purple-700/15
          blur-[160px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-200px]
          right-[-150px]
          h-[500px]
          w-[500px]
          rounded-full
          bg-fuchsia-700/10
          blur-[170px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[350px]
          w-[350px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-indigo-700/[0.06]
          blur-[140px]
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
            Already have an account?
            <Link
              to="/login"
              className="
                ml-2
                font-semibold
                text-purple-300
                transition
                hover:text-purple-200
              "
            >
              Sign in
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
            lg:grid-cols-[0.9fr_1.1fr]
          "
        >
          {/* =================================================
              LEFT BRAND PANEL
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -25,
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
              hidden
              overflow-hidden
              border-r
              border-white/[0.06]
              bg-gradient-to-br
              from-purple-950/40
              via-[#08080d]
              to-[#030304]
              p-12
              lg:flex
              lg:flex-col
              lg:justify-between
            "
          >
            {/* Glow */}

            <div
              className="
                pointer-events-none
                absolute
                right-[-100px]
                top-[-100px]
                h-[350px]
                w-[350px]
                rounded-full
                bg-purple-600/20
                blur-[120px]
              "
            />

            <div className="relative z-10">
              <div
                className="
                  mb-7
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
                <ShieldCheck size={23} />
              </div>

              <p
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[4px]
                  text-purple-300/70
                "
              >
                Join the universe
              </p>

              <h1
                className="
                  mt-5
                  max-w-md
                  text-4xl
                  font-black
                  leading-[1.05]
                  tracking-[-1.5px]
                  text-white
                "
              >
                Your stories.
                <br />
                Your universe.
              </h1>

              <p
                className="
                  mt-6
                  max-w-md
                  text-sm
                  leading-7
                  text-white/35
                "
              >
                Create your Amitverse account
                and build your personal anime
                and movie experience.
              </p>
            </div>

            <div className="relative z-10 space-y-4">
              {[
                "Save your favorite titles",
                "Continue watching anywhere",
                "Personalized recommendations",
              ].map((feature) => (
                <div
                  key={feature}
                  className="
                    flex
                    items-center
                    gap-3
                    text-xs
                    text-white/45
                  "
                >
                  <span
                    className="
                      flex
                      h-6
                      w-6
                      items-center
                      justify-center
                      rounded-full
                      bg-purple-500/10
                      text-purple-300
                    "
                  >
                    <Check size={13} />
                  </span>

                  {feature}
                </div>
              ))}
            </div>
          </motion.div>

          {/* =================================================
              SIGNUP FORM
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
              delay: 0.1,
            }}
            className="
              p-7
              sm:p-10
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
                Create account
              </p>

              <h2
                className="
                  mt-3
                  text-3xl
                  font-black
                  tracking-[-1px]
                  text-white
                  sm:text-4xl
                "
              >
                Join Amitverse
              </h2>

              <p
                className="
                  mt-3
                  text-xs
                  leading-6
                  text-white/30
                "
              >
                Create your account and start
                building your personal library.
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
                {/* NAME */}

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
                    Full name
                  </label>

                  <div className="relative">
                    <User
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
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      autoComplete="name"
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
                    Password
                  </label>

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
                      placeholder="Minimum 8 characters"
                      autoComplete="new-password"
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

                {/* CONFIRM PASSWORD */}

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
                    Confirm password
                  </label>

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
                        showConfirmPassword
                          ? "text"
                          : "password"
                      }
                      name="confirmPassword"
                      value={
                        form.confirmPassword
                      }
                      onChange={handleChange}
                      placeholder="Repeat your password"
                      autoComplete="new-password"
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
                        setShowConfirmPassword(
                          !showConfirmPassword
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
                      {showConfirmPassword ? (
                        <EyeOff size={17} />
                      ) : (
                        <Eye size={17} />
                      )}
                    </button>
                  </div>
                </div>

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
                    ? "Creating account..."
                    : "Create account"}

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

              {/* LOGIN */}

              <p
                className="
                  mt-8
                  text-center
                  text-xs
                  text-white/25
                "
              >
                Already have an account?

                <Link
                  to="/login"
                  className="
                    ml-1.5
                    font-semibold
                    text-purple-300
                    hover:text-purple-200
                  "
                >
                  Sign in
                </Link>
              </p>

              {/* SECURITY */}

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

                Your account will be securely
                protected.
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
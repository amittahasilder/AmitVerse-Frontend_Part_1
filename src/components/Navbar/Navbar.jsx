// // import { useEffect, useState } from "react";
// // import {
// //   Search,
// //   Menu,
// //   X,
// //   Play,
// //   UserRound,
// //   Sparkles,
// // } from "lucide-react";
// // import {
// //   AnimatePresence,
// //   motion,
// // } from "framer-motion";
// // import {
// //   Link,
// //   NavLink,
// //   useLocation,
// // } from "react-router-dom";

// // const navItems = [
// //   {
// //     name: "Home",
// //     path: "/",
// //   },
// //   {
// //     name: "Anime",
// //     path: "/anime",
// //   },
// //   {
// //     name: "Movies",
// //     path: "/movies",
// //   },
// //   {
// //     name: "Trending",
// //     path: "/trending",
// //   },
// // ];

// // function Navbar() {
// //   const [scrolled, setScrolled] = useState(false);
// //   const [mobileOpen, setMobileOpen] = useState(false);
// //   const [searchOpen, setSearchOpen] = useState(false);

// //   const location = useLocation();

// //   /* =========================
// //      SCROLL EFFECT
// //   ========================= */

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       setScrolled(window.scrollY > 30);
// //     };

// //     window.addEventListener(
// //       "scroll",
// //       handleScroll
// //     );

// //     return () => {
// //       window.removeEventListener(
// //         "scroll",
// //         handleScroll
// //       );
// //     };
// //   }, []);

// //   /* =========================
// //      CLOSE MOBILE / SEARCH
// //   ========================= */

// //   useEffect(() => {
// //     setMobileOpen(false);
// //     setSearchOpen(false);
// //   }, [location.pathname]);

// //   return (
// //     <>
// //       {/* =================================================
// //           NAVBAR
// //       ================================================= */}

// //       <motion.header
// //         initial={{
// //           opacity: 0,
// //           y: -30,
// //         }}
// //         animate={{
// //           opacity: 1,
// //           y: 0,
// //         }}
// //         transition={{
// //           duration: 0.8,
// //           ease: [0.22, 1, 0.36, 1],
// //         }}
// //         className={`
// //           fixed
// //           left-0
// //           top-0
// //           z-[100]
// //           w-full
// //           transition-all
// //           duration-700
// //         `}
// //       >

// //         {/* TOP LIGHT */}

// //         <div
// //           className="
// //             pointer-events-none
// //             absolute
// //             left-1/2
// //             top-0
// //             h-px
// //             w-[55%]
// //             -translate-x-1/2
// //             bg-gradient-to-r
// //             from-transparent
// //             via-purple-400/70
// //             to-transparent
// //             blur-[1px]
// //           "
// //         />

// //         {/* AMBIENT GLOW */}

// //         <motion.div
// //           animate={{
// //             opacity: scrolled
// //               ? 0.35
// //               : 0.18,
// //           }}
// //           transition={{
// //             duration: 0.6,
// //           }}
// //           className="
// //             pointer-events-none
// //             absolute
// //             left-1/2
// //             top-[-100px]
// //             h-[220px]
// //             w-[500px]
// //             -translate-x-1/2
// //             rounded-full
// //             bg-purple-700/20
// //             blur-[100px]
// //           "
// //         />

// //         {/* NAV CONTAINER */}

// //         <div
// //           className={`
// //             relative
// //             mx-auto
// //             flex
// //             items-center
// //             justify-between
// //             px-5
// //             transition-all
// //             duration-500
// //             sm:px-8
// //             lg:px-10
// //             ${
// //               scrolled
// //                 ? "h-[68px] max-w-[1400px]"
// //                 : "h-[82px] max-w-[1500px]"
// //             }
// //           `}
// //         >

// //           {/* ==========================================
// //               LOGO
// //           ========================================== */}

// //           <Link
// //             to="/"
// //             className="
// //               group
// //               relative
// //               flex
// //               items-center
// //               gap-3
// //             "
// //           >

// //             {/* Logo Glow */}

// //             <motion.div
// //               animate={{
// //                 scale: [1, 1.08, 1],
// //                 opacity: [0.15, 0.3, 0.15],
// //               }}
// //               transition={{
// //                 duration: 4,
// //                 repeat: Infinity,
// //                 ease: "easeInOut",
// //               }}
// //               className="
// //                 absolute
// //                 -inset-4
// //                 rounded-full
// //                 bg-purple-600
// //                 blur-2xl
// //               "
// //             />

// //             {/* Logo Icon */}

// //             <motion.div
// //               whileHover={{
// //                 scale: 1.08,
// //                 rotate: 5,
// //               }}
// //               whileTap={{
// //                 scale: 0.94,
// //               }}
// //               transition={{
// //                 type: "spring",
// //                 stiffness: 400,
// //                 damping: 15,
// //               }}
// //               className="
// //                 relative
// //                 flex
// //                 h-10
// //                 w-10
// //                 items-center
// //                 justify-center
// //                 overflow-hidden
// //                 rounded-xl
// //                 border
// //                 border-white/10
// //                 bg-gradient-to-br
// //                 from-purple-600
// //                 via-violet-600
// //                 to-indigo-600
// //                 shadow-[0_0_30px_rgba(139,92,246,0.35)]
// //               "
// //             >

// //               {/* Moving Shine */}

// //               <motion.div
// //                 animate={{
// //                   x: [
// //                     "-150%",
// //                     "150%",
// //                   ],
// //                 }}
// //                 transition={{
// //                   duration: 2.5,
// //                   repeat: Infinity,
// //                   repeatDelay: 3,
// //                   ease: "easeInOut",
// //                 }}
// //                 className="
// //                   absolute
// //                   inset-y-0
// //                   w-7
// //                   rotate-12
// //                   bg-gradient-to-r
// //                   from-transparent
// //                   via-white/40
// //                   to-transparent
// //                   blur-sm
// //                 "
// //               />

// //               <Play
// //                 size={17}
// //                 fill="white"
// //                 className="
// //                   relative
// //                   z-10
// //                   text-white
// //                 "
// //               />
// //             </motion.div>

// //             {/* LOGO TEXT */}

// //             <div className="relative">

// //               <div
// //                 className="
// //                   font-['Space_Grotesk']
// //                   text-[19px]
// //                   font-extrabold
// //                   tracking-[-1px]
// //                 "
// //               >
// //                 AMIT
// //                 <span
// //                   className="
// //                     bg-gradient-to-r
// //                     from-purple-400
// //                     via-fuchsia-400
// //                     to-indigo-400
// //                     bg-clip-text
// //                     text-transparent
// //                   "
// //                 >
// //                   VERSE
// //                 </span>
// //               </div>

// //               <div
// //                 className="
// //                   mt-[-2px]
// //                   flex
// //                   items-center
// //                   gap-1
// //                   text-[7px]
// //                   font-bold
// //                   uppercase
// //                   tracking-[2.5px]
// //                   text-white/25
// //                 "
// //               >
// //                 <Sparkles size={7} />
// //                 Streaming Universe
// //               </div>

// //             </div>
// //           </Link>

// //           {/* ==========================================
// //               DESKTOP NAV
// //           ========================================== */}

// //           <nav
// //             className="
// //               absolute
// //               left-1/2
// //               hidden
// //               -translate-x-1/2
// //               items-center
// //               gap-1
// //               lg:flex
// //             "
// //           >

// //             {navItems.map(
// //               (item) => (
// //                 <NavLink
// //                   key={item.path}
// //                   to={item.path}
// //                   end={
// //                     item.path === "/"
// //                   }
// //                   className="
// //                     group
// //                     relative
// //                     px-4
// //                     py-2.5
// //                   "
// //                 >
// //                   {({
// //                     isActive,
// //                   }) => (
// //                     <>
// //                       {/* Hover Background */}

// //                       <span
// //                         className="
// //                           absolute
// //                           inset-0
// //                           rounded-xl
// //                           bg-white/[0.035]
// //                           opacity-0
// //                           transition-all
// //                           duration-300
// //                           group-hover:opacity-100
// //                         "
// //                       />

// //                       {/* TEXT */}

// //                       <span
// //                         className={`
// //                           relative
// //                           z-10
// //                           text-[13px]
// //                           font-medium
// //                           transition-all
// //                           duration-300
// //                           ${
// //                             isActive
// //                               ? "text-white"
// //                               : "text-white/45 group-hover:text-white/80"
// //                           }
// //                         `}
// //                       >
// //                         {item.name}
// //                       </span>

// //                       {/* ACTIVE LIGHT */}

// //                       {isActive && (
// //                         <motion.div
// //                           layoutId="activeNav"
// //                           transition={{
// //                             type: "spring",
// //                             stiffness: 400,
// //                             damping: 30,
// //                           }}
// //                           className="
// //                             absolute
// //                             bottom-0
// //                             left-1/2
// //                             h-[2px]
// //                             w-5
// //                             -translate-x-1/2
// //                             rounded-full
// //                             bg-gradient-to-r
// //                             from-purple-400
// //                             to-fuchsia-400
// //                             shadow-[0_0_15px_rgba(168,85,247,0.9)]
// //                           "
// //                         />
// //                       )}

// //                     </>
// //                   )}
// //                 </NavLink>
// //               )
// //             )}

// //           </nav>

// //           {/* ==========================================
// //               RIGHT SIDE
// //           ========================================== */}

// //           <div
// //             className="
// //               flex
// //               items-center
// //               gap-2
// //             "
// //           >

// //             {/* SEARCH */}

// //             <AnimatePresence
// //               mode="wait"
// //             >

// //               {!searchOpen ? (

// //                 <motion.button
// //                   key="search"
// //                   initial={{
// //                     opacity: 0,
// //                     scale: 0.8,
// //                   }}
// //                   animate={{
// //                     opacity: 1,
// //                     scale: 1,
// //                   }}
// //                   exit={{
// //                     opacity: 0,
// //                     scale: 0.8,
// //                   }}
// //                   whileHover={{
// //                     scale: 1.05,
// //                   }}
// //                   whileTap={{
// //                     scale: 0.94,
// //                   }}
// //                   onClick={() =>
// //                     setSearchOpen(
// //                       true
// //                     )
// //                   }
// //                   className="
// //                     hidden
// //                     h-10
// //                     w-10
// //                     items-center
// //                     justify-center
// //                     rounded-xl
// //                     border
// //                     border-white/[0.07]
// //                     bg-white/[0.035]
// //                     text-white/50
// //                     transition-all
// //                     duration-300
// //                     hover:border-purple-400/30
// //                     hover:bg-purple-500/[0.08]
// //                     hover:text-purple-300
// //                     sm:flex
// //                   "
// //                 >
// //                   <Search size={18} />
// //                 </motion.button>

// //               ) : (

// //                 <motion.div
// //                   key="input"
// //                   initial={{
// //                     width: 40,
// //                     opacity: 0,
// //                   }}
// //                   animate={{
// //                     width: 245,
// //                     opacity: 1,
// //                   }}
// //                   exit={{
// //                     width: 40,
// //                     opacity: 0,
// //                   }}
// //                   transition={{
// //                     duration: 0.35,
// //                     ease: [0.22, 1, 0.36, 1],
// //                   }}
// //                   className="
// //                     hidden
// //                     h-10
// //                     items-center
// //                     gap-2
// //                     overflow-hidden
// //                     rounded-xl
// //                     border
// //                     border-purple-400/20
// //                     bg-black/30
// //                     px-3
// //                     shadow-[0_0_30px_rgba(139,92,246,0.08)]
// //                     backdrop-blur-xl
// //                     sm:flex
// //                   "
// //                 >

// //                   <Search
// //                     size={16}
// //                     className="
// //                       shrink-0
// //                       text-purple-300
// //                     "
// //                   />

// //                   <input
// //                     autoFocus
// //                     type="text"
// //                     placeholder="Search anime..."
// //                     className="
// //                       min-w-0
// //                       flex-1
// //                       bg-transparent
// //                       text-xs
// //                       text-white
// //                       outline-none
// //                       placeholder:text-white/25
// //                     "
// //                   />

// //                   <button
// //                     onClick={() =>
// //                       setSearchOpen(
// //                         false
// //                       )
// //                     }
// //                     className="
// //                       text-white/30
// //                       transition
// //                       hover:text-white
// //                     "
// //                   >
// //                     <X size={15} />
// //                   </button>

// //                 </motion.div>
// //               )}

// //             </AnimatePresence>

// //             {/* SIGN IN */}

// //             <Link
// //               to="/login"
// //               className="
// //                 group
// //                 relative
// //                 hidden
// //                 h-10
// //                 items-center
// //                 gap-2
// //                 overflow-hidden
// //                 rounded-xl
// //                 border
// //                 border-purple-400/20
// //                 bg-gradient-to-r
// //                 from-purple-600
// //                 to-indigo-600
// //                 px-4
// //                 text-xs
// //                 font-bold
// //                 text-white
// //                 shadow-[0_0_25px_rgba(124,58,237,0.2)]
// //                 transition-all
// //                 duration-300
// //                 hover:-translate-y-0.5
// //                 hover:shadow-[0_0_40px_rgba(124,58,237,0.4)]
// //                 sm:flex
// //               "
// //             >

// //               {/* Button Shine */}

// //               <motion.span
// //                 animate={{
// //                   x: [
// //                     "-150%",
// //                     "150%",
// //                   ],
// //                 }}
// //                 transition={{
// //                   duration: 2.5,
// //                   repeat: Infinity,
// //                   repeatDelay: 4,
// //                   ease: "easeInOut",
// //                 }}
// //                 className="
// //                   absolute
// //                   inset-y-0
// //                   w-10
// //                   rotate-12
// //                   bg-white/20
// //                   blur-md
// //                 "
// //               />

// //               <UserRound
// //                 size={15}
// //                 className="
// //                   relative
// //                   z-10
// //                   transition-transform
// //                   duration-300
// //                   group-hover:scale-110
// //                 "
// //               />

// //               <span className="relative z-10">
// //                 Sign In
// //               </span>

// //             </Link>

// //             {/* MOBILE BUTTON */}

// //             <motion.button
// //               whileTap={{
// //                 scale: 0.9,
// //               }}
// //               onClick={() =>
// //                 setMobileOpen(
// //                   !mobileOpen
// //                 )
// //               }
// //               className="
// //                 flex
// //                 h-10
// //                 w-10
// //                 items-center
// //                 justify-center
// //                 rounded-xl
// //                 border
// //                 border-white/[0.07]
// //                 bg-white/[0.035]
// //                 text-white/70
// //                 transition
// //                 hover:border-purple-400/30
// //                 hover:text-white
// //                 lg:hidden
// //               "
// //             >

// //               <AnimatePresence
// //                 mode="wait"
// //                 initial={false}
// //               >

// //                 {mobileOpen ? (

// //                   <motion.div
// //                     key="close"
// //                     initial={{
// //                       rotate: -90,
// //                       opacity: 0,
// //                     }}
// //                     animate={{
// //                       rotate: 0,
// //                       opacity: 1,
// //                     }}
// //                     exit={{
// //                       rotate: 90,
// //                       opacity: 0,
// //                     }}
// //                   >
// //                     <X size={20} />
// //                   </motion.div>

// //                 ) : (

// //                   <motion.div
// //                     key="menu"
// //                     initial={{
// //                       rotate: 90,
// //                       opacity: 0,
// //                     }}
// //                     animate={{
// //                       rotate: 0,
// //                       opacity: 1,
// //                     }}
// //                     exit={{
// //                       rotate: -90,
// //                       opacity: 0,
// //                     }}
// //                   >
// //                     <Menu size={20} />
// //                   </motion.div>

// //                 )}

// //               </AnimatePresence>

// //             </motion.button>

// //           </div>
// //         </div>
// //       </motion.header>

// //       {/* =================================================
// //           MOBILE MENU
// //       ================================================= */}

// //       <AnimatePresence>
// //         {mobileOpen && (
// //           <>
// //             {/* BACKDROP */}

// //             <motion.div
// //               initial={{
// //                 opacity: 0,
// //               }}
// //               animate={{
// //                 opacity: 1,
// //               }}
// //               exit={{
// //                 opacity: 0,
// //               }}
// //               onClick={() =>
// //                 setMobileOpen(
// //                   false
// //                 )
// //               }
// //               className="
// //                 fixed
// //                 inset-0
// //                 z-[90]
// //                 bg-black/60
// //                 backdrop-blur-md
// //                 lg:hidden
// //               "
// //             />

// //             {/* MOBILE PANEL */}

// //             <motion.div
// //               initial={{
// //                 opacity: 0,
// //                 y: -25,
// //                 scale: 0.97,
// //               }}
// //               animate={{
// //                 opacity: 1,
// //                 y: 0,
// //                 scale: 1,
// //               }}
// //               exit={{
// //                 opacity: 0,
// //                 y: -25,
// //                 scale: 0.97,
// //               }}
// //               transition={{
// //                 duration: 0.35,
// //                 ease: [0.22, 1, 0.36, 1],
// //               }}
// //               className="
// //                 fixed
// //                 left-4
// //                 right-4
// //                 top-[88px]
// //                 z-[95]
// //                 overflow-hidden
// //                 rounded-2xl
// //                 border
// //                 border-white/[0.08]
// //                 bg-[#08060d]/95
// //                 p-3
// //                 shadow-[0_30px_100px_rgba(0,0,0,0.7)]
// //                 backdrop-blur-2xl
// //                 lg:hidden
// //               "
// //             >

// //               {/* Ambient Glow */}

// //               <div
// //                 className="
// //                   pointer-events-none
// //                   absolute
// //                   -right-20
// //                   -top-20
// //                   h-48
// //                   w-48
// //                   rounded-full
// //                   bg-purple-600/20
// //                   blur-3xl
// //                 "
// //               />

// //               <div className="relative space-y-1">

// //                 {navItems.map(
// //                   (item, index) => (
// //                     <motion.div
// //                       key={item.path}
// //                       initial={{
// //                         opacity: 0,
// //                         x: -20,
// //                       }}
// //                       animate={{
// //                         opacity: 1,
// //                         x: 0,
// //                       }}
// //                       transition={{
// //                         delay:
// //                           index * 0.06,
// //                       }}
// //                     >
// //                       <NavLink
// //                         to={
// //                           item.path
// //                         }
// //                         end={
// //                           item.path ===
// //                           "/"
// //                         }
// //                         className={({
// //                           isActive,
// //                         }) => `
// //                           flex
// //                           items-center
// //                           justify-between
// //                           rounded-xl
// //                           px-4
// //                           py-3.5
// //                           text-sm
// //                           font-semibold
// //                           transition-all
// //                           ${
// //                             isActive
// //                               ? "bg-purple-500/10 text-white"
// //                               : "text-white/50 hover:bg-white/[0.04] hover:text-white"
// //                           }
// //                         `}
// //                       >
// //                         {item.name}

// //                         <span
// //                           className="
// //                             text-[9px]
// //                             font-bold
// //                             tracking-widest
// //                             text-white/20
// //                           "
// //                         >
// //                           0
// //                           {index +
// //                             1}
// //                         </span>
// //                       </NavLink>
// //                     </motion.div>
// //                   )
// //                 )}

// //                 <Link
// //                   to="/login"
// //                   className="
// //                     mt-2
// //                     flex
// //                     items-center
// //                     justify-center
// //                     gap-2
// //                     rounded-xl
// //                     bg-gradient-to-r
// //                     from-purple-600
// //                     to-indigo-600
// //                     px-4
// //                     py-3.5
// //                     text-sm
// //                     font-bold
// //                     text-white
// //                     shadow-[0_0_25px_rgba(124,58,237,0.2)]
// //                   "
// //                 >
// //                   <UserRound size={16} />
// //                   Sign In
// //                 </Link>

// //               </div>
// //             </motion.div>
// //           </>
// //         )}
// //       </AnimatePresence>
// //     </>
// //   );
// // }

// // // export default Navbar;



// import { useEffect, useState } from "react";
// import {
//   Search,
//   Menu,
//   X,
//   Play,
//   UserRound,
//   Sparkles,
//   ChevronDown,
// } from "lucide-react";

// import {
//   AnimatePresence,
//   motion,
// } from "framer-motion";

// import {
//   Link,
//   NavLink,
//   useLocation,
// } from "react-router-dom";

// const navItems = [
//   {
//     name: "Home",
//     path: "/",
//   },
//   {
//     name: "Anime",
//     path: "/anime",
//   },
//   {
//     name: "Movies",
//     path: "/movies",
//   },
//   {
//     name: "Trending",
//     path: "/trending",
//   },
// ];

// function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [searchOpen, setSearchOpen] = useState(false);

//   const location = useLocation();

//   /* ===============================
//      SCROLL
//   =============================== */

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 25);
//     };

//     window.addEventListener(
//       "scroll",
//       handleScroll
//     );

//     return () => {
//       window.removeEventListener(
//         "scroll",
//         handleScroll
//       );
//     };
//   }, []);

//   /* ===============================
//      ROUTE CHANGE
//   =============================== */

//   useEffect(() => {
//     setMobileOpen(false);
//     setSearchOpen(false);
//   }, [location.pathname]);

//   return (
//     <>
//       {/* =================================================
//           AMBIENT NAVBAR LIGHT
//       ================================================= */}

//       <div className="pointer-events-none fixed left-0 right-0 top-0 z-[80] h-32">

//         <div
//           className="
//             absolute
//             left-1/2
//             top-[-100px]
//             h-64
//             w-[600px]
//             -translate-x-1/2
//             rounded-full
//             bg-purple-700/[0.12]
//             blur-[110px]
//           "
//         />

//         <div
//           className="
//             absolute
//             left-[10%]
//             top-[-80px]
//             h-40
//             w-40
//             rounded-full
//             bg-fuchsia-600/[0.05]
//             blur-[90px]
//           "
//         />

//         <div
//           className="
//             absolute
//             right-[10%]
//             top-[-80px]
//             h-40
//             w-40
//             rounded-full
//             bg-indigo-600/[0.05]
//             blur-[90px]
//           "
//         />

//       </div>

//       {/* =================================================
//           NAVBAR
//       ================================================= */}

//       <motion.header
//         initial={{
//           opacity: 0,
//           y: -80,
//         }}
//         animate={{
//           opacity: 1,
//           y: 0,
//         }}
//         transition={{
//           duration: 0.8,
//           ease: [0.22, 1, 0.36, 1],
//         }}
//         className="
//           fixed
//           left-0
//           top-0
//           z-[100]
//           w-full
//         "
//       >

//         {/* TOP LIGHT LINE */}

//         <motion.div
//           initial={{
//             scaleX: 0,
//             opacity: 0,
//           }}
//           animate={{
//             scaleX: 1,
//             opacity: 1,
//           }}
//           transition={{
//             delay: 0.5,
//             duration: 1.2,
//           }}
//           className="
//             absolute
//             left-1/2
//             top-0
//             h-px
//             w-[45%]
//             -translate-x-1/2
//             origin-center
//             bg-gradient-to-r
//             from-transparent
//             via-purple-400/80
//             to-transparent
//             shadow-[0_0_15px_rgba(168,85,247,0.8)]
//           "
//         />

//         {/* CONTAINER */}

//         <div
//           className="
//             mx-auto
//             max-w-[1500px]
//             px-4
//             pt-3
//             sm:px-6
//             lg:px-8
//           "
//         >

//           {/* =================================================
//               GLASS PANEL
//           ================================================= */}

//           <motion.div
//             animate={{
//               y: scrolled ? 0 : 2,
//             }}
//             transition={{
//               duration: 0.5,
//             }}
//             className={`
//               relative
//               overflow-hidden
//               rounded-2xl
//               border
//               transition-all
//               duration-700
//               ${
//                 scrolled
//                   ? `
//                     border-white/[0.10]
//                     bg-[#06050a]/80
//                     shadow-[0_20px_80px_rgba(0,0,0,0.45)]
//                   `
//                   : `
//                     border-white/[0.06]
//                     bg-[#050409]/55
//                     shadow-[0_15px_60px_rgba(0,0,0,0.25)]
//                   `
//               }
//               backdrop-blur-2xl
//             `}
//           >

//             {/* GLASS TOP REFLECTION */}

//             <div
//               className="
//                 pointer-events-none
//                 absolute
//                 inset-x-0
//                 top-0
//                 h-20
//                 bg-gradient-to-b
//                 from-white/[0.045]
//                 to-transparent
//               "
//             />

//             {/* INNER PURPLE BORDER LIGHT */}

//             <div
//               className="
//                 pointer-events-none
//                 absolute
//                 inset-x-[15%]
//                 top-0
//                 h-px
//                 bg-gradient-to-r
//                 from-transparent
//                 via-purple-400/30
//                 to-transparent
//               "
//             />

//             {/* MOVING LIGHT */}

//             <motion.div
//               animate={{
//                 x: [
//                   "-150%",
//                   "250%",
//                 ],
//               }}
//               transition={{
//                 duration: 7,
//                 repeat: Infinity,
//                 ease: "linear",
//               }}
//               className="
//                 pointer-events-none
//                 absolute
//                 top-0
//                 h-px
//                 w-40
//                 bg-gradient-to-r
//                 from-transparent
//                 via-white/50
//                 to-transparent
//                 blur-[1px]
//               "
//             />

//             {/* =================================================
//                 NAV CONTENT
//             ================================================= */}

//             <div
//               className={`
//                 relative
//                 flex
//                 items-center
//                 justify-between
//                 px-4
//                 transition-all
//                 duration-500
//                 sm:px-6
//                 ${
//                   scrolled
//                     ? "h-[66px]"
//                     : "h-[74px]"
//                 }
//               `}
//             >

//               {/* =================================================
//                   LOGO
//               ================================================= */}

//               <Link
//                 to="/"
//                 className="
//                   group
//                   relative
//                   flex
//                   items-center
//                   gap-3
//                 "
//               >

//                 {/* LOGO GLOW */}

//                 <motion.div
//                   animate={{
//                     scale: [
//                       1,
//                       1.12,
//                       1,
//                     ],
//                     opacity: [
//                       0.12,
//                       0.25,
//                       0.12,
//                     ],
//                   }}
//                   transition={{
//                     duration: 4,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                   }}
//                   className="
//                     absolute
//                     -inset-4
//                     rounded-full
//                     bg-purple-600
//                     blur-2xl
//                   "
//                 />

//                 {/* LOGO ICON */}

//                 <motion.div
//                   whileHover={{
//                     scale: 1.08,
//                     rotate: 5,
//                   }}
//                   whileTap={{
//                     scale: 0.95,
//                   }}
//                   transition={{
//                     type: "spring",
//                     stiffness: 400,
//                     damping: 16,
//                   }}
//                   className="
//                     relative
//                     flex
//                     h-10
//                     w-10
//                     items-center
//                     justify-center
//                     overflow-hidden
//                     rounded-xl
//                     border
//                     border-purple-300/20
//                     bg-gradient-to-br
//                     from-purple-600
//                     via-violet-600
//                     to-indigo-700
//                     shadow-[0_0_30px_rgba(139,92,246,0.35)]
//                   "
//                 >

//                   {/* ICON SHINE */}

//                   <motion.div
//                     animate={{
//                       x: [
//                         "-150%",
//                         "150%",
//                       ],
//                     }}
//                     transition={{
//                       duration: 2.5,
//                       repeat: Infinity,
//                       repeatDelay: 3,
//                       ease: "easeInOut",
//                     }}
//                     className="
//                       absolute
//                       inset-y-0
//                       w-7
//                       rotate-12
//                       bg-gradient-to-r
//                       from-transparent
//                       via-white/40
//                       to-transparent
//                       blur-sm
//                     "
//                   />

//                   <Play
//                     size={17}
//                     fill="white"
//                     className="
//                       relative
//                       z-10
//                       text-white
//                     "
//                   />

//                 </motion.div>

//                 {/* LOGO TEXT */}

//                 <div className="relative">

//                   <div
//                     className="
//                       text-[19px]
//                       font-black
//                       tracking-[-1px]
//                       text-white
//                     "
//                   >
//                     AMIT
//                     <span
//                       className="
//                         bg-gradient-to-r
//                         from-purple-400
//                         via-fuchsia-400
//                         to-indigo-400
//                         bg-clip-text
//                         text-transparent
//                       "
//                     >
//                       VERSE
//                     </span>
//                   </div>

//                   <div
//                     className="
//                       mt-[-2px]
//                       flex
//                       items-center
//                       gap-1
//                       text-[7px]
//                       font-bold
//                       uppercase
//                       tracking-[2.5px]
//                       text-white/25
//                     "
//                   >
//                     <Sparkles size={7} />
//                     Streaming Universe
//                   </div>

//                 </div>

//               </Link>

//               {/* =================================================
//                   DESKTOP NAV
//               ================================================= */}

//               <nav
//                 className="
//                   absolute
//                   left-1/2
//                   hidden
//                   -translate-x-1/2
//                   items-center
//                   gap-1
//                   lg:flex
//                 "
//               >

//                 {navItems.map(
//                   (item) => (
//                     <NavLink
//                       key={item.path}
//                       to={item.path}
//                       end={
//                         item.path === "/"
//                       }
//                       className="
//                         group
//                         relative
//                         px-4
//                         py-3
//                       "
//                     >

//                       {({
//                         isActive,
//                       }) => (
//                         <>
//                           {/* HOVER GLASS */}

//                           <span
//                             className="
//                               absolute
//                               inset-0
//                               rounded-xl
//                               bg-white/[0.035]
//                               opacity-0
//                               transition-all
//                               duration-300
//                               group-hover:opacity-100
//                             "
//                           />

//                           {/* TEXT */}

//                           <span
//                             className={`
//                               relative
//                               z-10
//                               text-[13px]
//                               font-semibold
//                               transition-all
//                               duration-300
//                               ${
//                                 isActive
//                                   ? "text-white"
//                                   : "text-white/45 group-hover:text-white/85"
//                               }
//                             `}
//                           >
//                             {item.name}
//                           </span>

//                           {/* ACTIVE */}

//                           {isActive && (
//                             <motion.div
//                               layoutId="navActive"
//                               transition={{
//                                 type: "spring",
//                                 stiffness: 400,
//                                 damping: 30,
//                               }}
//                               className="
//                                 absolute
//                                 bottom-0
//                                 left-1/2
//                                 h-[2px]
//                                 w-5
//                                 -translate-x-1/2
//                                 rounded-full
//                                 bg-gradient-to-r
//                                 from-purple-400
//                                 to-fuchsia-400
//                                 shadow-[0_0_14px_rgba(168,85,247,0.9)]
//                               "
//                             />
//                           )}

//                         </>
//                       )}

//                     </NavLink>
//                   )
//                 )}

//                 {/* GENRES */}

//                 <button
//                   className="
//                     group
//                     flex
//                     items-center
//                     gap-1
//                     rounded-xl
//                     px-4
//                     py-3
//                     text-[13px]
//                     font-semibold
//                     text-white/45
//                     transition-all
//                     duration-300
//                     hover:bg-white/[0.035]
//                     hover:text-white/85
//                   "
//                 >
//                   Genres

//                   <ChevronDown
//                     size={13}
//                     className="
//                       transition-transform
//                       duration-300
//                       group-hover:translate-y-[2px]
//                     "
//                   />
//                 </button>

//               </nav>

//               {/* =================================================
//                   RIGHT ACTIONS
//               ================================================= */}

//               <div
//                 className="
//                   flex
//                   items-center
//                   gap-2
//                 "
//               >

//                 {/* SEARCH */}

//                 <AnimatePresence mode="wait">

//                   {!searchOpen ? (

//                     <motion.button
//                       key="search"
//                       initial={{
//                         opacity: 0,
//                         scale: 0.8,
//                       }}
//                       animate={{
//                         opacity: 1,
//                         scale: 1,
//                       }}
//                       exit={{
//                         opacity: 0,
//                         scale: 0.8,
//                       }}
//                       whileHover={{
//                         scale: 1.06,
//                       }}
//                       whileTap={{
//                         scale: 0.94,
//                       }}
//                       onClick={() =>
//                         setSearchOpen(
//                           true
//                         )
//                       }
//                       className="
//                         hidden
//                         h-10
//                         w-10
//                         items-center
//                         justify-center
//                         rounded-xl
//                         border
//                         border-white/[0.07]
//                         bg-white/[0.025]
//                         text-white/50
//                         transition-all
//                         duration-300
//                         hover:border-purple-400/25
//                         hover:bg-purple-500/[0.08]
//                         hover:text-purple-300
//                         sm:flex
//                       "
//                     >
//                       <Search size={18} />
//                     </motion.button>

//                   ) : (

//                     <motion.div
//                       key="input"
//                       initial={{
//                         width: 40,
//                         opacity: 0,
//                       }}
//                       animate={{
//                         width: 245,
//                         opacity: 1,
//                       }}
//                       exit={{
//                         width: 40,
//                         opacity: 0,
//                       }}
//                       transition={{
//                         duration: 0.35,
//                         ease: [
//                           0.22,
//                           1,
//                           0.36,
//                           1,
//                         ],
//                       }}
//                       className="
//                         hidden
//                         h-10
//                         items-center
//                         gap-2
//                         overflow-hidden
//                         rounded-xl
//                         border
//                         border-purple-400/20
//                         bg-black/30
//                         px-3
//                         shadow-[0_0_30px_rgba(139,92,246,0.1)]
//                         backdrop-blur-xl
//                         sm:flex
//                       "
//                     >

//                       <Search
//                         size={16}
//                         className="
//                           shrink-0
//                           text-purple-300
//                         "
//                       />

//                       <input
//                         autoFocus
//                         type="text"
//                         placeholder="Search anime..."
//                         className="
//                           min-w-0
//                           flex-1
//                           bg-transparent
//                           text-xs
//                           text-white
//                           outline-none
//                           placeholder:text-white/20
//                         "
//                       />

//                       <button
//                         onClick={() =>
//                           setSearchOpen(
//                             false
//                           )
//                         }
//                         className="
//                           text-white/30
//                           transition
//                           hover:text-white
//                         "
//                       >
//                         <X size={15} />
//                       </button>

//                     </motion.div>

//                   )}

//                 </AnimatePresence>

//                 {/* SIGN IN */}

//                 <Link
//                   to="/login"
//                   className="
//                     group
//                     relative
//                     hidden
//                     h-10
//                     items-center
//                     gap-2
//                     overflow-hidden
//                     rounded-xl
//                     border
//                     border-purple-400/20
//                     bg-gradient-to-r
//                     from-purple-600
//                     to-indigo-600
//                     px-4
//                     text-xs
//                     font-bold
//                     text-white
//                     shadow-[0_0_30px_rgba(124,58,237,0.2)]
//                     transition-all
//                     duration-300
//                     hover:-translate-y-0.5
//                     hover:border-purple-300/40
//                     hover:shadow-[0_0_40px_rgba(124,58,237,0.4)]
//                     sm:flex
//                   "
//                 >

//                   {/* BUTTON SHINE */}

//                   <motion.div
//                     animate={{
//                       x: [
//                         "-150%",
//                         "150%",
//                       ],
//                     }}
//                     transition={{
//                       duration: 2.5,
//                       repeat: Infinity,
//                       repeatDelay: 4,
//                       ease: "easeInOut",
//                     }}
//                     className="
//                       absolute
//                       inset-y-0
//                       w-8
//                       rotate-12
//                       bg-white/20
//                       blur-md
//                     "
//                   />

//                   <UserRound
//                     size={15}
//                     className="
//                       relative
//                       z-10
//                     "
//                   />

//                   <span className="relative z-10">
//                     Sign In
//                   </span>

//                 </Link>

//                 {/* MOBILE BUTTON */}

//                 <motion.button
//                   whileTap={{
//                     scale: 0.9,
//                   }}
//                   onClick={() =>
//                     setMobileOpen(
//                       !mobileOpen
//                     )
//                   }
//                   className="
//                     flex
//                     h-10
//                     w-10
//                     items-center
//                     justify-center
//                     rounded-xl
//                     border
//                     border-white/[0.07]
//                     bg-white/[0.025]
//                     text-white/65
//                     transition-all
//                     hover:border-purple-400/25
//                     hover:text-white
//                     lg:hidden
//                   "
//                 >

//                   <AnimatePresence
//                     mode="wait"
//                     initial={false}
//                   >

//                     {mobileOpen ? (

//                       <motion.div
//                         key="close"
//                         initial={{
//                           rotate: -90,
//                           opacity: 0,
//                         }}
//                         animate={{
//                           rotate: 0,
//                           opacity: 1,
//                         }}
//                         exit={{
//                           rotate: 90,
//                           opacity: 0,
//                         }}
//                       >
//                         <X size={20} />
//                       </motion.div>

//                     ) : (

//                       <motion.div
//                         key="menu"
//                         initial={{
//                           rotate: 90,
//                           opacity: 0,
//                         }}
//                         animate={{
//                           rotate: 0,
//                           opacity: 1,
//                         }}
//                         exit={{
//                           rotate: -90,
//                           opacity: 0,
//                         }}
//                       >
//                         <Menu size={20} />
//                       </motion.div>

//                     )}

//                   </AnimatePresence>

//                 </motion.button>

//               </div>

//             </div>

//           </motion.div>

//         </div>

//       </motion.header>

//       {/* =================================================
//           MOBILE MENU
//       ================================================= */}

//       <AnimatePresence>
//         {mobileOpen && (
//           <>
//             {/* BACKDROP */}

//             <motion.div
//               initial={{
//                 opacity: 0,
//               }}
//               animate={{
//                 opacity: 1,
//               }}
//               exit={{
//                 opacity: 0,
//               }}
//               onClick={() =>
//                 setMobileOpen(
//                   false
//                 )
//               }
//               className="
//                 fixed
//                 inset-0
//                 z-[90]
//                 bg-black/70
//                 backdrop-blur-md
//                 lg:hidden
//               "
//             />

//             {/* PANEL */}

//             <motion.div
//               initial={{
//                 opacity: 0,
//                 y: -20,
//                 scale: 0.97,
//               }}
//               animate={{
//                 opacity: 1,
//                 y: 0,
//                 scale: 1,
//               }}
//               exit={{
//                 opacity: 0,
//                 y: -20,
//                 scale: 0.97,
//               }}
//               transition={{
//                 duration: 0.35,
//                 ease: [
//                   0.22,
//                   1,
//                   0.36,
//                   1,
//                 ],
//               }}
//               className="
//                 fixed
//                 left-4
//                 right-4
//                 top-[92px]
//                 z-[95]
//                 overflow-hidden
//                 rounded-2xl
//                 border
//                 border-white/[0.08]
//                 bg-[#07060c]/95
//                 p-3
//                 shadow-[0_30px_100px_rgba(0,0,0,0.75)]
//                 backdrop-blur-2xl
//                 lg:hidden
//               "
//             >

//               {/* GLOW */}

//               <div
//                 className="
//                   pointer-events-none
//                   absolute
//                   -right-20
//                   -top-20
//                   h-56
//                   w-56
//                   rounded-full
//                   bg-purple-600/15
//                   blur-[90px]
//                 "
//               />

//               <div className="relative space-y-1">

//                 {navItems.map(
//                   (item, index) => (
//                     <motion.div
//                       key={item.path}
//                       initial={{
//                         opacity: 0,
//                         x: -20,
//                       }}
//                       animate={{
//                         opacity: 1,
//                         x: 0,
//                       }}
//                       transition={{
//                         delay:
//                           index *
//                           0.06,
//                       }}
//                     >

//                       <NavLink
//                         to={
//                           item.path
//                         }
//                         end={
//                           item.path ===
//                           "/"
//                         }
//                         className={({
//                           isActive,
//                         }) => `
//                           flex
//                           items-center
//                           justify-between
//                           rounded-xl
//                           px-4
//                           py-3.5
//                           text-sm
//                           font-semibold
//                           transition-all
//                           ${
//                             isActive
//                               ? "border border-purple-400/10 bg-purple-500/[0.08] text-white"
//                               : "text-white/45 hover:bg-white/[0.035] hover:text-white"
//                           }
//                         `}
//                       >

//                         <span>
//                           {item.name}
//                         </span>

//                         <span
//                           className="
//                             text-[9px]
//                             font-bold
//                             tracking-widest
//                             text-white/20
//                           "
//                         >
//                           0
//                           {index +
//                             1}
//                         </span>

//                       </NavLink>

//                     </motion.div>
//                   )
//                 )}

//                 {/* SIGN IN */}

//                 <Link
//                   to="/login"
//                   className="
//                     mt-2
//                     flex
//                     items-center
//                     justify-center
//                     gap-2
//                     rounded-xl
//                     border
//                     border-purple-400/20
//                     bg-gradient-to-r
//                     from-purple-600
//                     to-indigo-600
//                     px-4
//                     py-3.5
//                     text-sm
//                     font-bold
//                     text-white
//                     shadow-[0_0_30px_rgba(124,58,237,0.2)]
//                   "
//                 >
//                   <UserRound size={16} />
//                   Sign In
//                 </Link>

//               </div>

//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }

// export default Navbar;

import { useEffect, useState } from "react";

import {
  Search,
  Menu,
  X,
  Play,
  UserRound,
  Sparkles,
  ChevronDown,
} from "lucide-react";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import {
  Link,
  NavLink,
  useLocation,
  useNavigate,
} from "react-router-dom";

/* =========================================================
   NAV ITEMS
========================================================= */

const navItems = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Anime",
    path: "/anime",
  },
  {
    name: "Movies",
    path: "/movies",
  },
  {
    name: "Trending",
    path: "/trending",
  },
];

/* =========================================================
   NAVBAR
========================================================= */

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const [mobileOpen, setMobileOpen] =
    useState(false);

  const [searchOpen, setSearchOpen] =
    useState(false);

  const [searchQuery, setSearchQuery] =
    useState("");

  const location = useLocation();

  const navigate = useNavigate();

  /* =======================================================
     SCROLL EFFECT
  ======================================================= */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  /* =======================================================
     ROUTE CHANGE
  ======================================================= */

  useEffect(() => {
    setMobileOpen(false);
    setSearchOpen(false);
  }, [location.pathname]);

  /* =======================================================
     SEARCH
  ======================================================= */

  const handleSearch = (e) => {
    e.preventDefault();

    const query = searchQuery.trim();

    if (!query) {
      navigate("/search");
      return;
    }

    navigate(
      `/search?q=${encodeURIComponent(query)}`
    );

    setSearchOpen(false);
  };

  /* =======================================================
     OPEN SEARCH
  ======================================================= */

  const openSearch = () => {
    setSearchOpen(true);
    setMobileOpen(false);
  };

  /* =======================================================
     CLOSE SEARCH
  ======================================================= */

  const closeSearch = () => {
    setSearchOpen(false);
  };

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <>
      {/* =====================================================
          AMBIENT NAVBAR LIGHT
      ===================================================== */}

      <div
        className="
          pointer-events-none
          fixed
          left-0
          right-0
          top-0
          z-[80]
          h-32
        "
      >

        {/* CENTER GLOW */}

        <motion.div
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.08, 0.16, 0.08],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-1/2
            top-[-100px]
            h-64
            w-[600px]
            -translate-x-1/2
            rounded-full
            bg-purple-700/[0.14]
            blur-[110px]
          "
        />

        {/* LEFT GLOW */}

        <motion.div
          animate={{
            x: [0, 20, 0],
            opacity: [0.03, 0.08, 0.03],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-[10%]
            top-[-80px]
            h-40
            w-40
            rounded-full
            bg-fuchsia-600/[0.06]
            blur-[90px]
          "
        />

        {/* RIGHT GLOW */}

        <motion.div
          animate={{
            x: [0, -20, 0],
            opacity: [0.03, 0.08, 0.03],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            right-[10%]
            top-[-80px]
            h-40
            w-40
            rounded-full
            bg-indigo-600/[0.06]
            blur-[90px]
          "
        />

      </div>

      {/* =====================================================
          MAIN NAVBAR
      ===================================================== */}

      <motion.header
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          fixed
          left-0
          top-0
          z-[100]
          w-full
        "
      >

        {/* ===================================================
            TOP LIGHT LINE
        =================================================== */}

        <motion.div
          initial={{
            scaleX: 0,
            opacity: 0,
          }}
          animate={{
            scaleX: 1,
            opacity: 1,
          }}
          transition={{
            delay: 0.5,
            duration: 1.2,
          }}
          className="
            absolute
            left-1/2
            top-0
            h-px
            w-[45%]
            -translate-x-1/2
            origin-center
            bg-gradient-to-r
            from-transparent
            via-purple-400/80
            to-transparent
            shadow-[0_0_15px_rgba(168,85,247,0.8)]
          "
        />

        {/* ===================================================
            CONTAINER
        =================================================== */}

        <div
          className="
            mx-auto
            max-w-[1500px]
            px-4
            pt-3
            sm:px-6
            lg:px-8
          "
        >

          {/* =================================================
              GLASS PANEL
          ================================================= */}

          <motion.div
            animate={{
              y: scrolled ? 0 : 2,
            }}
            transition={{
              duration: 0.5,
            }}
            className={`
              relative
              overflow-hidden
              rounded-2xl
              border
              transition-all
              duration-700
              backdrop-blur-2xl
              ${
                scrolled
                  ? `
                    border-white/[0.10]
                    bg-[#06050a]/80
                    shadow-[0_20px_80px_rgba(0,0,0,0.45)]
                  `
                  : `
                    border-white/[0.06]
                    bg-[#050409]/55
                    shadow-[0_15px_60px_rgba(0,0,0,0.25)]
                  `
              }
            `}
          >

            {/* GLASS REFLECTION */}

            <div
              className="
                pointer-events-none
                absolute
                inset-x-0
                top-0
                h-20
                bg-gradient-to-b
                from-white/[0.045]
                to-transparent
              "
            />

            {/* INNER PURPLE LINE */}

            <div
              className="
                pointer-events-none
                absolute
                inset-x-[15%]
                top-0
                h-px
                bg-gradient-to-r
                from-transparent
                via-purple-400/30
                to-transparent
              "
            />

            {/* MOVING LIGHT */}

            <motion.div
              animate={{
                x: [
                  "-150%",
                  "250%",
                ],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                pointer-events-none
                absolute
                top-0
                h-px
                w-40
                bg-gradient-to-r
                from-transparent
                via-white/50
                to-transparent
                blur-[1px]
              "
            />

            {/* =================================================
                NAV CONTENT
            ================================================= */}

            <div
              className={`
                relative
                flex
                items-center
                justify-between
                px-4
                transition-all
                duration-500
                sm:px-6
                ${
                  scrolled
                    ? "h-[66px]"
                    : "h-[74px]"
                }
              `}
            >

              {/* =================================================
                  LOGO
              ================================================= */}

              <Link
                to="/"
                className="
                  group
                  relative
                  flex
                  items-center
                  gap-3
                "
              >

                {/* LOGO GLOW */}

                <motion.div
                  animate={{
                    scale: [
                      1,
                      1.12,
                      1,
                    ],
                    opacity: [
                      0.12,
                      0.25,
                      0.12,
                    ],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    absolute
                    -inset-4
                    rounded-full
                    bg-purple-600
                    blur-2xl
                  "
                />

                {/* LOGO */}

                <motion.div
                  whileHover={{
                    scale: 1.08,
                    rotate: 5,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 16,
                  }}
                  className="
                    relative
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-xl
                    border
                    border-purple-300/20
                    bg-gradient-to-br
                    from-purple-600
                    via-violet-600
                    to-indigo-700
                    shadow-[0_0_30px_rgba(139,92,246,0.35)]
                  "
                >

                  {/* LOGO SHINE */}

                  <motion.div
                    animate={{
                      x: [
                        "-150%",
                        "150%",
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
                      w-7
                      rotate-12
                      bg-gradient-to-r
                      from-transparent
                      via-white/40
                      to-transparent
                      blur-sm
                    "
                  />

                  <Play
                    size={17}
                    fill="white"
                    className="
                      relative
                      z-10
                      text-white
                    "
                  />

                </motion.div>

                {/* LOGO TEXT */}

                <div className="relative">

                  <div
                    className="
                      text-[19px]
                      font-black
                      tracking-[-1px]
                      text-white
                    "
                  >
                    AMIT
                    <span
                      className="
                        bg-gradient-to-r
                        from-purple-400
                        via-fuchsia-400
                        to-indigo-400
                        bg-clip-text
                        text-transparent
                      "
                    >
                      VERSE
                    </span>
                  </div>

                  <div
                    className="
                      mt-[-2px]
                      flex
                      items-center
                      gap-1
                      text-[7px]
                      font-bold
                      uppercase
                      tracking-[2.5px]
                      text-white/25
                    "
                  >
                    <Sparkles size={7} />

                    Streaming Universe
                  </div>

                </div>

              </Link>

              {/* =================================================
                  DESKTOP NAV
              ================================================= */}

              <nav
                className="
                  absolute
                  left-1/2
                  hidden
                  -translate-x-1/2
                  items-center
                  gap-1
                  lg:flex
                "
              >

                {navItems.map(
                  (item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      end={
                        item.path === "/"
                      }
                      className="
                        group
                        relative
                        px-4
                        py-3
                      "
                    >

                      {({
                        isActive,
                      }) => (
                        <>
                          {/* HOVER */}

                          <span
                            className="
                              absolute
                              inset-0
                              rounded-xl
                              bg-white/[0.035]
                              opacity-0
                              transition-all
                              duration-300
                              group-hover:opacity-100
                            "
                          />

                          {/* TEXT */}

                          <span
                            className={`
                              relative
                              z-10
                              text-[13px]
                              font-semibold
                              transition-all
                              duration-300
                              ${
                                isActive
                                  ? "text-white"
                                  : "text-white/45 group-hover:text-white/85"
                              }
                            `}
                          >
                            {item.name}
                          </span>

                          {/* ACTIVE */}

                          {isActive && (
                            <motion.div
                              layoutId="navActive"
                              transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 30,
                              }}
                              className="
                                absolute
                                bottom-0
                                left-1/2
                                h-[2px]
                                w-5
                                -translate-x-1/2
                                rounded-full
                                bg-gradient-to-r
                                from-purple-400
                                to-fuchsia-400
                                shadow-[0_0_14px_rgba(168,85,247,0.9)]
                              "
                            />
                          )}

                        </>
                      )}

                    </NavLink>
                  )
                )}

                {/* GENRES */}

                <button
                  type="button"
                  className="
                    group
                    flex
                    items-center
                    gap-1
                    rounded-xl
                    px-4
                    py-3
                    text-[13px]
                    font-semibold
                    text-white/45
                    transition-all
                    duration-300
                    hover:bg-white/[0.035]
                    hover:text-white/85
                  "
                >
                  Genres

                  <ChevronDown
                    size={13}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-y-[2px]
                    "
                  />

                </button>

              </nav>

              {/* =================================================
                  RIGHT ACTIONS
              ================================================= */}

              <div
                className="
                  flex
                  items-center
                  gap-2
                "
              >

                {/* =================================================
                    DESKTOP SEARCH
                ================================================= */}

                <AnimatePresence mode="wait">

                  {!searchOpen ? (

                    <motion.button
                      key="search"
                      type="button"
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
                      whileHover={{
                        scale: 1.06,
                      }}
                      whileTap={{
                        scale: 0.94,
                      }}
                      onClick={openSearch}
                      className="
                        hidden
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-white/[0.07]
                        bg-white/[0.025]
                        text-white/50
                        transition-all
                        duration-300
                        hover:border-purple-400/25
                        hover:bg-purple-500/[0.08]
                        hover:text-purple-300
                        sm:flex
                      "
                      aria-label="Open search"
                    >

                      <Search size={18} />

                    </motion.button>

                  ) : (

                    <motion.form
                      key="input"
                      onSubmit={handleSearch}
                      initial={{
                        width: 40,
                        opacity: 0,
                      }}
                      animate={{
                        width: 280,
                        opacity: 1,
                      }}
                      exit={{
                        width: 40,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.35,
                        ease: [
                          0.22,
                          1,
                          0.36,
                          1,
                        ],
                      }}
                      className="
                        hidden
                        h-10
                        items-center
                        gap-2
                        overflow-hidden
                        rounded-xl
                        border
                        border-purple-400/20
                        bg-black/30
                        px-3
                        shadow-[0_0_30px_rgba(139,92,246,0.1)]
                        backdrop-blur-xl
                        sm:flex
                      "
                    >

                      <Search
                        size={16}
                        className="
                          shrink-0
                          text-purple-300
                        "
                      />

                      <input
                        autoFocus
                        type="text"
                        value={searchQuery}
                        onChange={(e) =>
                          setSearchQuery(
                            e.target.value
                          )
                        }
                        placeholder="Search anime & movies..."
                        className="
                          min-w-0
                          flex-1
                          bg-transparent
                          text-xs
                          text-white
                          outline-none
                          placeholder:text-white/20
                        "
                      />

                      {/* SEARCH SUBMIT */}

                      <button
                        type="submit"
                        className="
                          hidden
                          text-[8px]
                          font-bold
                          uppercase
                          tracking-wider
                          text-purple-300/60
                          transition
                          hover:text-purple-200
                          md:block
                        "
                      >
                        Enter
                      </button>

                      {/* CLOSE */}

                      <button
                        type="button"
                        onClick={closeSearch}
                        className="
                          shrink-0
                          text-white/30
                          transition
                          hover:text-white
                        "
                        aria-label="Close search"
                      >
                        <X size={15} />
                      </button>

                    </motion.form>

                  )}

                </AnimatePresence>

                {/* =================================================
                    SIGN IN
                ================================================= */}

                <Link
                  to="/login"
                  className="
                    group
                    relative
                    hidden
                    h-10
                    items-center
                    gap-2
                    overflow-hidden
                    rounded-xl
                    border
                    border-purple-400/20
                    bg-gradient-to-r
                    from-purple-600
                    to-indigo-600
                    px-4
                    text-xs
                    font-bold
                    text-white
                    shadow-[0_0_30px_rgba(124,58,237,0.2)]
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:border-purple-300/40
                    hover:shadow-[0_0_40px_rgba(124,58,237,0.4)]
                    sm:flex
                  "
                >

                  {/* BUTTON SHINE */}

                  <motion.div
                    animate={{
                      x: [
                        "-150%",
                        "150%",
                      ],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      repeatDelay: 4,
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

                  <UserRound
                    size={15}
                    className="
                      relative
                      z-10
                    "
                  />

                  <span className="relative z-10">
                    Sign In
                  </span>

                </Link>

                {/* =================================================
                    MOBILE MENU BUTTON
                ================================================= */}

                <motion.button
                  type="button"
                  whileTap={{
                    scale: 0.9,
                  }}
                  onClick={() =>
                    setMobileOpen(
                      !mobileOpen
                    )
                  }
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-white/[0.07]
                    bg-white/[0.025]
                    text-white/65
                    transition-all
                    hover:border-purple-400/25
                    hover:text-white
                    lg:hidden
                  "
                  aria-label="Toggle menu"
                >

                  <AnimatePresence
                    mode="wait"
                    initial={false}
                  >

                    {mobileOpen ? (

                      <motion.div
                        key="close"
                        initial={{
                          rotate: -90,
                          opacity: 0,
                        }}
                        animate={{
                          rotate: 0,
                          opacity: 1,
                        }}
                        exit={{
                          rotate: 90,
                          opacity: 0,
                        }}
                      >
                        <X size={20} />
                      </motion.div>

                    ) : (

                      <motion.div
                        key="menu"
                        initial={{
                          rotate: 90,
                          opacity: 0,
                        }}
                        animate={{
                          rotate: 0,
                          opacity: 1,
                        }}
                        exit={{
                          rotate: -90,
                          opacity: 0,
                        }}
                      >
                        <Menu size={20} />
                      </motion.div>

                    )}

                  </AnimatePresence>

                </motion.button>

              </div>

            </div>

          </motion.div>

        </div>

      </motion.header>

      {/* =========================================================
          MOBILE MENU
      ========================================================= */}

      <AnimatePresence>

        {mobileOpen && (
          <>

            {/* BACKDROP */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              onClick={() =>
                setMobileOpen(false)
              }
              className="
                fixed
                inset-0
                z-[90]
                bg-black/70
                backdrop-blur-md
                lg:hidden
              "
            />

            {/* PANEL */}

            <motion.div
              initial={{
                opacity: 0,
                y: -20,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -20,
                scale: 0.97,
              }}
              transition={{
                duration: 0.35,
                ease: [
                  0.22,
                  1,
                  0.36,
                  1,
                ],
              }}
              className="
                fixed
                left-4
                right-4
                top-[92px]
                z-[95]
                overflow-hidden
                rounded-2xl
                border
                border-white/[0.08]
                bg-[#07060c]/95
                p-3
                shadow-[0_30px_100px_rgba(0,0,0,0.75)]
                backdrop-blur-2xl
                lg:hidden
              "
            >

              {/* PANEL GLOW */}

              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.08, 0.15, 0.08],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  pointer-events-none
                  absolute
                  -right-20
                  -top-20
                  h-56
                  w-56
                  rounded-full
                  bg-purple-600/15
                  blur-[90px]
                "
              />

              <div className="relative space-y-1">

                {/* =================================================
                    MOBILE SEARCH
                ================================================= */}

                <form
                  onSubmit={handleSearch}
                  className="
                    mb-3
                    flex
                    items-center
                    gap-2
                    rounded-xl
                    border
                    border-purple-400/10
                    bg-white/[0.025]
                    px-3
                    py-2
                    backdrop-blur-xl
                  "
                >

                  <Search
                    size={16}
                    className="
                      shrink-0
                      text-purple-300/70
                    "
                  />

                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) =>
                      setSearchQuery(
                        e.target.value
                      )
                    }
                    placeholder="Search anime & movies..."
                    className="
                      min-w-0
                      flex-1
                      bg-transparent
                      py-2
                      text-xs
                      text-white
                      outline-none
                      placeholder:text-white/20
                    "
                  />

                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() =>
                        setSearchQuery("")
                      }
                      className="
                        text-white/30
                        hover:text-white
                      "
                    >
                      <X size={14} />
                    </button>
                  )}

                </form>

                {/* =================================================
                    MOBILE NAV ITEMS
                ================================================= */}

                {navItems.map(
                  (item, index) => (
                    <motion.div
                      key={item.path}
                      initial={{
                        opacity: 0,
                        x: -20,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay:
                          index * 0.06,
                      }}
                    >

                      <NavLink
                        to={item.path}
                        end={
                          item.path === "/"
                        }
                        className={({
                          isActive,
                        }) => `
                          flex
                          items-center
                          justify-between
                          rounded-xl
                          px-4
                          py-3.5
                          text-sm
                          font-semibold
                          transition-all
                          ${
                            isActive
                              ? "border border-purple-400/10 bg-purple-500/[0.08] text-white shadow-[0_0_25px_rgba(139,92,246,0.08)]"
                              : "text-white/45 hover:bg-white/[0.035] hover:text-white"
                          }
                        `
                        }
                      >

                        <span>
                          {item.name}
                        </span>

                        <span
                          className="
                            text-[9px]
                            font-bold
                            tracking-widest
                            text-white/20
                          "
                        >
                          0
                          {index + 1}
                        </span>

                      </NavLink>

                    </motion.div>
                  )
                )}

                {/* =================================================
                    MOBILE GENRES
                ================================================= */}

                <button
                  type="button"
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    rounded-xl
                    px-4
                    py-3.5
                    text-sm
                    font-semibold
                    text-white/45
                    transition-all
                    hover:bg-white/[0.035]
                    hover:text-white
                  "
                >

                  <span>
                    Genres
                  </span>

                  <ChevronDown
                    size={16}
                    className="text-white/25"
                  />

                </button>

                {/* =================================================
                    MOBILE SIGN IN
                ================================================= */}

                <Link
                  to="/login"
                  className="
                    mt-2
                    flex
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    border
                    border-purple-400/20
                    bg-gradient-to-r
                    from-purple-600
                    to-indigo-600
                    px-4
                    py-3.5
                    text-sm
                    font-bold
                    text-white
                    shadow-[0_0_30px_rgba(124,58,237,0.2)]
                  "
                >

                  <UserRound size={16} />

                  Sign In

                </Link>

              </div>

            </motion.div>

          </>
        )}

      </AnimatePresence>
    </>
  );
}

export default Navbar;
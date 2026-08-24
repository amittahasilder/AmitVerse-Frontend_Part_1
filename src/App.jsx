// function App() {
//   return (
//     <div className="min-h-screen bg-[#030305] text-white flex items-center justify-center">
//       <h1 className="text-5xl font-black text-purple-500">
//         AMITVERSE
//       </h1>
//     </div>
//   );
// }

// export default App;






import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Anime from "./pages/Anime/Anime";
import Movies from "./pages/Movies/Movies";
import Trending from "./pages/Trending/Trending";
import Search from "./pages/Search/Search";
import Details from "./pages/Details/Details";
import Watch from "./pages/Watch/Watch";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/anime" element={<Anime />} />

        <Route path="/movies" element={<Movies />} />

        <Route path="/trending" element={<Trending />} />

        <Route path="/search" element={<Search />} />

        <Route path="/details/:id" element={<Details />} />

        <Route path="/watch/:id" element={<Watch />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/profile" element={<Profile />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
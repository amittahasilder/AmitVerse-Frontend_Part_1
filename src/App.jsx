




import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Anime from "./pages/Anime/Anime";
import Movies from "./pages/Movies/Movies";
import Trending from "./pages/Trending/Trending";
import Search from "./pages/Search/Search";
import Details from "./pages/Details/Details";
import Watch from "./pages/Watch/Watch";
import Watchlist from "./pages/Watchlist/Watchlist";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* HOMEeee */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* CONTENT */}
        <Route
          path="/anime"
          element={<Anime />}
        />

        <Route
          path="/movies"
          element={<Movies />}
        />

        <Route
          path="/trending"
          element={<Trending />}
        />

        <Route
          path="/search"
          element={<Search />}
        />

        {/* DETAILS */}
        <Route
          path="/details/:id"
          element={<Details />}
        />

        {/* WATCH */}
        <Route
          path="/watch/:id"
          element={<Watch />}
        />

        {/* ⭐ WATCHLIST */}
        <Route
          path="/watchlist"
          element={<Watchlist />}
        />

        {/* AUTH */}
        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/signup"
          element={<Signup />}
        />

        {/* PROFILE */}
        <Route
          path="/profile"
          element={<Profile />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
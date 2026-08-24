import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import TrendingAnime from "../../components/TrendingAnime/TrendingAnime";
import ContinueWatching from "../../components/ContinueWatching/ContinueWatching";
import LatestReleases from "../../components/LatestReleases/LatestReleases";
import PremiumMovies from "../../components/PremiumMovies/PremiumMovies";
import Genres from "../../components/Genres/Genres";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <main className="min-h-screen bg-[#020203] text-white">

      <Navbar />

      <Hero />

      <TrendingAnime />

      <ContinueWatching />

      <LatestReleases />

      <PremiumMovies />

      <Genres />

      <Footer />

    </main>
  );
}

export default Home;
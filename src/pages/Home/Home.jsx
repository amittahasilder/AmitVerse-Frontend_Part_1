import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import TrendingAnime from "../../components/TrendingAnime/TrendingAnime";
import ContinueWatching from "../../components/ContinueWatching/ContinueWatching";

function Home() {
  return (
    <main className="min-h-screen bg-[#020203] text-white">

      <Navbar />

      <Hero />

      <TrendingAnime />

      <ContinueWatching />

    </main>
  );
}

export default Home;
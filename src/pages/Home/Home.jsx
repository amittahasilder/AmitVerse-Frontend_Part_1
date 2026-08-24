import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";

function Home() {
  return (
    <main className="min-h-screen bg-[#020203] text-white">
      <Navbar />
      <Hero />
    </main>
  );
}

export default Home;
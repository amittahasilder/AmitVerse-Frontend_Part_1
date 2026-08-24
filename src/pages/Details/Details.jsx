import { useParams } from "react-router-dom";

function Details() {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-[#030305] text-white">
      <h1 className="p-10 text-4xl font-black">
        Anime Details
      </h1>

      <p className="px-10 text-zinc-400">
        Anime ID: {id}
      </p>
    </div>
  );
}

export default Details;
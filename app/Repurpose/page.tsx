import Navbar from "../../components/Navbar";

export default function Repurpose() {
  return (
    <>
      <Navbar />

      <main className="p-10">
        <h1 className="text-4xl font-bold mb-8">
          Content Repurposing Engine
        </h1>

        <textarea
          placeholder="Paste your transcript here..."
          className="w-full border p-4 rounded-lg h-40"
        />

        <button className="mt-4 bg-black text-white px-6 py-3 rounded-lg">
          Generate
        </button>

        <div className="grid md:grid-cols-2 gap-6 mt-10">
          <div className="border rounded-xl p-6">
            LinkedIn Post
          </div>

          <div className="border rounded-xl p-6">
            Twitter Thread
          </div>

          <div className="border rounded-xl p-6">
            Instagram Caption
          </div>

          <div className="border rounded-xl p-6">
            Blog Outline
          </div>
        </div>
      </main>
    </>
  );
}
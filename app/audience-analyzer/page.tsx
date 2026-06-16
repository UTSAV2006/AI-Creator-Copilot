import Navbar from "../../components/Navbar";

export default function AudienceAnalyzer() {
  return (
    <>
      <Navbar />

      <main className="p-10">
        <h1 className="text-4xl font-bold mb-8">
          Audience Confusion Analyzer
        </h1>

        <textarea
          placeholder="Paste audience comments..."
          className="w-full border p-4 rounded-lg h-40"
        />

        <button className="mt-4 bg-black text-white px-6 py-3 rounded-lg">
          Analyze
        </button>

        <div className="mt-8 border rounded-xl p-6">
          <h2 className="text-2xl font-bold">
            Confusion Score: 72%
          </h2>

          <ul className="mt-4 list-disc ml-6">
            <li>Clarify introduction</li>
            <li>Add examples</li>
            <li>Simplify terminology</li>
          </ul>
        </div>
      </main>
    </>
  );
}
import Navbar from "../../components/Navbar";

export default function AudienceAnalyzer() {
  return (
    <>
      <Navbar />

      <main className="bg-slate-950 min-h-screen text-white p-10">
        <h1 className="text-4xl font-bold mb-2">
          Audience Confusion Analyzer
        </h1>

        <p className="text-slate-400 mb-8">
          Analyze audience comments and identify confusing content sections.
        </p>

        <textarea
          placeholder="Paste audience comments here..."
          className="w-full h-40 p-4 rounded-xl bg-slate-900 border border-slate-800 text-white"
        />

        <button className="mt-4 bg-white text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
          Analyze Comments
        </button>

        <div className="grid md:grid-cols-2 gap-6 mt-10">

          {/* Score Card */}

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <h2 className="text-xl font-bold mb-4">
              📊 Confusion Score
            </h2>

            <p className="text-6xl font-bold text-yellow-400">
              72%
            </p>

            <p className="text-slate-400 mt-2">
              High audience confusion detected.
            </p>
          </div>

          {/* Main Issue */}

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <h2 className="text-xl font-bold mb-4">
              🔍 Most Confusing Section
            </h2>

            <p className="text-slate-300">
              Viewers struggled to understand the explanation
              of content batching and scheduling workflows.
            </p>
          </div>

        </div>

        {/* Detected Issues */}

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 mt-6">

          <h2 className="text-xl font-bold mb-4">
            ⚠ Detected Issues
          </h2>

          <ul className="space-y-3 text-slate-300">
            <li>✓ Technical jargon used frequently</li>
            <li>✓ Not enough examples provided</li>
            <li>✓ Introduction too broad</li>
            <li>✓ Key takeaway buried near the end</li>
          </ul>

        </div>

        {/* AI Suggestions */}

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 mt-6">

          <h2 className="text-xl font-bold mb-4">
            🤖 AI Suggestions
          </h2>

          <ul className="space-y-3 text-slate-300">
            <li>• Add a real-world example before explaining batching</li>
            <li>• Simplify creator-specific terminology</li>
            <li>• Move key takeaways closer to the beginning</li>
            <li>• Break long explanations into shorter segments</li>
          </ul>

        </div>

      </main>
    </>
  );
}
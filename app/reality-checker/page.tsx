import Navbar from "../../components/Navbar";

export default function RealityChecker() {
  return (
    <>
      <Navbar />

      <main className="bg-slate-950 min-h-screen text-white p-10">
        <h1 className="text-4xl font-bold mb-2">
          Reality Checker
        </h1>

        <p className="text-slate-400 mb-8">
          Verify claims before publishing and avoid misinformation.
        </p>

        <textarea
          placeholder="Paste your script here..."
          className="w-full h-40 p-4 rounded-xl bg-slate-900 border border-slate-800 text-white"
        />

        <button className="mt-4 bg-white text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
          Analyze Script
        </button>

        {/* Results */}

        <div className="grid gap-6 mt-10">

          {/* Claim 1 */}

          <div className="bg-slate-900 border border-red-500 rounded-xl p-6">
            <h2 className="text-xl font-bold mb-3">
              ⚠ Unsupported Claim
            </h2>

            <p className="text-slate-300 mb-4">
              "95% of creators fail within 6 months."
            </p>

            <p className="text-red-400">
              Source could not be verified.
            </p>

            <p className="mt-2 text-slate-400">
              Recommendation: Add a trusted source or remove this statistic.
            </p>
          </div>

          {/* Claim 2 */}

          <div className="bg-slate-900 border border-yellow-500 rounded-xl p-6">
            <h2 className="text-xl font-bold mb-3">
              ⚠ Outdated Statistic
            </h2>

            <p className="text-slate-300 mb-4">
              "Instagram reach increased 200% in 2023."
            </p>

            <p className="text-yellow-400">
              Statistic may no longer be accurate.
            </p>

            <p className="mt-2 text-slate-400">
              Recommendation: Verify using the latest industry reports.
            </p>
          </div>

          {/* Overall Score */}

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <h2 className="text-xl font-bold mb-3">
              📊 Reliability Score
            </h2>

            <p className="text-5xl font-bold text-green-400">
              82%
            </p>

            <p className="text-slate-400 mt-2">
              Most claims appear credible, but 2 issues require review.
            </p>
          </div>

        </div>

      </main>
    </>
  );
}
import Navbar from "../../components/Navbar";

export default function Burnout() {
  return (
    <>
      <Navbar />

      <main className="bg-slate-950 min-h-screen text-white p-10">
        <h1 className="text-4xl font-bold mb-2">
          Burnout Risk Detection
        </h1>

        <p className="text-slate-400 mb-8">
          Analyze creator workload and predict burnout before it impacts growth.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <h2 className="text-slate-400">Sleep Hours</h2>
            <p className="text-4xl font-bold mt-2">5h</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <h2 className="text-slate-400">Stress Level</h2>
            <p className="text-4xl font-bold mt-2">8/10</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <h2 className="text-slate-400">Posting Frequency</h2>
            <p className="text-4xl font-bold mt-2">Daily</p>
          </div>

        </div>

        {/* Main Burnout Card */}

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 mb-8">

          <h2 className="text-2xl font-bold mb-4">
            🔥 Burnout Risk Score
          </h2>

          <p className="text-6xl font-bold text-red-500 mb-4">
            78%
          </p>

          <p className="text-slate-300">
            High burnout probability detected based on workload,
            posting frequency, and recovery time.
          </p>

        </div>

        {/* AI Recommendation */}

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-8">

          <h2 className="text-2xl font-bold mb-4">
            🤖 AI Recommendation
          </h2>

          <ul className="space-y-3 text-slate-300">
            <li>✅ Take a recovery day after every 2 publishing days</li>
            <li>✅ Batch content creation on weekends</li>
            <li>✅ Repurpose old content instead of creating new content daily</li>
            <li>✅ Reduce posting frequency by 20% next week</li>
          </ul>

        </div>

      </main>
    </>
  );
}
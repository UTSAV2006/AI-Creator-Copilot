import Navbar from "../../components/Navbar";

export default function Repurpose() {
  return (
    <>
      <Navbar />

      <main className="bg-slate-950 min-h-screen text-white p-10">
        <h1 className="text-4xl font-bold mb-2">
          Content Repurposing Engine
        </h1>

        <p className="text-slate-400 mb-8">
          Transform one piece of content into multiple formats instantly.
        </p>

        <textarea
          placeholder="Paste your video transcript here..."
          className="w-full h-40 p-4 rounded-xl bg-slate-900 border border-slate-800 text-white"
        />

        <button className="mt-4 bg-white text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
          Generate Content
        </button>

        {/* Outputs */}
        <div className="grid md:grid-cols-2 gap-6 mt-10">

          {/* LinkedIn */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <h2 className="text-xl font-bold mb-4">
              💼 LinkedIn Post
            </h2>

            <p className="text-slate-300">
              🚀 3 Ways Creators Can Avoid Burnout
              <br /><br />
              Consistency doesn't mean posting every day.
              Sustainable growth comes from systems, not hustle.
              <br /><br />
              1. Batch your content
              <br />
              2. Repurpose top performers
              <br />
              3. Schedule recovery days
              <br /><br />
              What's your strategy?
            </p>
          </div>

          {/* Thread */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <h2 className="text-xl font-bold mb-4">
              🧵 Twitter Thread
            </h2>

            <p className="text-slate-300">
              1. Most creators burn out because they confuse consistency with volume.
              <br /><br />
              2. Sustainable growth beats constant hustle.
              <br /><br />
              3. Systems &gt; Motivation.
              <br /><br />
              4. Repurpose content instead of creating from scratch.
            </p>
          </div>

          {/* Instagram */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <h2 className="text-xl font-bold mb-4">
              📸 Instagram Caption
            </h2>

            <p className="text-slate-300">
              Want to grow faster without burning out? 🚀
              <br /><br />
              Stop creating everything from scratch.
              Repurpose your best content and focus on consistency.
              <br /><br />
              Save this post for later 💡
            </p>
          </div>

          {/* Blog */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <h2 className="text-xl font-bold mb-4">
              📝 Blog Outline
            </h2>

            <ul className="list-disc ml-6 text-slate-300">
              <li>Introduction</li>
              <li>Why Creators Burn Out</li>
              <li>3 Proven Strategies to Stay Consistent</li>
              <li>Content Repurposing Framework</li>
              <li>Conclusion</li>
            </ul>
          </div>

        </div>
      </main>
    </>
  );
}
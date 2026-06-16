import Navbar from "../../components/Navbar";

export default function RealityChecker() {
  return (
    <>
      <Navbar />

      <main className="p-10">
        <h1 className="text-4xl font-bold mb-8">
          Reality Checker
        </h1>

        <textarea
          placeholder="Paste script here..."
          className="w-full border p-4 rounded-lg h-40"
        />

        <button className="mt-4 bg-black text-white px-6 py-3 rounded-lg">
          Analyze
        </button>

        <div className="mt-8 border rounded-xl p-6">
          <p>⚠ Unsupported Claim Found</p>
          <p>⚠ Statistic May Be Outdated</p>
        </div>
      </main>
    </>
  );
}
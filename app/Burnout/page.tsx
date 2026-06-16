import Navbar from "../../components/Navbar";

export default function Burnout() {
  return (
    <>
      <Navbar />

      <main className="p-10">
        <h1 className="text-4xl font-bold mb-8">
          Burnout Risk Detection
        </h1>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="border rounded-xl p-6">
            Sleep Hours: 5
          </div>

          <div className="border rounded-xl p-6">
            Stress Level: 8
          </div>

          <div className="border rounded-xl p-6">
            Workload: High
          </div>

        </div>

        <div className="mt-10 border rounded-xl p-6">
          <h2 className="text-2xl font-bold">
            Burnout Risk: 78%
          </h2>

          <p className="mt-4">
            Recommendation: Take a lighter content day tomorrow.
          </p>
        </div>
      </main>
    </>
  );
}
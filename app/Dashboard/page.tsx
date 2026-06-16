import Navbar from "../../components/Navbar";

export default function Dashboard() {
  return (
    <>
      <Navbar />

      <main className="p-10">
        <h1 className="text-4xl font-bold mb-10">
          Creator Dashboard
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          <div className="border rounded-xl p-6 shadow">
            <h2 className="text-lg font-semibold">
              Burnout Risk
            </h2>

            <p className="text-4xl font-bold mt-3 text-red-500">
              78%
            </p>
          </div>

          <div className="border rounded-xl p-6 shadow">
            <h2 className="text-lg font-semibold">
              Repurposed Content
            </h2>

            <p className="text-4xl font-bold mt-3">
              12
            </p>
          </div>

          <div className="border rounded-xl p-6 shadow">
            <h2 className="text-lg font-semibold">
              Revival Opportunities
            </h2>

            <p className="text-4xl font-bold mt-3">
              5
            </p>
          </div>

          <div className="border rounded-xl p-6 shadow">
            <h2 className="text-lg font-semibold">
              Reality Check Alerts
            </h2>

            <p className="text-4xl font-bold mt-3">
              2
            </p>
          </div>

          <div className="border rounded-xl p-6 shadow">
            <h2 className="text-lg font-semibold">
              Audience Confusion
            </h2>

            <p className="text-4xl font-bold mt-3">
              67%
            </p>
          </div>

        </div>
      </main>
    </>
  );
}
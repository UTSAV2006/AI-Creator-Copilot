import Navbar from "../../components/Navbar";
import StatCard from "../../components/StatCard";

export default function Dashboard() {
  return (
    <>
      <Navbar />

      <main className="p-10 bg-slate-950 min-h-screen text-white">
        <h1 className="text-4xl font-bold mb-10">
          Creator Dashboard
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <StatCard
            title="Burnout Risk"
            value="78%"
          />

          <StatCard
            title="Repurposed Content"
            value="12"
          />

          <StatCard
            title="Revival Opportunities"
            value="5"
          />

          <StatCard
            title="Reality Check Alerts"
            value="2"
          />

          <StatCard
            title="Audience Confusion"
            value="67%"
          />

       </div>
      </main>
    </>
  );
}
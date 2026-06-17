import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-5 border-b border-slate-800 bg-slate-950 text-white shadow">
      <h1 className="text-2xl font-bold">
         AI Creator Copilot
      </h1>

      <div className="flex gap-6 font-medium">
        <Link href="/">Home</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/repurpose">Repurpose</Link>
        <Link href="/burnout">Burnout</Link>
        <Link href="/reality-checker">Reality Checker</Link>
        <Link href="/audience-analyzer">Audience Analyzer</Link>
      </div>
    </nav>
  );
}
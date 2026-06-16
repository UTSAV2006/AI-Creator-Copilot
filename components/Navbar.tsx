import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 border-b">
      <h1 className="text-2xl font-bold">
        AI Creator Copilot
      </h1>

      <div className="flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/repurpose">Repurpose</Link>
        <Link href="/burnout">Burnout</Link>
      </div>
    </nav>
  );
}
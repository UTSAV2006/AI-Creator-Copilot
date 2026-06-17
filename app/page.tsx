import Navbar from "../components/Navbar";
import FeatureCard from "../components/FeatureCard";
import Link from "next/link";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <main className="bg-slate-950 text-white min-h-screen">
        <section className="min-h-screen flex flex-col items-center justify-center text-center">
        <h1 className="text-6xl font-bold">
          AI Creator Copilot
        </h1>

        <p className="mt-4 text-xl text-gray-500">
          Create Smarter. Avoid Burnout. Grow Consistently.
        </p>

        <Link href="/dashboard">
          <button className="mt-8 bg-black text-white px-6 py-3 rounded-lg">
            Get Started
          </button>
        </Link>
        </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Features
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          <FeatureCard
            title="Content Repurposing"
            description="Convert long videos into shorts, blogs, threads and captions."
          />

          <FeatureCard
            title="Burnout Detection"
            description="Predict burnout before it affects consistency."
          />

          <FeatureCard
            title="Dead Content Revival"
            description="Find old content worth reposting."
          />

          <FeatureCard
            title="Reality Checker"
            description="Fact-check scripts before publishing."
          />

          <FeatureCard
            title="Audience Analyzer"
            description="Detect audience confusion from comments."
          />
        </div>
      <Footer />
      </section>
      
      </main>
    </>
  );
}

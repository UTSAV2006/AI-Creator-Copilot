"use client";

import Navbar from "../../components/Navbar";
import { useState } from "react";
import api from "../../services/api";

export default function Burnout() {
  const [sleepHours, setSleepHours] = useState(5);
  const [workHours, setWorkHours] = useState(12);
  const [stressLevel, setStressLevel] = useState(8);
  const [motivationLevel, setMotivationLevel] = useState(3);

  const [burnoutScore, setBurnoutScore] = useState(0);
  const [risk, setRisk] = useState("");

  const handleAnalyze = async () => {
    try {
      const response = await api.post(
        "/api/burnout/analyze",
        {
          sleepHours,
          workHours,
          stressLevel,
          motivationLevel,
        }
      );

      setBurnoutScore(response.data.burnoutScore);
      setRisk(response.data.risk);

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Navbar />

      <main className="bg-slate-950 min-h-screen text-white p-10">
        <h1 className="text-4xl font-bold mb-2">
          Burnout Risk Detection
        </h1>

        <p className="text-slate-400 mb-4">
          Analyze creator workload and predict burnout before it impacts growth.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <input
            type="number"
            value={sleepHours}
            onChange={(e) => setSleepHours(Number(e.target.value))}
            placeholder="Sleep Hours"
            className="p-3 rounded bg-slate-900 border border-slate-700"
          />

          <input
            type="number"
            value={workHours}
            onChange={(e) => setWorkHours(Number(e.target.value))}
            placeholder="Work Hours"
            className="p-3 rounded bg-slate-900 border border-slate-700"
          />

          <input
            type="number"
            value={stressLevel}
            onChange={(e) => setStressLevel(Number(e.target.value))}
            placeholder="Stress Level (1-10)"
            className="p-3 rounded bg-slate-900 border border-slate-700"
          />

          <input
            type="number"
            value={motivationLevel}
            onChange={(e) => setMotivationLevel(Number(e.target.value))}
            placeholder="Motivation Level (1-10)"
            className="p-3 rounded bg-slate-900 border border-slate-700"
          />
        </div>

        <button
          onClick={handleAnalyze}
          className="bg-white text-black px-6 py-3 rounded-xl font-semibold mb-8"
        >
          Analyze Burnout
        </button>

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
            {burnoutScore}%
          </p>

          <p className="text-slate-300">
            Burnout Risk Level: {risk}
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
"use client";

import Navbar from "../../components/Navbar";

import { useState } from "react";
import api from "../../services/api";

export default function AudienceAnalyzer() {
  const [comments, setComments] = useState("");
  const [confusionScore, setConfusionScore] = useState<number>(0);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleAnalyze = async () => {
    try {
      const response = await api.post(
        "/api/audience-analysis",
        {
          comments: comments
            .split("\n")
            .filter((c) => c.trim() !== ""),
        }
      );
      setConfusionScore(response.data.confusionScore);
      setSuggestions(response.data.suggestions);
    } catch (error) {
      console.error("Error analyzing audience:", error);
    }
  };

  return (
    <>
      <Navbar />

      <main className="bg-slate-950 min-h-screen text-white p-10">
        <h1 className="text-4xl font-bold mb-2">
          Audience Confusion Analyzer
        </h1>

        <p className="text-slate-400 mb-8">
          Analyze audience comments and identify confusing content sections.
        </p>

        <textarea
          value={comments}
          onChange={(e) => setComments(e.target.value)}
          placeholder="Paste audience comments here..."
          className="w-full h-40 p-4 rounded-xl bg-slate-900 border border-slate-800 text-white"
        />

        <button
          onClick={handleAnalyze}
          className="mt-4 bg-white text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
        >
          Analyze Comments
        </button>

        <div className="grid md:grid-cols-2 gap-6 mt-10">

          {/* Score Card */}

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <h2 className="text-xl font-bold mb-4"> 📊 Confusion Score </h2>
            <p className="text-6xl font-bold text-yellow-400">
              {confusionScore}%
            </p>
            <p className="text-slate-400 mt-2">
              High audience confusion detected.
            </p>
          </div>

          {/* Main Issue */}

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <h2 className="text-xl font-bold mb-4">
              🔍 Most Confusing Section
            </h2>

            <p className="text-slate-300">
              Viewers struggled to understand the explanation
              of content batching and scheduling workflows.
            </p>
          </div>

        </div>

        {/* Detected Issues */}

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 mt-6">

          <h2 className="text-xl font-bold mb-4">
            ⚠ Detected Issues
          </h2>

          <ul className="space-y-3 text-slate-300">
            {suggestions.map((suggestion, index) => (
              <li key={index}>
                • {suggestion}
              </li>
            ))}
          </ul>

        </div>

        {/* AI Suggestions */}

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 mt-6">

          <h2 className="text-xl font-bold mb-4">
            🤖 AI Suggestions
          </h2>

          <ul className="space-y-3 text-slate-300">
            <li>• Add a real-world example before explaining batching</li>
            <li>• Simplify creator-specific terminology</li>
            <li>• Move key takeaways closer to the beginning</li>
            <li>• Break long explanations into shorter segments</li>
          </ul>

        </div>

      </main>
    </>
  );
}
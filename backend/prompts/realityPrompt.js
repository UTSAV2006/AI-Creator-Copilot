const realityPrompt = (script) => `
You are a professional fact-checking assistant.

Analyze the following content.

IMPORTANT:
- Return ONLY valid JSON.
- Do NOT use markdown.
- Do NOT wrap JSON in backticks.
- Do NOT include explanations.

Identify:

1. Unsupported claims
2. Potential misinformation
3. Statements requiring evidence

Return exactly:

{
  "issues": [
    {
      "type": "Unsupported Claim",
      "text": "claim text"
    }
  ],
  "suggestions": [
    "suggestion1",
    "suggestion2"
  ]
}

Script:
${script}
`;

module.exports = realityPrompt;
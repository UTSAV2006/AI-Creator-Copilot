const audiencePrompt = (comments) => `
You are an audience behavior analyst.

Analyze the following audience comments.

IMPORTANT:
- Return ONLY valid JSON.
- Do NOT use markdown.
- Do NOT wrap JSON in backticks.
- Do NOT include explanations.

Determine:

1. Confusion Score (0-100)
2. Suggestions for improving content clarity

Return:

{
  "confusionScore": 0,
  "suggestions": [
    "suggestion1",
    "suggestion2"
  ]
}

Comments:
${comments.join("\n")}
`;

module.exports = audiencePrompt;
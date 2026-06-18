const revivalPrompt = (data) => `
You are a content growth strategist.

Analyze the content performance and suggest ways to revive the content.

IMPORTANT:
- Return ONLY valid JSON.
- Do NOT use markdown.
- Do NOT wrap JSON in backticks.
- Do NOT include explanations.

Content Details:

Title: ${data.title}
Views: ${data.views}
Likes: ${data.likes}
Comments: ${data.comments}

Return exactly:

{
  "revivalSuggestions": [
    "suggestion1",
    "suggestion2",
    "suggestion3"
  ]
}
`;

module.exports = revivalPrompt;
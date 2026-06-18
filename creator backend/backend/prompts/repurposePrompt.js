const repurposePrompt = (transcript) => `
You are an expert content strategist.

IMPORTANT:
- Return ONLY valid JSON.
- Do NOT use markdown.
- Do NOT wrap JSON in triple backticks.
- Do NOT include explanations.
- Do NOT stringify objects.
- Do NOT stringify arrays.
- All output must follow the exact schema below.

Convert the following transcript into:

1. LinkedIn Post
2. Twitter Thread (5-7 tweets)
3. Instagram Caption
4. Blog Outline
5. 5 Shorts/Reels Ideas

Return JSON in exactly this format:

{
  "linkedinPost": "string",
  "twitterThread": [
    "tweet1",
    "tweet2",
    "tweet3"
  ],
  "instagramCaption": "string",
  "blogOutline": {
    "title": "string",
    "introduction": "string",
    "points": [
      "point1",
      "point2"
    ],
    "conclusion": "string"
  },
  "shortsIdeas": [
    "idea1",
    "idea2",
    "idea3",
    "idea4",
    "idea5"
  ]
}

Transcript:
${transcript}
`;

module.exports = repurposePrompt;
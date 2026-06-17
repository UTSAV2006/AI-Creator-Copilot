const groq = require("../utils/groqClient");
const audiencePrompt = require("../prompts/audiencePrompt");

const analyzeAudience = async (comments) => {
  try {
    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "user",
          content: audiencePrompt(comments),
        },
      ],
      temperature: 0.5,
    });

    const response = completion.choices[0].message.content;

    const cleanedResponse = response
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    return JSON.parse(cleanedResponse);
  } catch (error) {
    console.error("Audience Analyzer Error:", error);

    return {
      confusionScore: 0,
      suggestions: [],
    };
  }
};

module.exports = analyzeAudience;
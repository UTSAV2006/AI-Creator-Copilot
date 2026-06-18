const groq = require("../utils/groqClient");
const realityPrompt = require("../prompts/realityPrompt");

const checkReality = async (script) => {
  try {
    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "user",
          content: realityPrompt(script),
        },
      ],
      temperature: 0.3,
    });

    const response = completion.choices[0].message.content;

    const cleanedResponse = response
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    return JSON.parse(cleanedResponse);
  } catch (error) {
    console.error("Reality Checker Error:", error);

    return {
      issues: [],
      suggestions: [],
    };
  }
};

module.exports = checkReality;
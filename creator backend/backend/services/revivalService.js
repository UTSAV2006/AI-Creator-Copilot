const groq = require("../utils/groqClient");
const revivalPrompt = require("../prompts/revivalPrompt");

const generateRevivalIdeas = async (contentData) => {
  try {
    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "user",
          content: revivalPrompt(contentData),
        },
      ],
      temperature: 0.7,
    });

    const response = completion.choices[0].message.content;

    const cleanedResponse = response
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    return JSON.parse(cleanedResponse);
  } catch (error) {
    console.error("Revival Service Error:", error);

    return {
      revivalSuggestions: [],
    };
  }
};

module.exports = generateRevivalIdeas;
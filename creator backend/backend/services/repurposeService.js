const groq = require("../utils/groqClient");
const repurposePrompt = require("../prompts/repurposePrompt");

const generateRepurposedContent = async (transcript) => {
  try {
    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "user",
          content: repurposePrompt(transcript),
        },
      ],
      temperature: 0.7,
    });

    const response = completion.choices[0].message.content;

    const cleanedResponse = response
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const parsedData = JSON.parse(cleanedResponse);

    return parsedData;
  } catch (error) {
    console.error("Repurpose Service Error:", error);

    return {
      linkedinPost: "",
      twitterThread: [],
      instagramCaption: "",
      blogOutline: {
        title: "",
        introduction: "",
        points: [],
        conclusion: "",
      },
      shortsIdeas: [],
    };
  }
};

module.exports = generateRepurposedContent;
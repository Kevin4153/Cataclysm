const OpenAI = require("openai");
require('dotenv').config();
const PROMPT_TEXT = require('./prompt');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const askChatGPT = async (ingredient) => {
  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      {
        role: "system",
        content: [
          {
            type: "text",
            text: PROMPT_TEXT
          }
        ]
      },
      {
        role: "user",
        content:  [
          {
            type: "text",
            text: `Ingredient: ${ingredient}`
          }
        ]
      }
      
    ],
    temperature: 0,
    max_tokens: 256,
    top_p: 0,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  const parsedResponse = JSON.parse(response.choices[0].message.content);
  return parsedResponse;
};

module.exports = { askChatGPT };

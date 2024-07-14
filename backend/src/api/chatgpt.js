const axios = require('axios');
require('dotenv').config();

const askChatGPT = async (ingredient) => {
  const prompt = `Is ${ingredient} toxic to cats? rate it on a scale of 1 (not toxic) - 2 (mildly) - 3 (can be fatal). Also, make a list of symptoms associated with the intake of ${ingredient}. Format it so the list is [ "Symptom1", "Symptom2", etc.]. Choose symptoms from the following list: ...`;

  const response = await axios.post('https://api.openai.com/v1/completions', {
    model: 'text-davinci-003',
    prompt: prompt,
    max_tokens: 150
  }, {
    headers: {
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
    }
  });

  return response.data.choices[0].text;
};

module.exports = { askChatGPT };

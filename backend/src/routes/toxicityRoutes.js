const express = require('express');
const { checkIngredientInDB, addIngredientToDB } = require('../api/dynamodb');
const { askChatGPT } = require('../api/chatgpt');
const { parseChatGPTResponse } = require('../utils/parseChatGPTResponse');
const router = express.Router();

router.post('/', async (req, res) => {
  const { ingredients } = req.body;
  let toxicityReport = [];

  for (const ingredient of ingredients) {
    let toxicInfo = await checkIngredientInDB(ingredient);
    if (!toxicInfo) {
      const chatGPTResponse = await askChatGPT(ingredient);
      toxicInfo = parseChatGPTResponse(chatGPTResponse);
      await addIngredientToDB(ingredient, toxicInfo);
    }
    toxicityReport.push(toxicInfo);
  }
  
  res.json(toxicityReport);
});

module.exports = router;

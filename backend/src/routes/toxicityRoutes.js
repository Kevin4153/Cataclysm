import express from 'express';
import { checkIngredientInDB, addIngredientToDB } from '../api/dynamodb.js';
import askChatGPT from '../api/chatgpt.js';
import parseChatGPTResponse from '../utils/parseChatGPTResponse.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const { ingredients } = req.body;
  let toxicityReport = [];

  for (const ingredient of ingredients) {
    // console.log(ingredient)
    let toxicInfo = await checkIngredientInDB(ingredient);
    if (!toxicInfo) {
      const chatGPTResponse = await askChatGPT(ingredient);
      toxicInfo = parseChatGPTResponse(chatGPTResponse);
      await addIngredientToDB(ingredient, toxicInfo);
      toxicInfo = {
        ingredient,
        ...toxicInfo
      };
      
    }
    toxicityReport.push(toxicInfo);
  }
  
  res.json(toxicityReport);
});

export default router;

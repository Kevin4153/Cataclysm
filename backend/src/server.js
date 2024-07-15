import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import foodItemRoutes from './routes/foodItemRoutes.js';
import toxicityRoutes from './routes/toxicityRoutes.js';

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors()); 

app.use('/api/foodItem', foodItemRoutes);
app.use('/api/toxicity', toxicityRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

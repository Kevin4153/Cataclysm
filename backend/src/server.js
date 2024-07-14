require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const foodItemRoutes = require('./routes/foodItemRoutes');
const toxicityRoutes = require('./routes/toxicityRoutes');

const app = express();
app.use(bodyParser.json());

app.use('/api/foodItem', foodItemRoutes);
app.use('/api/toxicity', toxicityRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

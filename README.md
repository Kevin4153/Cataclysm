# Cat Toxicity Scanner

A web application that allows users to scan the barcode of a food item to determine if its ingredients are toxic to cats. The application uses React.js for the frontend and Node.js with Express for the backend. It integrates with the USDA API, OpenAI's ChatGPT, and AWS DynamoDB.

## Features

- Scan food item barcodes using the device camera.
- Fetch food item details from the USDA API.
- Check the toxicity of each ingredient.
- Use AWS DynamoDB to store known toxic ingredients.
- Query ChatGPT for toxicity information of unknown ingredients.
- Display toxicity level, toxicity amount, and associated symptoms.
- Option to find the nearest emergency vet.

## Technologies Used

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: AWS DynamoDB
- **APIs**: USDA API, OpenAI API (ChatGPT), Google Maps API (optional for finding vets)
- **Barcode Scanning**: html5-qrcode

## Project Structure

```
toxic-food-scanner/
├── backend/
│   ├── node_modules/
│   ├── src/
│   │   ├── api/
│   │   │   ├── chatgpt.js
│   │   │   ├── dynamodb.js
│   │   │   ├── prompt.js
│   │   │   └── usda.js
│   │   ├── routes/
│   │   │   ├── foodItemRoutes.js
│   │   │   └── toxicityRoutes.js
│   │   ├── utils/
│   │   │   ├── createTable.js
│   │   │   └── parseChatGPTResponse.js
│   │   └── server.js
│   ├── .env
│   ├── package.json
│   ├── package-lock.json
├── frontend/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── BarcodeScanner.js
│   │   │   ├── FoodItemDetails.js
│   │   │   └── ToxicityReport.js
│   │   ├── App.js
│   │   ├── api.js
│   │   └── index.js
│   ├── package.json
│   ├── package-lock.json
├── .gitignore
├── README.md
```

## Installation and Setup

### Prerequisites

- Node.js (v16.x or v14.x recommended)
- npm (Node Package Manager)
- AWS account for DynamoDB
- API keys for USDA and OpenAI

### Backend Setup

1. **Navigate to the backend directory:**

   ```bash
   cd toxic-food-scanner/backend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Create a `.env` file in the backend directory and add your API keys:**

   ```plaintext
   OPENAI_API_KEY=your_openai_api_key
   USDA_API_KEY=your_usda_api_key
   ```

4. **Create the DynamoDB table:**

   ```bash
   npm run create-table
   ```

5. **Start the backend server:**

   ```bash
   npm start
   ```

### Frontend Setup

1. **Navigate to the frontend directory:**

   ```bash
   cd toxic-food-scanner/frontend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the frontend development server:**

   ```bash
   npm start
   ```

### Running the Application

- **Backend**: Runs on `http://localhost:3000`
- **Frontend**: By default, it runs on `http://localhost:3001` if port 3000 is occupied by the backend.

## Usage

1. Open the frontend application in your browser.
2. Use the barcode scanner to scan the barcode of a food item.
3. View the food item details and toxicity report.
4. Optionally, find the nearest emergency vet.

## Design Doc  
You can find the design document here:
https://docs.google.com/document/d/1q7fn5PRFuzf1-y79WDJ7F8Rr--BD-IV2VfOB7qS_tSo/edit?usp=sharing
/**
 * Parses the response from the OpenAI API.
 * @param {string} response - The raw response string from the API.
 * @returns {object} - Parsed JSON object with toxicity information.
 */
function parseChatGPTResponse(response) {
  try {
    // Assuming the response is in JSON format
    const parsedResponse = JSON.parse(response);

    // Extract necessary fields from the parsed response
    const toxicityLevel = parsedResponse["Toxicity Level"];
    const toxicityAmount = parsedResponse["Toxicity Amount"];
    const symptoms = parsedResponse["Symptoms"];

    // Return an object with the parsed information
    return {
      toxicityLevel,
      toxicityAmount,
      symptoms
    };
  } catch (error) {
    console.error('Error parsing response:', error);
    throw new Error('Failed to parse response');
  }
}

export default parseChatGPTResponse;
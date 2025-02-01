const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI("AIzaSyBiZytOdJtrgYlWoET1i8pxksdJBHdzlBQ");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

async function run() {
    try {
        // First get the data from your DataService
        const dataService = require('../services/dataService');
        const apiData = await dataService.fetchDataFromAPI();

        const prompt = `
Please analyze the following NEET quiz performance data and provide insights:

Quiz Data:
${JSON.stringify(apiData, null, 2)}

Please provide a detailed analysis including:

1. Performance Analysis:
- Identify patterns in topic-wise performance 
- Break down performance by difficulty levels
- Calculate overall accuracy rates
- Highlight consistently strong and weak topics
- Track performance trends across the last 5 quizzes

2. Student-Specific Insights:
- Key weak areas requiring immediate attention
- Topics showing improvement over time
- Significant performance gaps compared to target scores
- Time management patterns if available
- Concept mastery levels by subject

3. Rank Prediction:
- Analyze correlation between quiz scores and previous NEET ranks
- Predict likely NEET rank range based on:
  * Current quiz performance
  * Topic-wise strengths/weaknesses
  * Historical performance trends
  * Previous year NEET cutoffs

Please structure the response with:
1. Numerical analysis and key metrics
2. Specific improvement recommendations
3. Predicted rank range with confidence level
4. Key factors influencing the prediction

Note: Please focus on analyzing the actual data provided in the quiz results while making predictions and recommendations.`;

        // Generation config to control model behavior
        const generationConfig = {
            temperature: 0.7,
            maxOutputTokens: 2000,  // Increased to allow for detailed analysis
            topP: 0.9,
            topK: 40
        };

        const result = await model.generateContent({
            contents: [{ role: "user", parts: [{ text: prompt }] }],
            generationConfig
        });

        console.log(result.response.text());
    } catch (error) {
        console.error("Error:", error);
    }
}

run();
const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI("API_KEY");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

async function run() {
    try {
        const dataService = require('../services/dataService');
        const apiData = await dataService.fetchDataFromAPI();
        const apiDataString = JSON.stringify(apiData, null, 2);

        const prompt = `
        🔍 NEET Quiz Performance Analysis & Prediction System

        Based on the provided quiz data, analyze and generate insights for:

        1. DATA ANALYSIS
        - Calculate performance metrics:
          * Accuracy rates: ${apiData?.accuracy ?? 'Not available'}
          * Topic performance in: ${apiData?.quiz?.topic ?? 'Not specified'}
          * Time management (Duration): ${apiData?.duration ?? 'Not specified'}
          * Speed metrics: ${apiData?.speed ?? 'Not available'}
          * Score breakdown:
            - Final score: ${apiData?.final_score ?? 'Not available'}
            - Negative score: ${apiData?.negative_score ?? 'Not available'}
          * Questions: 
            - Correct: ${apiData?.correct_answers ?? 'Not available'}
            - Incorrect: ${apiData?.incorrect_answers ?? 'Not available'}
          * Improvement tracking (Mistakes corrected): ${apiData?.mistakes_corrected ?? 'Not available'}

        2. PERFORMANCE INSIGHTS
        - Analyze:
          * Topic mastery levels
          * Weak areas identification
          * Time management patterns
          * Performance compared to peers: ${apiData?.better_than ?? 'Not available'}
          * Mistake correction rate
          * Trophy level achievements: ${apiData?.trophy_level ?? 'Not available'}

        3. NEET RANK PREDICTION
        Calculate predicted rank using available metrics from:
        * Overall accuracy
        * Speed performance
        * Final score
        * Comparative standing
        * Trophy level
        * Topic performance

        4. MEDICAL COLLEGE PREDICTION
        Based on predicted NEET rank:
        * Map rank to potential medical colleges
        * Consider state-wise cutoffs
        * Factor in category-based seat allocation
        * Provide realistic college suggestions

        Quiz Data for Analysis:
        ${apiDataString}

        Provide a structured analysis covering all sections with specific, data-driven insights and predictions.`;

        const generationConfig = {
            temperature: 0.7,
            maxOutputTokens: 2000,
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
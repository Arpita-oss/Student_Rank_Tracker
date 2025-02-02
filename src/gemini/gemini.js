const { GoogleGenerativeAI } = require("@google/generative-ai");
const router = require("../routes/dataRoutes");
const genAI = new GoogleGenerativeAI("AIzaSyBiZytOdJtrgYlWoET1i8pxksdJBHdzlBQ");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

async function run() {
    try {
        const dataService = require('../services/dataService');
        const apiData = await dataService.fetchDataFromAPI();
        const apiDataString = JSON.stringify(apiData, null, 2);

        const prompt = `
You are a NEET Rank Prediction Expert. Analyze and provide predictions based on the quiz data:

1. DATA PATTERNS & PERFORMANCE ANALYSIS
Analyze and provide:
- Topic-wise Performance Breakdown (%)
- Difficulty Level Analysis (Easy/Medium/Hard success rates)
- Response Accuracy Patterns
- Time Management Analysis
- Performance Trends

2. USER INSIGHTS & IMPROVEMENTS
Provide specific insights on:
- Top 3 Weak Areas (with accuracy %)
- Top 3 Strong Areas (with accuracy %)
- Improvement Trends:
  * Initial vs Current Performance
  * Topic-wise Progress
  * Error Rate Changes
- Critical Performance Gaps
- Recommended Focus Areas

3. CALCULATE NEET RANK
Based on these performance indicators:
- Accuracy: ${apiData?.accuracy}
- Final Score: ${apiData?.final_score}
- Comparative Performance: ${apiData?.better_than}
- Trophy Level: ${apiData?.trophy_level}
- Correct Answers: ${apiData?.correct_answers}
- Total Questions: ${apiData?.total_questions}

RANKING FORMULA:
- Base Rank = (1 - (accuracy/100)) × 100,000
- Adjustment Factor = (trophy_level × 5000) + (better_than × 1000)
- Final Predicted Rank = Base Rank - Adjustment Factor

4. PREDICT MEDICAL COLLEGES
Based on the calculated rank, list:
- Top 3 Government Medical Colleges
- Top 3 Private Medical Colleges
- State-wise college options

REQUIRED OUTPUT FORMAT:
{
  "performance_analysis": {
    "topic_wise_performance": [
      {
        "topic": "topic name",
        "accuracy": "percentage",
        "strength_level": "strong/moderate/weak"
      }
    ],
    "difficulty_analysis": {
      "easy": "success_rate",
      "medium": "success_rate",
      "hard": "success_rate"
    }
  },
  "user_insights": {
    "weak_areas": [
      {
        "topic": "topic name",
        "accuracy": "percentage",
        "improvement_needed": "percentage"
      }
    ],
    "improvement_trends": {
      "overall_progress": "percentage",
      "topic_improvements": []
    }
  },
  "predicted_rank": [exact number],
  "rank_range": "[lower bound]-[upper bound]",
  "college_predictions": {
    "government_colleges": [
      {
        "name": "college name",
        "location": "city, state",
        "previous_year_cutoff": "rank range",
        "admission_probability": "high/medium/low"
      }
    ],
    "private_colleges": [
      {
        "name": "college name",
        "location": "city, state",
        "previous_year_cutoff": "rank range",
        "admission_probability": "high/medium/low"
      }
    ]
  }
}

IMPORTANT RULES:
1. You MUST provide specific numbers and percentages
2. You MUST provide college predictions
3. DO NOT mention data limitations
4. DO NOT skip any fields in the output format
5. If certain values are missing, use reasonable approximations based on available data
6. Always return complete predictions

Raw Quiz Data for Analysis:
${apiDataString}

Provide the complete structured output following the exact format specified above.`;

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

        const geminiResponse = await result.response.text();
        return { apiData, geminiResponse };
      } catch (error) {
        console.error("Error:", error);
        return { error: error.message };
      }
}

run().then(response => console.log(response));

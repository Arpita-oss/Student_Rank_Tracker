const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI("");
const router = require("../routes/dataRoutes");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

async function run(apiData) {
  try {
    const apiDataString = JSON.stringify(apiData, null, 2);

    const prompt = `
Strictly make sure to give data strictly in json format only. You are a NEET Rank Prediction Expert. Analyze and provide predictions based on the quiz data:
1. DATA PATTERNS & PERFORMANCE ANALYSIS
Analyze and provide:
@@ -105,6 +105,41 @@
        "admission_probability": "high/medium/low"
      }
    ]
  },
  "preparation_recommendations": {
    "daily_schedule": {
      "physics": {
        "hours": "number",
        "focus_topics": ["topic1", "topic2"],
        "recommended_resources": ["resource1", "resource2"]
      },
      "chemistry": {
        "hours": "number",
        "focus_topics": ["topic1", "topic2"],
        "recommended_resources": ["resource1", "resource2"]
      },
      "biology": {
        "hours": "number",
        "focus_topics": ["topic1", "topic2"],
        "recommended_resources": ["resource1", "resource2"]
      }
    },
    "mock_test_strategy": {
      "weekly_tests": "number",
      "duration": "hours",
      "focus_areas": ["area1", "area2"]
    },
    "last_month_preparation": {
      "revision_strategy": "string",
      "important_topics": ["topic1", "topic2"],
      "quick_revision_resources": ["resource1", "resource2"]
    },
    "time_management_tips": [
      {
        "tip": "string",
        "implementation": "string"
      }
    ]
  }
}
@@ -115,31 +150,34 @@
4. DO NOT skip any fields in the output format
5. If certain values are missing, use reasonable approximations based on available data
6. Always return complete predictions
7. Preparation recommendations MUST be personalized based on weak areas
8. Study schedule MUST be realistic and achievable
9. Resources recommended MUST be specific and readily available
Raw Quiz Data for Analysis:
${apiDataString}
Provide the complete structured output following the exact format specified above.`;

    const generationConfig = {
      temperature: 0.7,
      maxOutputTokens: 2000,
      topP: 0.9,
      topK: 40,
    };

    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      generationConfig,
    });

    const geminiResponse = await result.response.text();
    return { apiData, geminiResponse };
  } catch (error) {
    console.error("Error:", error);
    return { error: error.message };
  }
}

module.exports = run;
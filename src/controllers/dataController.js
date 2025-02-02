const dataService = require("../services/dataService");
const run = require("../gemini/gemini");

exports.fetchData = async (req, res) => {
  try {
    const { apiData, geminiResponse } = await require('../gemini/gemini')();
    
    // Extract JSON data correctly
    const cleanedResponse = geminiResponse.replace(/```json\n|\n```/g, ''); // Remove unnecessary markdown formatting
    const parsedGeminiResponse = JSON.parse(cleanedResponse); // Parse JSON

    res.json({ apiData, geminiResponse: parsedGeminiResponse });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Fetch only raw API data without Gemini processing
exports.fetchRawData = async (req, res) => {
  try {
    const allData = await dataService.fetchDataFromAPI();
    res.json(allData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Fetch data from specific API endpoints
exports.fetchData1 = async (req, res) => {
  try {
    const allData = await dataService.fetchDataFromAPI();
    res.json(allData.data1);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.fetchData2 = async (req, res) => {
  try {
    const allData = await dataService.fetchDataFromAPI();
    res.json(allData.data2);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.fetchData3 = async (req, res) => {
  try {
    const allData = await dataService.fetchDataFromAPI();
    res.json(allData.data3);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

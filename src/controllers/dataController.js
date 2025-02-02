const dataService = require('../services/dataService');

exports.fetchData = async (req, res) => {
  try {
    const { apiData, geminiResponse } = await require('../services/gemini')();
    res.json({ apiData, geminiResponse });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.fetchData = async (req, res) => {
  try {
    const allData = await dataService.fetchDataFromAPI();
    res.json(allData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Optional: Separate endpoints for each API
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
}

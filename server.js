const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dataRoutes = require('./src/routes/dataRoutes');
require('dotenv').config();
const https = require('https');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/api', dataRoutes);

class DataService {
  constructor() {
    // Create a custom axios instance with SSL verification disabled for jsonkeeper
    this.jsonkeeperAxios = axios.create({
      httpsAgent: new https.Agent({
        rejectUnauthorized: false
      })
    });
  }

  async fetchDataFromAPI() {
    try {
      // Use Promise.all with separate error handling for each request
      const results = await Promise.allSettled([
        axios.get('https://api.jsonserve.com/XgAgFJ'),
        axios.get('https://api.jsonserve.com/rJvd7g'),
        // this.jsonkeeperAxios.get('https://www.jsonkeeper.com/b/LLQT')
      ]);

      // Process results
      const data = {
        data1: results[0].status === 'fulfilled' ? results[0].value.data : null,
        data2: results[1].status === 'fulfilled' ? results[1].value.data : null,
        // data3: results[2].status === 'fulfilled' ? results[2].value.data : null
      };

      // Log success/failure for each request
      results.forEach((result, index) => {
        if (result.status === 'fulfilled') {
          console.log(`API ${index + 1} fetched successfully`);
        } else {
          console.error(`API ${index + 1} failed:`, result.reason);
        }
      });

      return data;
    } catch (error) {
      console.error('API Fetch Error:', error.message);
      throw new Error('Failed to fetch data from APIs');
    }
  }

  // Individual API fetch methods with proper error handling
  async fetchFirstAPI() {
    try {
      const response = await axios.get('https://api.jsonserve.com/XgAgFJ');
      return response.data;
    } catch (error) {
      console.error('First API Fetch Error:', error.message);
      throw error;
    }
  }

  async fetchSecondAPI() {
    try {
      const response = await axios.get('https://api.jsonserve.com/rJvd7g');
      return response.data;
    } catch (error) {
      console.error('Second API Fetch Error:', error.message);
      throw error;
    }
  }

  async ftechThirdAPI() {
    try {
        const response = await axios.get("https://www.jsonkeeper.com/b/LLQT");
        console.log("Fetched data successfully");
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
}
}
// Create and export a single instance
const dataService = new DataService();
module.exports = dataService;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
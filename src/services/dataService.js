const axios = require('axios');

class DataService {
  async fetchDataFromAPI() {
    try {
      // First API call
      const response1 = await axios.get('https://api.jsonserve.com/XgAgFJ');
      console.log('Fetched Data 1:', response1.data);

      // Second API call
      const response2 = await axios.get('https://api.jsonserve.com/rJvd7g');
      console.log('Fetched Data 2:', response2.data);

      // Third API call
      const response3 = await axios.get('https://jsonkeeper.com/b/LLQT');
      console.log('Fetched Data 3:', response3.data);

      // Return all data in a structured format
      return {
        data1: response1.data,
        data2: response2.data,
        data3: response3.data
      };
    } catch (error) {
      console.error('API Fetch Error:', error);
      throw error;
    }
  }
}

module.exports = new DataService();
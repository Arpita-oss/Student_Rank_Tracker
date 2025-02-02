const axios = require('axios');

class DataService {
  async fetchDataFromAPI() {
    try {
      const response1 = await axios.get('https://api.jsonserve.com/XgAgFJ').catch(() => null);
      console.log('Fetched Data 1 success');
  
      const response2 = await axios.get('https://api.jsonserve.com/rJvd7g').catch(() => null);
      console.log('Fetched Data 2 success');
  
      const response3 = await axios.get('https://www.jsonkeeper.com/b/LLQT').catch(() => null);
      console.log('Fetched Data 3 success');
  
      return {
        data1: response1 ? response1.data : null,
        data2: response2 ? response2.data : null,
        data3: response3 ? response3.data : null
      };
    } catch (error) {
      console.error('API Fetch Error:', error);
      throw new Error('Failed to fetch one or more APIs');
    }
  }
}  

module.exports = new DataService();
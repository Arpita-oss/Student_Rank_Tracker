const axios = require("axios");

class DataService {
  async fetchDataFromAPI() {
    try {
      const [response1, response2, response3] = await Promise.all([
        axios.get("https://api.jsonserve.com/XgAgFJ").catch(() => null),
        axios.get("https://api.jsonserve.com/rJvd7g").catch(() => null),
        axios.get("https://www.jsonkeeper.com/b/LLQT").catch(() => null),
      ]);

      console.log("Fetched all data successfully");

    } catch (error) {
      console.error("API Fetch Error:", error);
      throw new Error("Failed to fetch one or more APIs");
    }
  }
}

module.exports = new DataService();

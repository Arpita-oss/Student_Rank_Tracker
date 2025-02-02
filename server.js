const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dataRoutes = require('./src/routes/dataRoutes');
require('dotenv').config();
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Set EJS as the template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/api', dataRoutes);

// Route to render the results page
app.get('/', async (req, res) => {
  try {
      const response = await fetch('http://localhost:5000/api/fetch-data');
      const data = await response.json();
      console.log('Data being passed to template:', data);
      res.render('index', {
          apiData: data.apiData,
          geminiResponse: data.geminiResponse
      });
  } catch (error) {
      console.error('Error:', error);
      res.render('index', {
          apiData: null,
          geminiResponse: null,
          error: error.message
      });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

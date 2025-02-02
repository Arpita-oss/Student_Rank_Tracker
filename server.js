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


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
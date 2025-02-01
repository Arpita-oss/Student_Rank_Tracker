const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');

// Route to get all data
router.get('/fetch-data', dataController.fetchData);

// Optional: Individual routes for each API
router.get('/fetch-data1', dataController.fetchData1);
router.get('/fetch-data2', dataController.fetchData2);
router.get('/fetch-data3', dataController.fetchData3);

module.exports = router;
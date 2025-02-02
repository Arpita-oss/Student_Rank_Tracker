# Student_Rank_Tracker
Student Rank Predictor
![image alt](https://github.com/Arpita-oss/Student_Rank_Tracker/blob/1048dd58b363888731ed640e6cf0f8e11638fc18/Screenshot%202025-02-02%20230059.png)

Overview

The Student Rank Predictor is a web application that analyzes students' quiz performance and predicts their NEET exam rank based on historical data. It leverages real-time quiz submissions and past performance data to generate insights, highlight weak areas, and forecast potential ranks. Additionally, it provides an optional feature to predict the most likely college a student could be admitted to based on their predicted rank.

1)Features

Quiz Performance Analysis: Extracts and analyzes quiz data to assess students' strengths and weaknesses.

Rank Prediction Algorithm: Uses historical NEET exam results to estimate student ranks.

Performance Insights: Highlights areas of improvement and accuracy trends.

College Prediction (Bonus): Suggests probable colleges based on predicted NEET rank.

User-Friendly Dashboard: Visual representation of key insights.

2)Tech Stack

Frontend: HTML, CSS, JavaScript, EJS (Embedded JavaScript)

Backend: Node.js, Express.js

Database: MongoDB (if storing data), or API-based data fetching

API Integration: Fetches quiz performance data from external endpoints

3)Setup Instructions

Prerequisites

Ensure you have the following installed:

Node.js

MongoDB (if using a database)

Git (optional for version control)

Installation Steps

Clone the Repository:

git clone https://github.com/Arpita-oss/Student-Rank-Predictor.git
cd Student-Rank-Predictor

Install Dependencies:

npm install

Set Up Environment Variables:
Create a .env file and add the following variables:

PORT=5000
GEMINI_API_KEY =""/ or directly put it into gemini.js
MONGODB_URL=mongodb://localhost:27017/student_rank_db

Run the Server:

node server.js

or if using nodemon for development:

npm run dev

Access the Application:
Open http://localhost:5000 in your browser.

=>Approach Description

1)Data Collection:

Retrieve quiz data from the provided API endpoints.

Use past 5 quizzes to analyze performance trends.

2)Data Processing:

Calculate accuracy, topic-wise performance, and improvement trends.

Apply machine learning or probabilistic models to predict rank based on historical NEET results.(used GOGGLE GEMINI MODEL)

3)Rank Prediction:

Normalize quiz scores against past NEET exam trends.

Use statistical models to estimate probable rank.

4)College Prediction (Bonus):

Match predicted rank with past NEET cut-off data to suggest probable college admissions.

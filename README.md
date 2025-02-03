# Student Rank Predictor
Student Rank Predictor
![image alt](https://github.com/Arpita-oss/Student_Rank_Tracker/blob/8838db77f5c1611dc2e962c478d8d158cbfd402d/Screenshot%202025-02-02%20230059.png)
![image alt](https://github.com/Arpita-oss/Student_Rank_Tracker/blob/c675af1cfa3626f7b7bbd343c3016d7249d568dc/Screenshot%202025-02-02%20230108.png)



# Overview
The **Student Rank Predictor** is a web application that analyzes students' quiz performance and predicts their **NEET exam rank** based on historical data. It leverages real-time quiz submissions and past performance data to generate insights, highlight weak areas, and forecast potential ranks. Additionally, it provides an optional feature to predict the most likely **college** a student could be admitted to based on their predicted rank.

---

## Features

- **Quiz Performance Analysis**: Extracts and analyzes quiz data to assess students' strengths and weaknesses.
- **Rank Prediction Algorithm**: Uses historical NEET exam results to estimate student ranks.
- **Performance Insights**: Highlights areas of improvement and accuracy trends.
- **College Prediction (Bonus)**: Suggests probable colleges based on predicted NEET rank.
- **User-Friendly Dashboard**: Visual representation of key insights.

---

## Tech Stack

### Frontend:
- HTML, CSS, JavaScript
- EJS (Embedded JavaScript)

### Backend:
- Node.js
- Express.js

### Database:
- MongoDB (if storing data) or API-based data fetching

### API Integration:
- Fetches quiz performance data from external endpoints

---

## Setup Instructions

### Prerequisites

Ensure you have the following installed:

- **Node.js**
- **MongoDB** (if using a database)
- **Git** (optional for version control)

### Installation Steps

1. **Clone the Repository:**
   ```sh
   git clone https://github.com/Arpita-oss/Student-Rank-Predictor.git
   cd Student-Rank-Predictor
   ```

2. **Install Dependencies:**
   ```sh
   npm install
   ```

3. **Set Up Environment Variables:**
   Create a `.env` file and add the following variables:
   ```sh
   PORT=5000
   GEMINI_API_KEY="" # or directly put it into gemini.js
   MONGODB_URL=mongodb://localhost:27017/student_rank_db
   ```

4. **Run the Server:**
   ```sh
   node server.js
   ```
   or if using **nodemon** for development:
   ```sh
   npm run dev
   ```

5. **Access the Application:**
   Open [http://localhost:5000](http://localhost:5000) in your browser.

---

## Approach Description

### 1. Data Collection:
- Retrieve quiz data from the provided API endpoints.
- Use the past **5 quizzes** to analyze performance trends.

### 2. Data Processing:
- Calculate accuracy, topic-wise performance, and improvement trends.
- Apply **machine learning** or **probabilistic models** to predict rank based on historical NEET results. *(Used Google Gemini Model)*

### 3. Rank Prediction:
- Normalize quiz scores against past NEET exam trends.
- Use **statistical models** to estimate probable rank.

### 4. College Prediction (Bonus):
- Match predicted rank with past NEET cut-off data to suggest probable college admissions.

---

### License

This project is open-source and available under the **MIT License**.

---

### Contributors

Developed by **Arpita**. Feel free to contribute to the project!

---

### Contact

For any issues or suggestions, please reach out via [GitHub Issues](https://github.com/Arpita-oss/Student-Rank-Predictor/issues).

---



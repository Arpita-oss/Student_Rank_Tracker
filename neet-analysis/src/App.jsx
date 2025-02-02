import { useEffect, useState } from "react";

function App() {
  const [geminiData, setGeminiData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/fetch-data")
      .then((response) => response.json())
      .then((result) => {
        console.log('Raw response:', result);
        try {
          const parsedGeminiResponse = JSON.parse(result.geminiResponse);
          console.log('Parsed response:', parsedGeminiResponse);
          setGeminiData(parsedGeminiResponse);
        } catch (error) {
          console.error('Parsing error:', error);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Function to render performance analysis topics
  const renderTopicWisePerformance = (topics) => {
    if (!topics || !Array.isArray(topics)) return null;
    return topics.map((topic, index) => (
      <div key={index}>
        <h3>{topic.topic}</h3>
        <p>Accuracy: {topic.accuracy}</p>
        <p>Strength Level: {topic.strength_level}</p>
      </div>
    ));
  };

  // Function to render weak areas
  const renderWeakAreas = (areas) => {
    return areas.map((area, index) => (
      <div key={index}>
        <h3>{area.topic}</h3>
        <p>Accuracy: {area.accuracy}</p>
        <p>Improvement Needed: {area.improvement_needed}</p>
      </div>
    ));
  };

  // Function to render strong areas
  const renderStrongAreas = (areas) => {
    return areas.map((area, index) => (
      <div key={index}>
        <h3>{area.topic}</h3>
        <p>Accuracy: {area.accuracy}</p>
        <p>Improvement Needed: {area.improvement_needed}</p>
      </div>
    ));
  };

  // Function to render improvement trends
  const renderImprovementTrends = (improvements) => {
    return improvements.map((improvement, index) => (
      <div key={index}>
        <h3>{improvement.topic}</h3>
        <p>Progress: {improvement.progress}</p>
      </div>
    ));
  };

  // Function to render predicted rank and rank range
  const renderPredictedRank = (predictedRank, rankRange) => {
    return (
      <div>
        <h2>Predicted Rank: {predictedRank}</h2>
        <h3>Rank Range: {rankRange}</h3>
      </div>
    );
  };

  // Function to render college predictions
  const renderCollegePredictions = (collegeType, colleges) => {
    return colleges.map((college, index) => (
      <div key={index}>
        <h3>{college.name}</h3>
        <p>Location: {college.location}</p>
        <p>Previous Year Cutoff: {college.previous_year_cutoff}</p>
        <p>Admission Probability: {college.admission_probability}</p>
      </div>
    ));
  };

  return (
    <div>
      <h1>NEET Rank Prediction</h1>
      {geminiData ? (
        <div>
          <div>
            <h2>Performance Analysis</h2>
            {renderTopicWisePerformance(geminiData.performance_analysis.topic_wise_performance)}
            <h3>Difficulty Analysis</h3>
            <p>Easy: {geminiData.performance_analysis.difficulty_analysis.easy}</p>
            <p>Medium: {geminiData.performance_analysis.difficulty_analysis.medium}</p>
            <p>Hard: {geminiData.performance_analysis.difficulty_analysis.hard}</p>
          </div>
          <div>
            <h2>User Insights</h2>
            <h3>Weak Areas</h3>
            {renderWeakAreas(geminiData.user_insights.weak_areas)}
            <h3>Strong Areas</h3>
            {renderStrongAreas(geminiData.user_insights.strong_areas)}
            <h3>Improvement Trends</h3>
            {renderImprovementTrends(geminiData.user_insights.improvement_trends.topic_improvements)}
          </div>
          <div>
            {renderPredictedRank(geminiData.predicted_rank, geminiData.rank_range)}
          </div>
          <div>
            <h2>College Predictions</h2>
            <h3>Government Colleges</h3>
            {renderCollegePredictions("government_colleges", geminiData.college_predictions.government_colleges)}
            <h3>Private Colleges</h3>
            {renderCollegePredictions("private_colleges", geminiData.college_predictions.private_colleges)}
          </div>
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default App;

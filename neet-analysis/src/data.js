export const apiResponse = {
    predicted_rank: 10000,
    rank_range: "9000-11000",
    performance_analysis: {
      topic_wise_performance: [
        { topic: "Body Fluids and Circulation", accuracy: "86%", strength_level: "strong" },
        { topic: "Human Reproduction", accuracy: "38%", strength_level: "weak" },
        { topic: "Reproductive Health", accuracy: "43%", strength_level: "weak" },
        { topic: "Respiration and Gas Exchange", accuracy: "66%", strength_level: "moderate" },
      ],
    },
    college_predictions: {
      government_colleges: [
        { name: "AIIMS Delhi", location: "Delhi", previous_year_cutoff: "100-500", admission_probability: "low" },
        { name: "MAMC, Delhi", location: "Delhi", previous_year_cutoff: "500-1500", admission_probability: "low" },
      ],
      private_colleges: [
        { name: "Manipal College of Medical Sciences", location: "Karnataka", previous_year_cutoff: "10000-15000", admission_probability: "high" },
      ],
    },
  };
  
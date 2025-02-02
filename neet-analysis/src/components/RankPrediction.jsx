import { apiResponse } from "../data";

const RankPrediction = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-lg text-center">
      <h2 className="text-xl font-bold">Predicted NEET Rank</h2>
      <p className="text-2xl text-blue-600 font-semibold">{apiResponse.predicted_rank}</p>
      <p className="text-gray-500">Rank Range: {apiResponse.rank_range}</p>
    </div>
  );
};

export default RankPrediction;
